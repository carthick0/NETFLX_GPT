import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies || movies.length === 0) {
        return (
            <div className="px-12">
                <h1 className="text-3xl py-2 text-white">{title}</h1>
                <p className="text-gray-400">No movies available.</p>
            </div>
        );
    }

    return (
        <div className="px-12 w-full" >
            <h1 className="text-3xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll w-full">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
