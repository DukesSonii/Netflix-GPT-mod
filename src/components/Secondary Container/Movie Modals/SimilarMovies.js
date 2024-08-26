import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../../../utils/constants";
import { Button, Spin } from "antd";

const SimilarMovies = ({ onPosterClick }) => {
  const Movies = useSelector((store) => store.movie.similarSeries);
  const [showMovies, setShowMovies] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMovies(!showMovies);
      setLoading(false);
    }, 2000);
  };

  const handlePosterClick = (movie) => {
    setLoading(true);
    onPosterClick(movie);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this duration if needed
  };

  return (
    <div className="pl-4 pr-4">
      <p className="text-gray-400 text-base font-semibold">Similar Movies</p>
      <Button
        type="link"
        onClick={handleClick}
        className="mb-2 -ml-4 text-gray-400 text-base underline"
      >
        {showMovies ? "Hide Movies" : "Tap to view Similar Movies"}
      </Button>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        showMovies && (
          <div className="flex flex-wrap gap-8 mb-3">
            {Movies?.slice(0, 11).map((movie) => {
              if (!movie?.poster_path) return null;
              return (
                <div
                  key={movie.id}
                  className="w-1/4 md:w-1/6 lg:w-1/6 cursor-pointer"
                  onClick={() => handlePosterClick(movie)}
                >
                  <img
                    src={IMG_CDN + movie?.poster_path}
                    alt={movie?.original_title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default SimilarMovies;
