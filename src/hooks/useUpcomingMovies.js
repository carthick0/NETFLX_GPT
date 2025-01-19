import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies= async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await response.json();
       
        dispatch(addUpcomingMovies(json.results)); // Ensure you dispatch json.results
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    return null; 
}
export default useUpcomingMovies;