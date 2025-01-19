import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieResults, movieName } = gpt;
  if (!movieName) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
    <div>
    {movieName.map((movieName,index)=><MovieList key={movieName } title={movieName} movies={movieResults[index]}/>)}
    
    </div>
     
    </div>
  );
};

export default GptMovieSuggestions;
