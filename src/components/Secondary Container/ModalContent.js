import { Modal, Typography, Button } from "antd";
import React, { useState } from "react";
import Characters from "./Characters";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import PopularScreenshots from "./PopularScreenshots";
import SimilarMovies from "./SimilarMovies";
import UserReviews from "./UserReviews";

const { Text } = Typography;

const ModalContent = ({
  isVisible,
  onCancel,
  onOk,
  selectedMovie,
  trailerVideo,
  cast,
  genres,
  onPosterClick,
}) => {
  const [showFullCast, setShowFullCast] = useState(false);

  const initialCast = cast?.slice(0, 3);

  const handleShowMore = () => {
    setShowFullCast(!showFullCast);
  };

  return (
    <Modal
      title={selectedMovie ? selectedMovie.title : "Movie Title"}
      onCancel={onCancel}
      onOk={onOk}
      visible={isVisible}
      className="custom-modal"
      style={{ top: 30, right: 150 }}
    >
      <div className="p-4">
        <div>
          <Text className="text-white text-lg font-semibold">Trailer:</Text>
          {trailerVideo ? (
            <iframe
              className="w-full h-64 mt-2 rounded-md mb-6"
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          ) : (
            <p className="text-white mt-2">Sorry! Trailer not available</p>
          )}
        </div>

        <br />
        <div className="flex justify-between">
          <p>
            <Text className="text-white text-sm font-semibold">
              Release Date:{" "}
            </Text>
            <span className="text-white text-sm">
              {selectedMovie?.release_date}
            </span>
          </p>
          <p>
            <Text className="text-white text-sm font-semibold">Genres: </Text>
            <span className="text-white">
              {genres?.length > 0
                ? genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </span>
          </p>
        </div>

        <hr className="border-t border-gray-600 opacity-30 my-2" />
        <div className="flex justify-between items-center">
          <p>
            <Text className="text-white text-sm font-semibold">
              Popularity:{" "}
            </Text>
            <span className="text-white text-sm">
              {selectedMovie?.popularity}
            </span>
          </p>
          <div className="flex items-center">
            <span className="font-semibold mr-1">Cast:</span>
            <span className="text-white text-sm">
              {initialCast?.map((actor) => actor.name).join(", ")}
            </span>
            {cast?.length > 3 && (
              <Button
                type="link"
                onClick={handleShowMore}
                className="text-white text-sm underline"
              >
                {showFullCast ? "Show Less" : "More"}
              </Button>
            )}
          </div>
        </div>
        <hr className="border-t border-gray-600 opacity-30 my-2" />

        <p className="text-base">
          <Text className="text-white text-sm font-semibold">
            Description:{" "}
          </Text>
          <span className="text-white text-sm">{selectedMovie?.overview}</span>
        </p>
        <p>
          <Text className="text-white text-sm font-semibold">Adult: </Text>
          <span className="text-white text-sm">
            {selectedMovie?.adult ? <CheckOutlined /> : <CloseOutlined />}
          </span>
        </p>
        {showFullCast && (
          <div className="mt-2">
            <Characters cast={cast} />
          </div>
        )}
        <hr className="border-t border-gray-600 opacity-30 my-2" />

        <PopularScreenshots />
        <hr className="border-t border-gray-600 opacity-30 my-2" />
        <SimilarMovies onPosterClick={onPosterClick} />
        <UserReviews />
      </div>
    </Modal>
  );
};

export default ModalContent;
