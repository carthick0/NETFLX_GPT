import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return null; // Return null if movies is null, undefined, or empty
  }

  const mainMovie = movies[0];

  if (!mainMovie) {
    return null; // Additional check to ensure mainMovie is not undefined
  }

  const { original_title, overview } = mainMovie;

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
