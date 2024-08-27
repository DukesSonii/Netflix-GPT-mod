import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingShows, addUpcomingShows } from "../utils/TVShowsSlice";
const useUpcomingShows = () => {
  const upcomingShows = useSelector((store) => store?.show?.upcomingShows);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!upcomingShows) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    dispatch(addUpcomingShows(json.results));
  };
  return <div></div>;
};

export default useUpcomingShows;
