import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCharacters } from "../utils/movieSlice";
const useMovieCast = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    getMovieCast();
  }, [movieId]);

  const getMovieCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const data = await response.json();

    dispatch(addCharacters(data.cast));
  };
};

export default useMovieCast;
