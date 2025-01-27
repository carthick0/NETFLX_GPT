import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import { addTvSeries } from "../utils/moviesSlice";


const useTvSeries = () => {
    const dispatch=useDispatch();
    const getTvSeries = async () => {
            const response = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS);
            const json = await response.json();
            
            dispatch(addTvSeries(json.results)); 
        };
    
        useEffect(() => {
            getTvSeries();
        }, []);
    
  return null;
  
}

export default useTvSeries;
