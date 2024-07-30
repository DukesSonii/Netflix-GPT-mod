import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugg from "./GptMovieSugg";
import { BG_URL } from "../../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptMovieSugg />
      </div>
    </div>
  );
};

export default GptSearchPage;
