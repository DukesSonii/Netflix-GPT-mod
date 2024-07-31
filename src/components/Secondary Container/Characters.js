import React from "react";
import { IMG_CDN } from "../../utils/constants";

const Characters = ({ cast }) => {
  return (
    <div className="p-4 bg-gray-700 rounded-md">
      <h3 className="text-white text-lg font-semibold mb-2">Cast:</h3>
      {cast?.length > 0 ? (
        <ul className="space-y-3">
          {cast.map((actor) => (
            <li key={actor.id} className="flex items-center space-x-3">
              {actor.profile_path && (
                <>
                  <img
                    src={IMG_CDN + actor.profile_path}
                    alt={actor?.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-white font-sans">{actor?.name}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">Cast Information Not Available!</p>
      )}
    </div>
  );
};

export default Characters;
