import React from "react";
import { IMG_CDN } from "../../../utils/constants";

const CharactersList = ({ char }) => {
  return (
    <div className="w-28 md:w-44 flex-shrink-0 relative">
      <img
        src={IMG_CDN + char?.profile_path}
        alt="Movie Card"
        className="rounded-md"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent"></div>
    </div>
  );
};

export default CharactersList;
