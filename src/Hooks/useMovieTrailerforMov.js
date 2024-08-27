import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerforEachMovie } from "../utils/movieSlice";

const useMovieTrailerforMov = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    getMovieTrailer();
  }, [movieId]);

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();

      const results = json?.results || [];
      const filterlist = results.filter((mov) => mov.type === "Trailer");
      const trailer = filterlist.length ? filterlist[0] : results[0];
      dispatch(addTrailerforEachMovie(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };
};

export default useMovieTrailerforMov;
