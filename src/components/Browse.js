import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./Main Container/MainContainer";
import SecondayContainer from "./Secondary Container/SecondayContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import useTrendingShows from "../Hooks/useTrendingShows";
import useTopRated from "../Hooks/useTopRated";
import GptSearch from "./GPT Search Feature/GptSearchPage";
import { useSelector } from "react-redux";
import ShowsContainer from "./Secondary Container for Shows/ShowsContainer";
import useLatestShows from "../Hooks/useLatestShows";
import useUpcomingShows from "../Hooks/useUpcomingShows";
import usePopularShows from "../Hooks/usePopularShows";

const Browse = () => {
  const showGptSearchVal = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  useTopRated();
  useTrendingShows();
  useLatestShows();
  usePopularShows();
  useUpcomingShows();
  return (
    <div>
      <Header />
      {showGptSearchVal ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondayContainer />
          <ShowsContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
