import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../Secondary Container/MovieList";

const GptMovieSugg = () => {
  const { movieName, movieResultList } = useSelector((store) => store.gpt);

  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movie, idx) => (
          <MovieList key={movie} title={movie} movies={movieResultList[idx]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSugg;
