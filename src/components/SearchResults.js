import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { Spin } from "antd";
import SearchShimmer from "./SearchShimmer";
const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(query);

      setError(null);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        );

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleBack = () => {
    navigate(-1);
  };

  {
    movies.length === 0 && !loading && !error && (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-white text-2xl">No results found for "{query}"</p>
      </div>
    );
  }
  if (loading) {
    return (
      <>
        <SearchShimmer />
      </>
    );
  }

  return (
    <div className="bg-black min-h-screen px-12 py-2">
      <button
        className="text-xs font-bold text-white bg-gray-500 hover:bg-gray-600 rounded-lg mb-4 px-4 py-2 mt-20"
        onClick={handleBack}
      >
        Back
      </button>
      <h2 className="text-white text-2xl mb-4">
        Search Results for <span className="text-red-600">"{query}"</span>
      </h2>
      {error ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-red-500 text-2xl">{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) =>
            movie.poster_path ? (
              <div
                key={movie.id}
                className="flex flex-col items-center mb-4 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-64 h-auto mb-4"
                />
                <h3 className="text-white text-xl mb-2">
                  {movie.title || movie?.original_name}
                </h3>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
