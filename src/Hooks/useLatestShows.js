import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTodayShows } from "../utils/TVShowsSlice";
const useUpcomingMovie = () => {
  const todayshow = useSelector((store) => store?.show?.todayshows);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!todayshow) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    dispatch(addTodayShows(json.results));
  };
  return <div></div>;
};

export default useUpcomingMovie;
