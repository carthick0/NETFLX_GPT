import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return( 
       movies.nowPlayingMovies
        &&(
    <div className='bg-black'>
    <div className='mt-0 md:-mt-52 pl-2 md:pl-6 relative z-30'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Tv Series"} movies={movies.tvSeries}/>
    <MovieList title={"Up coming"} movies={movies.upcomingMovies}/>
  
    </div>
    </div>
  )
  );
}

export default SecondaryContainer
