import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./Main Container/MainContainer";
import SecondayContainer from "./Secondary Container/SecondayContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";

import useTopRated from "../Hooks/useTopRated";
import GptSearch from "./GPT Search Feature/GptSearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearchVal = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovie();
  useUpcomingMovie();
  useTopRated();

  return (
    <div>
      <Header />
      {showGptSearchVal ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondayContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
