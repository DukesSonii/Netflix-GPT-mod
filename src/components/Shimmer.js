import React from "react";

const Shimmer = () => {
  return (
    <div className="p-10 animate-pulse flex flex-col space-y-6">
      <div className="w-full h-72 bg-gray-800 rounded-lg mb-6"></div>

      {/* Main card shimmer */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
        <div className="w-56 h-56 bg-gray-800 rounded-lg hover:scale-105 transition-transform duration-300"></div>
      </div>

      {/* Additional rows shimmer */}
    </div>
  );
};

export default Shimmer;
