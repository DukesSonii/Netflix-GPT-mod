import React from "react";
import { IMDB_CDN } from "../../../utils/constants";

const OtherDetailsforShows = ({ basicdetails }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2 text-white font-bold">
        About the {basicdetails?.original_name}
      </h1>
      <p className="text-base">
        <span className="text-gray-400">Directors:</span>{" "}
        <span className="text-white">
          {basicdetails?.created_by?.length > 0
            ? basicdetails?.created_by.map((writer) => writer?.name).join(", ")
            : "No Directors available"}
        </span>
      </p>
      <p className="text-base">
        <span className="text-gray-400">Popularity:</span>{" "}
        <span className="text-white">{basicdetails?.popularity}</span>
      </p>
      <p className="text-base">
        <span className="text-gray-400">Original Country:</span>{" "}
        <span className="text-white">{basicdetails?.origin_country}</span>
      </p>
      <p className="text-base">
        <span className="text-gray-400">Original Language:</span>{" "}
        <span className="text-white">{basicdetails?.original_language}</span>
      </p>
      <p className="text-base">
        <span className="text-gray-400">Spoken Languages:</span>{" "}
        <span className="text-white">
          {basicdetails?.spoken_languages?.length > 0
            ? basicdetails?.spoken_languages
                .map((language) => language?.english_name)
                .join(", ")
            : "No languages available"}
        </span>
      </p>

      <p className="text-base">
        <span className="text-gray-400">Producers:</span>{" "}
        <span className="text-white">
          {basicdetails?.production_companies?.length > 0
            ? basicdetails?.production_companies
                .map((company) => company?.name)
                .join(", ")
            : "No producers available"}
        </span>
      </p>

      <p className="text-base">
        <span className="text-gray-400">Producer Countries:</span>{" "}
        <span className="text-white">
          {basicdetails?.production_countries?.length > 0
            ? basicdetails?.production_countries
                .map((country) => country?.name)
                .join(", ")
            : "No producer countries available"}
        </span>
      </p>

      <p className="text-base">
        <span className="text-gray-400">Total Votes:</span>{" "}
        <span className="text-white">{basicdetails?.vote_count}</span>
      </p>
    </div>
  );
};

export default OtherDetailsforShows;
