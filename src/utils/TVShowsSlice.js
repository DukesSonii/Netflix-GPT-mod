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
    episodeinfo: null,
    castforSeason: null,
    userReviewSeason: null,
    keywords: null,
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
    addEpisodeInfo: (state, action) => {
      state.episodeinfo = action.payload;
    },
    addCastforSeason: (state, action) => {
      state.castforSeason = action.payload;
    },
    addUserReviewsforSeason: (state, action) => {
      state.userReviewSeason = action.payload;
    },
    addKeywords: (state, action) => {
      state.keywords = action.payload;
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
  addEpisodeInfo,
  addCastforSeason,
  addUserReviewsforSeason,
  addKeywords,
} = TVShowsSlice.actions;
export default TVShowsSlice.reducer;
