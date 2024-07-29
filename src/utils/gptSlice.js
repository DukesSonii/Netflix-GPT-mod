import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",

  initialState: {
    showGPTSearch: false,
  },

  reducers: {
    toggleSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch; //if value of showGPTSearch is true make it false else vice versa tawgl mechanism
    },
  },
});

export const { toggleSearchView } = gptSlice.actions;
export default gptSlice.reducer;
