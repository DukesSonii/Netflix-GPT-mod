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
    cast: null,
    similarShows: null,
    seasondetails: null,
    seasonsimages: null,
    seasontrailer: null,
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
    addCast: (state, action) => {
      state.cast = action.payload;
    },
    addSimilarShows: (state, action) => {
      state.similarShows = action.payload;
    },
    addSeasonDetails: (state, action) => {
      state.seasondetails = action.payload;
    },
    addSeasonImages: (state, action) => {
      state.seasonsimages = action.payload;
    },
    addSeasonTrailer: (state, action) => {
      state.seasontrailer = action.payload;
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
  addCast,
  addSimilarShows,
  addSeasonDetails,
  addSeasonImages,
  addSeasonTrailer,
} = TVShowsSlice.actions;
export default TVShowsSlice.reducer;
