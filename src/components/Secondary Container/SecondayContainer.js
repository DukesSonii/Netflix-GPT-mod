import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondayContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="relative mt-0 md:-mt-64 z-20 pl-1 md:pl-6">
        <MovieList title={"Now Playing"} movies={movies.nowPlayMovie} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Top-Rated"} movies={movies.toprated} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
      </div>
    </div>
  );
};

export default SecondayContainer;
