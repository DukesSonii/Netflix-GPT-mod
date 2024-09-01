import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";

const SeriesTitle = ({ title, overview }) => {
  const [isFullDescription, setIsFullDescription] = useState(false);

  const toggleDescription = () => {
    setIsFullDescription(!isFullDescription);
  };

  const truncatedOverview = `${overview.substring(0, 150)}...`;

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-b from-black pointer-events-none">
      <p className="text-2xl md:text-5xl font-bold mb-3 md:mb-0 pointer-events-none">
        {title}
      </p>

      {/* Description: pointer-events-auto to enable interaction */}
      <div className="relative pointer-events-auto md:inline">
        <p className="py-6 text-lg font-semibold w-1/3">
          {isFullDescription ? overview : truncatedOverview}
          <span
            className="text-gray-400 ml-2 cursor-pointer hover:underline"
            onClick={toggleDescription}
          >
            {isFullDescription ? "Show Less" : "See Full Description"}
          </span>
        </p>
      </div>

      <div className="md:inline-flex flex gap-4 pointer-events-auto mt-4 md:mt-0">
        <button className="flex items-center px-2 md:px-7 py-1 bg-white text-black font-bold rounded-md hover:bg-gray-400 transition duration-300">
          <CaretRightOutlined style={{ fontSize: "25px" }} />
          Play
        </button>
        <button className="hidden md:inline-block px-7 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default SeriesTitle;
