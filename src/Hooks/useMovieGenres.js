import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGenres } from "../utils/movieSlice";

const useMovieGenres = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!movieId) return;

    fetchData();
  }, [movieId]);

  const fetchData = async () => {
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    //   API_OPTIONS
    // );

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addGenres(data.genres));
  };
  return <div>useMovieGenres</div>;
};

export default useMovieGenres;
