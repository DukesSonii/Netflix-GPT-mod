import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons"; // Ant Design icon for the user
import "./Reviews.css";

const UserReviews = () => {
  const reviews = useSelector((store) => store.movie.userReviews);
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
    <div>
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
        <div className="overflow-y-auto max-h-[500px] p-4 text-white">
          {reviews?.map((review) => {
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
                  <span className="text-yellow-400">⭐ {rating}/10</span>
                </div>
                <p className="mb-2">
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
          })}
        </div>
      </Modal>
    </div>
  );
};

export default UserReviews;
