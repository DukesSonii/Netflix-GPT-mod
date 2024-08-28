import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IMG_CDN } from "../../utils/constants";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import ShowsCard from "./ShowsCard";
const { Text } = Typography;

const ShowsList = ({ title, shows }) => {
  const scrollRef = useRef(null);

  const leftScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const rightScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="px-5 relative ">
      <h1 className="text-lg md:text-2xl py-2 font-sans mb-4 text-white">
        {title}
      </h1>
      <h1 className="text-white">{shows?.title}</h1>
      <div
        className="flex space-x-3 overflow-x-scroll"
        style={{
          scrollbarWidth: "none",
        }}
        ref={scrollRef}
      >
        {shows?.map((movie) => (
          <div key={movie.id}>
            <ShowsCard key={movie.id} posterpath={movie?.poster_path} />
          </div>
        ))}
      </div>

      <Button
        className="absolute top-1/2 transform -translate-y-1 left-0 z-10 text-4xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
        onClick={leftScroll}
      >
        <LeftOutlined />
      </Button>
      <Button
        className="absolute top-1/2 transform -translate-y-1 right-0  text-4xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
        onClick={rightScroll}
      >
        <RightOutlined />
      </Button>
    </div>
  );
};

export default ShowsList;
