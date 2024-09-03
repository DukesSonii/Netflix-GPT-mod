import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./Main Container/MainContainer";
import SecondayContainer from "./Secondary Container/SecondayContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import useTrendingShows from "../Hooks/Hooks for Shows/useTrendingShows";
import useTopRated from "../Hooks/useTopRated";
import GptSearch from "./GPT Search Feature/GptSearchPage";
import { useSelector } from "react-redux";
import ShowsContainer from "./Secondary Container for Shows/ShowsContainer";
import useLatestShows from "../Hooks/Hooks for Shows/useLatestShows";
import useUpcomingShows from "../Hooks/Hooks for Shows/useUpcomingShows";
import usePopularShows from "../Hooks/Hooks for Shows/usePopularShows";
import SeriesContainer from "./Main Container/SeriesContainer";

const Browse = () => {
  const [isMovieMode, setIsMovieMode] = useState(true);
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
          {isMovieMode ? <MainContainer /> : <SeriesContainer />}
          <div className="absolute ml-[82%] p-1 w-60 -mt-80 bg-black bg-opacity-70 backdrop-blur-sm rounded-full shadow-lg border-2 border-gray-700">
            <button
              className={`${
                isMovieMode
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-gray-300 hover:text-white hover:bg-gray-700"
              } rounded-full w-1/2 py-2 text-center transition-colors duration-300 ease-in-out`}
              onClick={() => setIsMovieMode(true)}
            >
              Watch Movies
            </button>
            <button
              className={`${
                !isMovieMode
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-gray-300 hover:text-white hover:bg-gray-700"
              } rounded-full w-1/2 py-2 text-center transition-colors duration-300 ease-in-out`}
              onClick={() => setIsMovieMode(false)}
            >
              Watch Series
            </button>
          </div>
          {isMovieMode ? <SecondayContainer /> : <ShowsContainer />}
        </>
      )}
    </div>
  );
};

export default Browse;
