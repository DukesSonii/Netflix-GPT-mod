import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../Secondary Container/MovieList";
import useMovieCast from "../../Hooks/useMovieCast";
import ModalContent from "../Secondary Container/ModalContent";

import useMovieTrailerforMov from "../../Hooks/useMovieTrailerforMov";
import useMovieGenres from "../../Hooks/useMovieGenres";
import useGetImages from "../../Hooks/useGetImages";
import useSimilarMovies from "../../Hooks/useSimilarMovies";
import useUserReviews from "../../Hooks/useUserReviews";
const GptMovieSugg = () => {
  const { movieName, movieResultList } = useSelector((store) => store.gpt);
  const movies = useSelector((store) => store.movie);
  const trailerVideo = useSelector((store) => store.movie.trailerForEachMovie);
  const [isVisible, setisisVisible] = useState(false);
  const [selectedMovie, setselectedMovie] = useState(null);
  const cast = useSelector((store) => store.movie.charactersCast);
  const genres = useSelector((store) => store.movie?.genres);

  useGetImages(selectedMovie?.id);
  useMovieGenres(selectedMovie?.id);
  useMovieCast(selectedMovie?.id);
  useMovieTrailerforMov(selectedMovie?.id);
  useSimilarMovies(selectedMovie?.id);
  useUserReviews(selectedMovie?.id);

  const handleOk = () => {
    setisisVisible(false);
  };

  const showModal = (movie) => {
    setisisVisible(true);
    setselectedMovie(movie);
  };
  const handleCancel = () => {
    setisisVisible(false);
  };
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movie, idx) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResultList[idx]}
            onPosterClick={showModal}
          />
        ))}
      </div>
      <ModalContent
        isVisible={isVisible}
        selectedMovie={selectedMovie}
        trailerVideo={trailerVideo}
        onCancel={handleCancel}
        onOk={handleOk}
        cast={cast}
        genres={genres}
        onPosterClick={showModal}
      />
    </div>
  );
};

export default GptMovieSugg;
