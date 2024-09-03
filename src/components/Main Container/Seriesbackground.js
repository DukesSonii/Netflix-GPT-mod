import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useShowsTrailer from "../../Hooks/Hooks for Shows/useShowsTrailer";
const Seriesbackground = ({ seriesId }) => {
  const seriesVideo = useSelector((store) => store?.show?.showTrailer);

  useShowsTrailer(seriesId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          seriesVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Seriesbackground;
