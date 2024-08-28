import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopularShows,
  addTrendingShows,
  addUpcomingShows,
} from "../../utils/TVShowsSlice";
const usePopularShows = () => {
  const popular = useSelector((store) => store?.show?.popularShows);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!popular) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularShows(json.results));
  };
  return <div></div>;
};

export default usePopularShows;
