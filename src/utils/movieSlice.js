import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovie: null,
    movietrailer: null,
    popularMovie: null,
    toprated: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovie = action.payload;
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
  },
});

export const {
  addNowPlayMovies,
  addtrailerVideo,
  addPopularMovie,
  addTopRatedmovie,
  addUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
