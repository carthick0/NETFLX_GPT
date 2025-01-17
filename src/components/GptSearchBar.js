import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import generateContent from '../utils/gemini';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query: "
      + searchText.current.value +
      "only give me names of 5 movies, comma separated. Example Result: Bahubali, Pushpa, KGF, Salaar, GameChanger";

    const gptResults = await generateContent(gptQuery);
    console.log(gptResults.response.text());
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 bg-opacity-70' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].placeholder} />
        <button className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  );
}

export default GptSearchBar;
