import React, { useRef, useState } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { addGPTMovies } from "../../utils/gptSlice";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const GptSearchBar = () => {
  const selectlang = useSelector((store) => store.config.lang);
  const inputdata = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const searchTMDB = async (movie) => {
    const search = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await search.json();
    return json.results;
  };

  const gptsearchclick = async () => {
    setLoading(true);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputdata.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptmovies = gptresults.choices?.[0]?.message?.content.split(",");
    const promisearr = gptmovies.map((film) => searchTMDB(film));

    const tmdbRes = await Promise.all(promisearr);
    dispatch(addGPTMovies({ movieName: gptmovies, movieResultList: tmdbRes }));
    setLoading(false);
  };
  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 42, color: "white" }} spin />
  );

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-opacity-75 bg-black rounded-full flex items-center mb-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          ref={inputdata}
          placeholder={lang[selectlang]?.gptSearchPlaceholder}
          className="p-4 flex-grow bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
        />
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-800 transition-colors duration-300"
          onClick={gptsearchclick}
        >
          {lang[selectlang]?.search}
        </button>
      </form>
      {loading && (
        <div className="mt-4">
          <Spin indicator={loadingIcon} />
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
