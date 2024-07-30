import React from "react";
import { IMG_CDN } from "../../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-36 flex-shrink-0 relative">
      <img src={IMG_CDN + posterpath} alt="Movie Card" className="rounded-md" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md"></div>
    </div>
  );
};

export default MovieCard;
