import { Modal, Typography, Button } from "antd";
import React, { useState } from "react";
import Characters from "./Characters";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import PopularScreenshots from "./PopularScreenshots";
import SimilarMovies from "./SimilarMovies";
import OtherDetails from "./OtherDetails";
import UserReviews from "./UserReviews";
const ModalContent = ({
  isVisible,
  onCancel,
  onOk,
  selectedMovie,
  trailerVideo,
  cast,
  genres,
  onPosterClick,
  category,
}) => {
  const [showFullCast, setShowFullCast] = useState(false);

  const initialCast = cast?.slice(0, 3);

  const handleShowMore = () => {
    setShowFullCast(!showFullCast);
  };

  return (
    <Modal
      title={
        <span className="text-white text-2xl font-bold">
          {selectedMovie ? selectedMovie.title : "Movie Title"}
        </span>
      }
      onCancel={onCancel}
      onOk={onOk}
      visible={isVisible}
      className="custom-modal"
      style={{ top: 30, right: 150 }}
    >
      <div className="p-4 bg-black">
        <div className="pl-4 pr-4">
          <span className="text-white text-xl font-semibold">Trailer:</span>
          {trailerVideo ? (
            <iframe
              className="w-full h-64 mt-2 rounded-md mb-6"
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          ) : (
            <p className="text-white mt-2 text-base">
              Sorry! Trailer not available
            </p>
          )}
        </div>

        <br />
        <div className="flex justify-between text-base pl-4 pr-4">
          <p>
            <span className="text-gray-400">Release Date: </span>
            <span className="text-white">{selectedMovie?.release_date}</span>
          </p>
          <p>
            <span className="text-gray-400">Genres: </span>
            <span className="text-white">
              {genres?.length > 0
                ? genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </span>
          </p>
        </div>

        <hr className="border-t border-gray-600 opacity-30 my-4" />

        <div className="flex justify-between items-center text-base pl-4 pr-4">
          <p>
            <span className="text-gray-400">Popularity: </span>
            <span className="text-white">{selectedMovie?.popularity}</span>
          </p>
          <div className="flex items-center">
            <span className="text-gray-400 font-semibold mr-1">Cast:</span>
            <span className="text-white">
              {initialCast?.map((actor) => actor.name).join(", ")}
            </span>
            {cast?.length > 3 && (
              <Button
                type="link"
                onClick={handleShowMore}
                className="text-white text-base underline -ml-1"
              >
                {showFullCast ? "Show Less" : "More"}
              </Button>
            )}
          </div>
        </div>

        <hr className="border-t border-gray-600 opacity-30 my-4" />

        <p className="text-base pl-4 pr-4 mb-2">
          <span className="text-gray-400">Description: </span>
          <span className="text-white">{selectedMovie?.overview}</span>
        </p>
        <p className="text-base pl-4 pr-4">
          <span className="text-gray-400">Adult: </span>
          <span className="text-white">
            {selectedMovie?.adult ? <CheckOutlined /> : <CloseOutlined />}
          </span>
        </p>

        {showFullCast && (
          <div className="mt-4 pl-4 pr-4 w-1/2">
            <Characters cast={cast} />
          </div>
        )}

        <hr className="border-t border-gray-600 opacity-30 my-3" />

        <PopularScreenshots />
        <hr className="border-t border-gray-600 opacity-30 my-2" />
        <SimilarMovies onPosterClick={onPosterClick} />
        <hr className="border-t border-gray-600 opacity-30 mt-2" />
        <OtherDetails category={category} />
        <hr className="border-t border-gray-600 opacity-30 mb-2" />

        <UserReviews />
      </div>
    </Modal>
  );
};

export default ModalContent;
