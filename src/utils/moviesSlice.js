import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    tvSeries: null,
    upcomingMovies: null, // Changed upComingMovies to upcomingMovies for consistency
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries = action.payload; // Corrected to update tvSeries
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload; // Corrected to update upcomingMovies
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTvSeries, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
