import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addSimilarShows } from "../../utils/TVShowsSlice";

const useSimilarShows = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/tv/${movieId}/similar?language=en-US&page=1`,
          API_OPTIONS
        );

        const data = await res.json();

        dispatch(addSimilarShows(data?.results));
      } catch (error) {
        console.error("Failed to fetch movie images:", error);
      }
    };

    fetchData();
  }, [movieId, dispatch]);
  return <div>useSimilarMovies</div>;
};

export default useSimilarShows;
