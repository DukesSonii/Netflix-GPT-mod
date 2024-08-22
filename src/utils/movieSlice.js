import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
    genres: null,
    screenshots: null,
    similarSeries: null,
    userReviews: null,
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
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    addScreenshots: (state, action) => {
      state.screenshots = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similarSeries = action.payload;
    },
    addUserReviews: (state, action) => {
      state.userReviews = action.payload;
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
  addGenres,
  addScreenshots,
  addSimilarMovies,
  addUserReviews,
} = movieSlice.actions;

export default movieSlice.reducer;
