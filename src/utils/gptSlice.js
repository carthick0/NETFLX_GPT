import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieName:null,
    },
    reducers:{
        toggleGptSearchView:(state )=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovies:(state,action)=>{
            const{movieName,movieResults}=action.payload
            state.movieName=movieName;
            state.movieResults=movieResults;
        },
    }
})

export const {toggleGptSearchView,addGptMovies}=gptSlice.actions;
export default gptSlice.reducer;