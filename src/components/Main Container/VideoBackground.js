import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovietrailer from "../../Hooks/useMovietrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movie?.movietrailer);
  useMovietrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
