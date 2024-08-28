import React from "react";
import { IMG_CDN } from "../../utils/constants";

const ShowsCard = ({ posterpath, popular }) => {
  if (!posterpath) return null;
  return (
    <div className="w-28 md:w-44 flex-shrink-0 relative">
      <img src={IMG_CDN + posterpath} alt="Movie Card" className="rounded-md" />
      <h2 className="text-white">{popular}</h2>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent"></div>
    </div>
  );
};

export default ShowsCard;
