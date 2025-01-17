import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await response.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results)); // Ensure you dispatch json.results
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return null; 
}
export default usePopularMovies;