import { createSlice } from "@reduxjs/toolkit";

const TVShowsSlice = createSlice({
  name: "Shows",
  initialState: {
    trendingShows: null,
    todayShows: null,
    upcomingShows: null,
    popularShows: null,
    showTrailer: null,
    showDetails: null,
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
    addShowsTrailer: (state, action) => {
      state.showTrailer = action.payload;
    },
    addDetailsAbtShow: (state, action) => {
      state.showDetails = action.payload;
    },
  },
});

export const {
  addTrendingShows,
  addTodayShows,
  addUpcomingShows,
  addPopularShows,
  addShowsTrailer,
  addDetailsAbtShow,
} = TVShowsSlice.actions;
export default TVShowsSlice.reducer;
