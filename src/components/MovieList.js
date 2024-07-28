import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-5 bg-transparent">
      <h1 className="text-2xl py-2 font-sans mb-4 text-white">{title}</h1>
      <div className="flex space-x-3 overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterpath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
