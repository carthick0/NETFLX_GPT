import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const NowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await response.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results)); // Ensure you dispatch json.results
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return null; // or return some JSX if needed
};

export default NowPlayingMovies;
