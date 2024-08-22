import React, { useState } from "react";
import { IMG_CDN } from "../../utils/constants";

import { Avatar, Button } from "antd";
import { UserOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";

const Characters = ({ cast }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  if (!cast) {
    return <h1>Loading...</h1>;
  }

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className="py-1 px-4 bg-gray-800 rounded-lg shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-white text-lg font-bold mb-2">Cast:</h3>
        <Button
          type="text"
          icon={
            showAccordion ? (
              <UpOutlined style={{ color: "white" }} />
            ) : (
              <DownOutlined style={{ color: "white" }} />
            )
          }
        />
      </div>
      {cast.length > 0 ? (
        showAccordion && (
          <ul className="space-y-4 h-60 overflow-y-auto pr-2">
            {cast.map((actor) => (
              <li key={actor.id} className="flex items-center space-x-4">
                {actor.profile_path ? (
                  <Avatar
                    src={IMG_CDN + actor.profile_path}
                    size={48}
                    className="shadow-md"
                  />
                ) : (
                  <Avatar
                    icon={<UserOutlined />}
                    size={48}
                    className="bg-gray-600"
                  />
                )}
                <span className="text-white font-medium">{actor.name}</span>
              </li>
            ))}
          </ul>
        )
      ) : (
        <p className="text-white mt-4">Cast Information Not Available!</p>
      )}
    </div>
  );
};

export default Characters;
