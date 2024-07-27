import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayMovie: null,
    movietrailer: null,
  },
  reducers: {
    addNowPlayMovies: (state, action) => {
      state.nowPlayMovie = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.movietrailer = action.payload;
    },
  },
});

export const { addNowPlayMovies, addtrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
