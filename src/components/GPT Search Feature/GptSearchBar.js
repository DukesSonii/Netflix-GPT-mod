import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const selectlang = useSelector((store) => store.config.lang);
  console.log(selectlang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-opacity-75 bg-black rounded-full flex items-center">
        <input
          type="text"
          placeholder={lang[selectlang]?.gptSearchPlaceholder}
          className="p-4 flex-grow bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
        />
        <button className="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-800 transition-colors duration-300">
          {lang[selectlang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
