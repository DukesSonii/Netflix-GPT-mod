import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import "./Reviews.css";

const UserReviewsforShows = () => {
  const reviews = useSelector((store) => store.show.userReviewSeason);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleReview = (reviewId) => {
    setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
  };

  return (
    <div className="pl-4 pr-4 mt-2">
      <Button type="primary" onClick={showModal}>
        User Reviews
      </Button>

      <Modal
        title="User Reviews"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        className="modal-css "
      >
        <div className="overflow-y-auto max-h-[500px] p-4 pr-7 text-white">
          {reviews?.length ? (
            reviews?.map((review) => {
              const { author, content, id, created_at } = review;
              const { rating, username } = review.author_details;
              const isExpanded = expandedReviewId === id;

              return (
                <div key={id} className="mb-4 p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <UserOutlined className="text-2xl mr-2" />
                    <div>
                      <p className="text-lg font-semibold">{author}</p>
                      <p className="text-gray-400">@{username}</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-yellow-400">
                      ⭐ {rating ? rating : "0"}/10
                    </span>
                  </div>
                  <p>
                    {isExpanded ? content : content.substring(0, 100) + "..."}
                  </p>
                  {content.length > 100 && (
                    <Button
                      type="link"
                      onClick={() => toggleReview(id)}
                      className="p-0 text-blue-400"
                    >
                      {isExpanded ? "Show Less" : "More"}
                    </Button>
                  )}
                  <p className="text-gray-400 text-sm font-semibold">
                    {new Date(created_at).toLocaleString()}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-white text-xl font-custom italic leading-relaxed tracking-wide">
              No Reviews available for this movie
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UserReviewsforShows;
