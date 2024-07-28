import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovie: null,
    movietrailer: null,
    popularMovie: null,
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
  },
});

export const { addNowPlayMovies, addtrailerVideo, addPopularMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
