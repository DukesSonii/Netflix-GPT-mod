import React, { useState, useEffect } from "react";
import EpisodeModal from "./EpisodeModal";
import { useSelector } from "react-redux";
import useDetailsAboutSeasson from "../../../../Hooks/Hooks for Shows/useDetailsAboutSeasson";
import useImagesForSeasons from "../../../../Hooks/Hooks for Shows/useImageForSeasons";
import useTrailerforSeason from "../../../../Hooks/Hooks for Shows/useTrailerforSeason";
const SeasonDetails = ({ basicdetails }) => {
  const [isEpisodeModalVisible, setIsEpisodeModalVisible] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const seasonDetails = useSelector((store) => store.show.seasondetails);
  const seasonImages = useSelector((store) => store.show.seasonsimages);
  const seasonTrailer = useSelector((store) => store?.show?.seasontrailer);
  console.log(seasonTrailer);

  const openEpisodeModal = (season) => {
    setSelectedSeason(season);
    setIsEpisodeModalVisible(true);
  };

  const closeEpisodeModal = () => {
    setIsEpisodeModalVisible(false);
  };

  useDetailsAboutSeasson(basicdetails?.id, selectedSeason?.season_number);
  useImagesForSeasons(basicdetails?.id, selectedSeason?.season_number);
  useTrailerforSeason(basicdetails?.id, selectedSeason?.season_number);
  return (
    <div className="mt-4 px-4">
      {basicdetails?.seasons?.map((season, index) => (
        <div
          key={season.id}
          className="flex items-start mb-4 p-4 bg-gray-900 rounded-md cursor-pointer"
          onClick={() => openEpisodeModal(season, index + 1)}
        >
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
              alt={season.name}
              className="w-20 h-28 rounded-md"
            />
          </div>
          <div className="ml-4 flex-grow">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">
                {index + 1}. {season.name}
              </h3>
              <span className="text-gray-400">
                {season.episode_count} Episodes
              </span>
            </div>
            <p className="text-gray-400 mt-1">{season.overview}</p>
            <p className="text-gray-400 mt-2">Released on: {season.air_date}</p>
          </div>
        </div>
      ))}
      <EpisodeModal
        isVisible={isEpisodeModalVisible}
        onOk={closeEpisodeModal}
        onCancel={closeEpisodeModal}
        seasonDetails={seasonDetails}
        seasonImages={seasonImages}
        seasonTrailer={seasonTrailer}
      />
    </div>
  );
};

export default SeasonDetails;
