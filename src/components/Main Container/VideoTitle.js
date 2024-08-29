import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-b from-black pointer-events-none">
      <h1 className="text-2xl md:text-6xl font-bold mb-3 md:mb-0">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 font-semibold">
        {overview}
      </p>
      <div className="flex gap-4 pointer-events-auto">
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

export default VideoTitle;
