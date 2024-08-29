import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addCast } from "../../utils/TVShowsSlice";

const useCastforShows = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    getShowCast();
  }, [movieId]);

  const getShowCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}/credits?language=en-US`,
      API_OPTIONS
    );

    const data = await response.json();

    dispatch(addCast(data.cast));
  };
};

export default useCastforShows;
