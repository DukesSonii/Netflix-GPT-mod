import React from "react";

const ShimmerforTrailer = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-shrink-0">
        <div className="w-20 h-28 bg-gray-700 rounded-md"></div>
      </div>

      <div className="flex-grow space-y-2">
        <div className="h-5 bg-gray-700 rounded w-3/4"></div>{" "}
        <div className="h-4 bg-gray-700 rounded w-full"></div>{" "}
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>{" "}
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>{" "}
      </div>
    </div>
  );
};

export default ShimmerforTrailer;
