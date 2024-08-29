import React, { useState } from "react";
import { Modal } from "antd";
import PopularScreenshots from "./PopularScreenshots";
import useParticularEpisode from "../../../../Hooks/Hooks for Shows/useParticularEpisode";
import { useSelector } from "react-redux";

const EpisodeModal = ({
  isVisible,
  onOk,
  onCancel,
  seasonDetails,
  seasonImages,
  seasonTrailer,
  basicdetails,
  selectedSeason,
}) => {
  const [activeAccordion, setActiveAccordion] = useState(null); // Track the open accordion
  const getEpisode = useSelector((store) => store?.show?.episodeinfo);
  console.log(getEpisode);

  useParticularEpisode(
    basicdetails?.id,
    selectedSeason?.season_number,
    activeAccordion
  );

  const handleAccordionToggle = (episodeNumber) => {
    setActiveAccordion(
      activeAccordion === episodeNumber ? null : episodeNumber
    );
  };

  return (
    <div>
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

          {seasonDetails?.episodes?.map((episode) => (
            <div
              key={episode.id}
              className="mb-4 p-4 bg-gray-900 rounded-md flex flex-col cursor-pointer"
              onClick={() => handleAccordionToggle(episode.episode_number)}
            >
              <div className="flex">
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
                <span className="text-white">
                  {activeAccordion === episode.episode_number ? "⬇️" : "⬆️"}
                </span>
              </div>

              {activeAccordion === episode.episode_number &&
                getEpisode?.length > 0 && (
                  <iframe
                    width="100%"
                    height="315"
                    className="mt-4 rounded-md"
                    src={`https://www.youtube.com/embed/${getEpisode[0]?.key}?&autoplay=1&mute=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
            </div>
          ))}

          <PopularScreenshots seasonImages={seasonImages} />
        </div>
      </Modal>
    </div>
  );
};

export default EpisodeModal;
