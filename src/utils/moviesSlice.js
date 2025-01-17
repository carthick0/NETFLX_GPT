import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies:null,
        tvSeries:null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies=action.payload;
        },
        addTvSeries:(state,action)=>{
            state.tvSeries=action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies ,addUpcomingMovies,addTvSeries} = moviesSlice.actions;

export default moviesSlice.reducer;
