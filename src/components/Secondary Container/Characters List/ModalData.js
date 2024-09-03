import { Modal } from "antd";
import React from "react";
import { IMG_CDN } from "../../../utils/constants";
import "./modalmod.css";

const ModalData = ({
  title,
  visible,
  onCancel,
  onOk,
  showCharData,
  onPosterClick,
  peopleShows,
}) => {
  console.log(showCharData);

  return (
    <div>
      <Modal
        title={title}
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        centered
        className="koko"
        style={{ zIndex: 1050 }}
        getContainer={document.body}
      >
        <div className="text-white p-0">
          <div className="flex flex-col items-center mb-3">
            {showCharData?.profile_path && (
              <img
                src={IMG_CDN + showCharData.profile_path}
                alt={showCharData.name}
                className="w-32 h-32 rounded-full mb-3"
              />
            )}
            <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
            <p className="text-center mb-2">
              Popularity: {showCharData?.popularity}
            </p>
            <p className="text-center mb-2">
              Department: {showCharData?.known_for_department}
            </p>
            <p className="text-center">
              Gender: {showCharData?.gender === 1 ? "Female" : "Male"}
            </p>
          </div>
          <h3 className="text-lg font-bold mb-2">
            Popular Movies of <span className="text-red-600">{title}</span>
          </h3>

          <div className="flex overflow-x-auto space-x-4">
            {peopleShows?.map((movie) =>
              movie?.backdrop_path ? (
                <div
                  key={movie.id}
                  className="relative flex-shrink-0 cursor-pointer"
                  onClick={() => onPosterClick(movie)}
                >
                  <img
                    src={IMG_CDN + movie?.backdrop_path}
                    alt={movie?.title || movie?.name}
                    className="w-64 h-auto rounded-lg"
                  />
                  <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-center bg-black bg-opacity-50 p-1 rounded-lg">
                    {movie?.original_title || movie?.name}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalData;
