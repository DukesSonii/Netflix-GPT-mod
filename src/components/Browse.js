import React, { useEffect, useState } from "react";
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
import { Switch } from "antd";
const Browse = () => {
  const [isMovies, setIsMovies] = useState(true); // State to track toggle

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
          <div className="absolute ml-[90%] -mt-80">
            <Switch
              checkedChildren={<span style={{ fontSize: "16px" }}>Movies</span>}
              unCheckedChildren={
                <span style={{ fontSize: "16px" }}>Series</span>
              }
              checked={isMovies}
              onChange={() => setIsMovies(!isMovies)}
              style={{
                width: "80px",
                height: "25px",
                borderRadius: "20px",
                backgroundColor: isMovies ? "#1d72b8" : "#4b4b4b",
                margin: 0,
                paddingBottom: 2,
              }}
            />
          </div>
          {isMovies ? <SecondayContainer /> : <ShowsContainer />}
        </>
      )}
    </div>
  );
};

export default Browse;
