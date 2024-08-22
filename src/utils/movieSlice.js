import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovie: null,
    movietrailer: null,
    popularMovie: null,
    toprated: null,
    upcomingMovie: null,
    charactersCast: null,
    trailerForEachMovie: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovie = action.payload; //whatever come in action.payld will put in nowplayingMovie
    },
    addtrailerVideo: (state, action) => {
      state.movietrailer = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopRatedmovie: (state, action) => {
      state.toprated = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addCharacters: (state, action) => {
      state.charactersCast = action.payload;
    },
    addTrailerforEachMovie: (state, action) => {
      state.trailerForEachMovie = action.payload;
    },
  },
});

export const {
  addNowPlayMovies,
  addtrailerVideo,
  addPopularMovie,
  addTopRatedmovie,
  addUpcomingMovie,
  addCharacters,
  addTrailerforEachMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
