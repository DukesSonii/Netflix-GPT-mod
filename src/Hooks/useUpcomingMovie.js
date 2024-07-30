import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedmovie } from "../utils/movieSlice";
const useUpcomingMovie = () => {
  const toprated = useSelector((store) => store?.movies?.toprated);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!toprated) fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedmovie(json.results));
  };
  return <div></div>;
};

export default useUpcomingMovie;
