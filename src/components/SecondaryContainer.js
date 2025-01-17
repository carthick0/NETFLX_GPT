import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return( 
       movies.nowPlayingMovies
        &&(
    <div className='bg-black'>
    <div className='-mt-52 pl-6 relative z-30'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    <MovieList title={"TV Series"} movies={movies.tvSeries}/>
    </div>
    </div>
  )
  );
}

export default SecondaryContainer