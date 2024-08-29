import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingShows } from "../../utils/TVShowsSlice";
const useTrendingShows = () => {
  const trendingShows = useSelector((store) => store?.show?.trendingShows);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!trendingShows) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTrendingShows(json.results));
  };
  return <div></div>;
};

export default useTrendingShows;
