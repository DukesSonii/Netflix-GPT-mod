import React, { useEffect, useState } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerforEachMovie } from "../utils/movieSlice";
//Fetch trailer here and update it with trailer video data

const useMovieTrailerforMov = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;
    getMovieTrailer();
  }, [movieId]);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filterlist = json?.results?.filter((mov) => mov.type === "Trailer");
    const trailer = filterlist.length ? filterlist[0] : json.results[0];
    dispatch(addTrailerforEachMovie(trailer));
  };
};

export default useMovieTrailerforMov;
