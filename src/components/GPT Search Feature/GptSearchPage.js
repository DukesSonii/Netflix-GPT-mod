import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugg from "./GptMovieSugg";
import { BG_URL } from "../../utils/constants";
const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSugg />
    </div>
  );
};

export default GptSearchPage;
