import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../../../utils/constants"; // Adjust the import based on your actual path
import { Button } from "antd";

const PopularScreenshots = () => {
  const screenshots = useSelector((state) => state.movie.screenshots);
  const [showImages, setshowImages] = useState(false);

  if (
    !screenshots ||
    !screenshots.backdrops ||
    screenshots.backdrops.length === 0
  ) {
    return <div>No screenshots available</div>;
  }

  const handleClick = () => {
    setshowImages(!showImages);
  };
  return (
    <div className="pl-4 pr-4">
      <p className="text-gray-400 text-base font-semibold mb-1">
        Popular Screenshots
      </p>
      <Button
        type="link"
        onClick={handleClick}
        className="mb-2 -ml-4 text-gray-400 text-base underline"
      >
        {showImages ? "Hide Screenshots" : "Tap to view Screenshots"}
      </Button>
      {showImages && (
        <div className="flex flex-wrap gap-4">
          {screenshots.backdrops.slice(0, 8).map((screenshot) => (
            <div key={screenshot.file_path} className="w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src={`${IMG_CDN}${screenshot.file_path}`}
                alt="Screenshot"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularScreenshots;
