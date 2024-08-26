import React, { useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useMovieCast from "../../Hooks/useMovieCast";
import ModalContent from "./Movie Modals/ModalContent";

import useMovieTrailerforMov from "../../Hooks/useMovieTrailerforMov";
import useMovieGenres from "../../Hooks/useMovieGenres";
import useGetImages from "../../Hooks/useGetImages";
import useSimilarMovies from "../../Hooks/useSimilarMovies";
import useUserReviews from "../../Hooks/useUserReviews";
const SecondayContainer = () => {
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
  return (
    <div className="bg-black">
      <div className="relative mt-0 md:-mt-64 z-20 pl-1 md:pl-6">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayMovie}
          onPosterClick={showModal}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovie}
          onPosterClick={showModal}
        />
        <MovieList
          title={"Top-Rated"}
          movies={movies.toprated}
          onPosterClick={showModal}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovie}
          onPosterClick={showModal}
        />
        <ModalContent
          isVisible={isVisible}
          selectedMovie={selectedMovie}
          trailerVideo={trailerVideo}
          onCancel={handleCancel}
          onOk={handleOk}
          cast={cast}
          genres={genres?.genres}
          onPosterClick={showModal}
          category={genres}
        />
      </div>
    </div>
  );
};

export default SecondayContainer;
