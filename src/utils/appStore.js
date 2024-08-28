import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import TVShowsSlice from "./TVShowsSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
    show: TVShowsSlice,
  },
});

export default appStore;
