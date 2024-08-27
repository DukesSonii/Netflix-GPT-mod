import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtrailerVideo } from "../utils/movieSlice";

const useMovietrailer = (movieId) => {
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
      const filterJson = results.filter((mov) => mov.type === "Trailer");
      const trailer = filterJson.length ? filterJson[0] : results[0];
      dispatch(addtrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };
};

export default useMovietrailer;
