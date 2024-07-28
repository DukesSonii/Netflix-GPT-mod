import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondayContainer from "./SecondayContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondayContainer />
    </div>
  );
};

export default Browse;
