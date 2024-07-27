import React, { useEffect, useState } from "react";

import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from "../utils/movieSlice";
//Fetch trailer here and update it with trailer video data

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filterJson = json.results.filter((mov) => mov.type === "Trailer");
    const trailer = filterJson.length ? filterJson[0] : json.results[0];
    dispatch(addtrailerVideo(trailer));
  };
};

export default useMovietrailer;
