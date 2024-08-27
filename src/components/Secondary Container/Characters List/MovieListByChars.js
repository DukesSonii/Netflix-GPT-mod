import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../../../utils/constants";
import { Button, Modal } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CharactersList from "./CharactersList";
import ModalData from "./ModalData";
const MovieListByChars = ({ onPosterClick }) => {
  const scrollRef = useRef(null);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [showCharData, setshowCharData] = useState(null);
  const characters = useSelector((store) => store?.movie?.popularCast);

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

  const handleOk = () => {
    setisModalVisible(false);
  };

  const handleCancel = () => {
    setisModalVisible(false);
  };

  const showModal = (char) => {
    setshowCharData(char);
    setisModalVisible(true);
  };

  return (
    <div className="pl-4 relative">
      <h1 className="text-lg md:text-2xl py-2 mt-1 mb-4 font-sans text-white">
        Popular Characters
      </h1>
      <div
        className="flex space-x-3 overflow-x-scroll cursor-pointer"
        style={{
          scrollbarWidth: "none",
        }}
        ref={scrollRef}
      >
        {characters?.map((char) => (
          <div key={char?.id} onClick={() => showModal(char)}>
            <CharactersList char={char} />
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
        className="absolute top-1/2 transform -translate-y-1 right-0 text-4xl"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
        onClick={rightScroll}
      >
        <RightOutlined />
      </Button>
      <ModalData
        showCharData={showCharData}
        title={showCharData?.original_name}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        onPosterClick={onPosterClick}
      ></ModalData>
    </div>
  );
};

export default MovieListByChars;
