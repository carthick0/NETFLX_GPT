import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang) || 'english'; // Default to 'english' if langKey is undefined
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query: "
      + searchText.current.value +
      " only give me names of 5 movies, comma separated. Example Result: Bahubali, Pushpa, KGF, Salaar, GameChanger";
    const gptResultls = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const gptMovies = gptResultls.choices[0]?.message.content.split(",");

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovies({ movieName: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 bg-opacity-70' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey]?.placeholder || lang['english'].placeholder} />
        <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey]?.search || lang['english'].search}</button>
      </form>
    </div>
  );
}

export default GptSearchBar;
