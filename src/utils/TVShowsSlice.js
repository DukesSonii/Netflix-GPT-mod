import { createSlice } from "@reduxjs/toolkit";

const TVShowsSlice = createSlice({
  name: "Shows",
  initialState: {
    trendingShows: null,
    todayShows: null,
    upcomingShows: null,
    popularShows: null,
  },

  reducers: {
    addTrendingShows: (state, action) => {
      state.trendingShows = action.payload;
    },
    addTodayShows: (state, action) => {
      state.todayShows = action.payload;
    },
    addUpcomingShows: (state, action) => {
      state.upcomingShows = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
  },
});

export const {
  addTrendingShows,
  addTodayShows,
  addUpcomingShows,
  addPopularShows,
} = TVShowsSlice.actions;
export default TVShowsSlice.reducer;
