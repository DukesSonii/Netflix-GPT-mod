import React from "react";

const OtherDetails = ({ category }) => {
  console.log(category);

  if (!category) {
    return (
      <p className="text-white text-center text-lg">No details available</p>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-white font-bold">
        About the {category?.original_title}
      </h1>
      <p className="text-lg">
        <span className="text-gray-400">Original Country:</span>{" "}
        <span className="text-white">{category.origin_country}</span>
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Original Language:</span>{" "}
        <span className="text-white">{category.original_language}</span>
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Spoken Languages:</span>{" "}
        <span className="text-white">
          {category.spoken_languages?.length > 0
            ? category.spoken_languages
                .map((language) => language?.english_name)
                .join(", ")
            : "No languages available"}
        </span>
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Budget:</span>{" "}
        <span className="text-white">${category.budget?.toLocaleString()}</span>
      </p>
      <p className="text-lg">
        <span className="text-gray-400">Revenue:</span>{" "}
        <span className="text-white">
          ${category.revenue?.toLocaleString()}
        </span>
      </p>

      <p className="text-lg">
        <span className="text-gray-400">Homepage:</span>{" "}
        <a
          href={category.homepage}
          className="text-blue-500 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Full Movie
        </a>
      </p>

      <p className="text-lg">
        <span className="text-gray-400">Producers:</span>{" "}
        <span className="text-white">
          {category.production_companies?.length > 0
            ? category.production_companies
                .map((company) => company?.name)
                .join(", ")
            : "No producers available"}
        </span>
      </p>

      <p className="text-lg">
        <span className="text-gray-400">Producer Countries:</span>{" "}
        <span className="text-white">
          {category.production_countries?.length > 0
            ? category.production_countries
                .map((country) => country?.name)
                .join(", ")
            : "No producer countries available"}
        </span>
      </p>

      <p className="text-lg">
        <span className="text-gray-400">Total Votes:</span>{" "}
        <span className="text-white">{category?.vote_count}</span>
      </p>
    </div>
  );
};

export default OtherDetails;
