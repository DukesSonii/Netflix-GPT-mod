import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondayContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="relative -mt-52 z-20 pl-6">
        <MovieList title={"Now Playing"} movies={movies.nowPlayMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
      </div>
    </div>
  );
};

export default SecondayContainer;
