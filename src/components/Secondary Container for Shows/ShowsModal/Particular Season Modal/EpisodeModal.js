import React, { useState } from "react";
import { Modal, Button } from "antd";
import PopularScreenshots from "./PopularScreenshots";
import useParticularEpisode from "../../../../Hooks/Hooks for Shows/useParticularEpisode";
import { useSelector } from "react-redux";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import ShimmerforTrailer from "./ShimmerforTrailer";

const EpisodeModal = ({
  isVisible,
  onOk,
  onCancel,
  seasonDetails,
  seasonImages,
  seasonTrailer,
  basicdetails,
  selectedSeason,
  castSeason,
}) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const getEpisode = useSelector((store) => store?.show?.episodeinfo);
  const [showFullCast, setShowFullCast] = useState(false);

  const loading = useParticularEpisode(
    basicdetails?.id,
    selectedSeason?.season_number,
    activeAccordion
  );

  const handleAccordionToggle = (episodeNumber) => {
    setActiveAccordion(
      activeAccordion === episodeNumber ? null : episodeNumber
    );
  };

  const initialCast = castSeason?.slice(0, 3);
  const fullCast = castSeason?.slice(3);

  const handleShowMore = () => {
    setShowFullCast(!showFullCast);
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
                {loading && activeAccordion === episode.episode_number ? (
                  <ShimmerforTrailer />
                ) : (
                  <>
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
                      {activeAccordion === episode.episode_number ? (
                        <DownOutlined />
                      ) : (
                        <UpOutlined />
                      )}
                    </span>
                  </>
                )}
              </div>

              {activeAccordion === episode.episode_number && !loading && (
                <div className="mt-4">
                  {getEpisode?.length > 0 ? (
                    <iframe
                      width="100%"
                      height="315"
                      className="rounded-md"
                      src={`https://www.youtube.com/embed/${getEpisode[0]?.key}?&autoplay=1&mute=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="text-white mt-2 text-base">
                      Sorry! No trailer available for this episode.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          <PopularScreenshots seasonImages={seasonImages} />
          <div className="px-4 text-white mt-2">
            <span className="text-gray-400">Cast: </span>
            <span className="text-white">
              {initialCast?.map((actor) => actor.name).join(", ")}
              {showFullCast && (
                <>
                  {fullCast?.length > 0 && ", "}
                  {fullCast?.map((actor) => actor.name).join(", ")}
                </>
              )}
            </span>
            {castSeason?.length > 3 && (
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
      </Modal>
    </div>
  );
};

export default EpisodeModal;
