import React from "react";
import { Modal } from "antd";
import PopularScreenshots from "./PopularScreenshots";

const EpisodeModal = ({
  isVisible,
  onOk,
  onCancel,
  seasonDetails,
  seasonImages,
  seasonTrailer,
}) => {
  return (
    <Modal
      title={`Episodes for ${seasonDetails?.name}`}
      visible={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      className="custom-modal"
      style={{ top: 0, right: 170 }}
    >
      <div className="p-4 bg-black">
        <div className="pl-4 pr-4">
          <span className="text-white text-xl font-semibold">Trailer:</span>
          {seasonTrailer ? (
            <iframe
              className="w-full h-64 mt-2 rounded-md mb-6"
              src={`https://www.youtube.com/embed/${seasonTrailer?.key}?&autoplay=1&mute=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          ) : (
            <p className="text-white mt-2 text-base">
              Sorry! Trailer not available
            </p>
          )}
        </div>
        {/* Episode list rendering */}
        {seasonDetails?.episodes?.map((episode) => (
          <div
            key={episode.id}
            className="mb-4 p-4 bg-gray-900 rounded-md flex"
          >
            <div className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                alt={episode.name}
                className="w-20 h-28 rounded-md object-cover"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-white font-bold text-lg">
                Episode {episode.episode_number}: {episode.name}
              </h3>
              <p className="text-gray-400 mt-1">{episode.overview}</p>
              <p className="text-gray-400 mt-2">
                Release Date: {episode.air_date}
              </p>
              <p className="text-gray-400 mt-2">
                Runtime: {episode.runtime} minutes
              </p>
            </div>
          </div>
        ))}
        <PopularScreenshots seasonImages={seasonImages} />
      </div>
    </Modal>
  );
};

export default EpisodeModal;
