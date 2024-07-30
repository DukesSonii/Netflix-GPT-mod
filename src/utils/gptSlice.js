import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",

  initialState: {
    showGPTSearch: false,
    movieName: null,
    movieResultList: null,
  },

  reducers: {
    toggleSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch; //if value of showGPTSearch is true make it false else vice versa tawgl mechanism
    },

    addGPTMovies: (state, action) => {
      const { movieName, movieResultList } = action.payload;
      state.movieName = movieName;
      state.movieResultList = movieResultList;
    },
  },
});

export const { toggleSearchView, addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
