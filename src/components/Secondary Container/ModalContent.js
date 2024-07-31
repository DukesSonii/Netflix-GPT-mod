import { Modal, Typography } from "antd";
import React from "react";
import Characters from "./Characters";

const { Text } = Typography;

const ModalContent = ({
  isVisible,
  onCancel,
  onOk,
  selectedMovie,
  trailerVideo,
  cast,
}) => {
  return (
    <Modal
      title={selectedMovie ? selectedMovie.title : "Movie Title"}
      onCancel={onCancel}
      onOk={onOk}
      visible={isVisible}
      className="custom-modal bg-gray-800 rounded-md"
      style={{ top: 30 }}
    >
      <div className="p-4">
        <p className="text-base">
          <Text className="text-white text-lg font-semibold">Description:</Text>
          <span className="text-white">{selectedMovie?.overview}</span>
        </p>
        <br />
        <p>
          <Text className="text-white text-lg font-semibold">
            Release Date:{" "}
          </Text>
          <span className="text-white">{selectedMovie?.release_date}</span>
        </p>
        <p>
          <Text className="text-white text-lg font-semibold">Popularity: </Text>
          <span className="text-white">{selectedMovie?.popularity}</span>
        </p>
        <div className="mt-4">
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
        <Characters cast={cast} />
      </div>
    </Modal>
  );
};

export default ModalContent;
