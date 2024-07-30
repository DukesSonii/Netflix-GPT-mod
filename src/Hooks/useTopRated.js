import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
const useUpcomingMovie = () => {
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!upcomingMovie) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
  return <div></div>;
};

export default useUpcomingMovie;
