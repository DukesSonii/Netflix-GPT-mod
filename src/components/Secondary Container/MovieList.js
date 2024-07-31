import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";

import MovieCard from "./MovieCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IMG_CDN } from "../../utils/constants";
import { Typography } from "antd";
import "./MovieList.css";
import { useSelector } from "react-redux";
import useMovieCast from "../../Hooks/useMovieCast";
import ModalContent from "./ModalContent";
import useMovieTrailerforMov from "../../Hooks/useMovieTrailerforMov";
const { Text } = Typography;

const MovieList = ({ title, movies }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerForEachMovie);
  const [isVisible, setisisVisible] = useState(false);
  const [selectedMovie, setselectedMovie] = useState(null);
  const scrollRef = useRef(null);
  const cast = useSelector((store) => store.movie.charactersCast);
  useMovieCast(selectedMovie?.id);

  useMovieTrailerforMov(selectedMovie?.id);
  const leftScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const rightScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

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
    <div className="px-5 relative ">
      <h1 className="text-lg md:text-2xl py-2 font-sans mb-4 text-white">
        {title}
      </h1>
      <h1 className="text-white">{movies?.title}</h1>
      <div
        className="flex space-x-3 overflow-x-scroll cursor-pointer"
        style={{
          scrollbarWidth: "none",
        }}
        ref={scrollRef}
      >
        {movies?.map((movie) => (
          <div key={movie.id} onClick={() => showModal(movie)}>
            <MovieCard key={movie.id} posterpath={movie?.poster_path} />
          </div>
        ))}
      </div>

      <Button
        className="absolute top-1/2 transform -translate-y-1 left-0 z-10 text-4xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
        onClick={leftScroll}
      >
        <LeftOutlined />
      </Button>
      <Button
        className="absolute top-1/2 transform -translate-y-1 right-0  text-4xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
        onClick={rightScroll}
      >
        <RightOutlined />
      </Button>
      <ModalContent
        isVisible={isVisible}
        selectedMovie={selectedMovie}
        trailerVideo={trailerVideo}
        onCancel={handleCancel}
        onOk={handleOk}
        cast={cast}
      />
    </div>
  );
};

export default MovieList;
