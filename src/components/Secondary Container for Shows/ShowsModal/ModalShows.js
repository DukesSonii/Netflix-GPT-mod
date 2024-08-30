import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./modal.css";
import OtherDetailsforShows from "./OtherDetailsforShows";
import SeasonDetails from "./Particular Season Modal/SeasonDetails";
import CharactersCast from "./CharactersCast";
import SimilarShows from "./SimilarShows";
const ModalShows = ({
  isVisible,
  onOk,
  onCancel,
  trailerVideo,
  selectedShow,
  basicdetails,
  showcast,
  onPosterClick,
}) => {
  const [showFullCast, setShowFullCast] = useState(false);

  const initialCast = showcast?.slice(0, 3);
  const fullCast = showcast?.slice(3, 15);

  const handleShowMore = () => {
    setShowFullCast(!showFullCast);
  };
  return (
    <div>
      <Modal
        title={selectedShow?.name}
        visible={isVisible}
        onOk={onOk}
        onCancel={onCancel}
        className="custom-modal"
        style={{ top: 0, right: 150 }}
      >
        <div className="p-4 bg-black">
          <div className="pl-4 pr-4">
            <span className="text-white">Trailer</span>
            {trailerVideo ? (
              <iframe
                className="w-full h-64 mt-2 rounded-md mb-6"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}??&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            ) : (
              <p className="text-gray-400">Sorry trailer is not Available</p>
            )}
          </div>
          <div className="flex justify-between text-base pl-4 pr-4 text-white mt-4">
            <p>
              <span className="text-gray-400">
                First Episode Release Date:{" "}
              </span>
              {basicdetails?.first_air_date}
            </p>
            <p>{basicdetails?.seasons.length} Seasons</p>
            <p>
              <span className="text-gray-400">Last Episode Release Date: </span>
              {basicdetails?.last_air_date}
            </p>
          </div>
          <hr className="border-t border-gray-600 opacity-30 my-2" />
          <div className="flex justify-between text-base px-4 text-white">
            <p>
              <span className="text-gray-400">Genres: </span>
              {basicdetails?.genres?.length > 0
                ? basicdetails?.genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </p>
            <a
              href={basicdetails?.homepage}
              className="text-blue-500 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to Watch full Series
            </a>
          </div>
          <hr className="border-t border-gray-600 opacity-30 mt-2" />
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
            {showcast?.length > 3 && (
              <Button
                type="link"
                onClick={handleShowMore}
                className="text-white text-base underline -ml-1"
              >
                {showFullCast ? "Show Less" : "More"}
              </Button>
            )}
          </div>
          <hr className="border-t border-gray-600 opacity-30 mt-2" />
          <div className="flex justify-between text-base pl-4 pr-4 text-white mt-2">
            {basicdetails?.overview ? (
              <p>
                <span className="text-gray-400">Description: </span>
                {basicdetails?.overview}
              </p>
            ) : null}
          </div>
          <hr className="border-t border-gray-600 opacity-30 mt-2" />
        </div>
        <SeasonDetails basicdetails={basicdetails} />
        <hr className="border-t border-gray-600 opacity-30 mt-2" />
        {showFullCast && (
          <div className="mt-4 pl-4 pr-4 w-1/2">
            <CharactersCast showcast={showcast} />
          </div>
        )}
        <SimilarShows onPosterClick={onPosterClick} />
        <hr className="border-t border-gray-600 opacity-30 mt-2" />
        <OtherDetailsforShows basicdetails={basicdetails} />
      </Modal>
    </div>
  );
};

export default ModalShows;
