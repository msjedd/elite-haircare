import React, { useState } from "react";
import "./ReviewSlideshow.css";
import { NavLink } from "react-router-dom";

const reviews = [
  {
    text: "Elite Signatures provided the best haircare consultation! My hair has never felt healthier.",
    name: "Jane A.",
  },
  {
    text: "The braiding service was amazing. Very neat, long-lasting, and didn't hurt at all!",
    name: "Tolu K.",
  },
  {
    text: "I love the home service treatment. So convenient and professional!",
    name: "Mary O.",
  },
];

const ReviewsSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-section">
      <h2>What Our Clients Say</h2>
      <div className="review-slider">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review-slide ${index === currentIndex ? "active" : ""}`}
          >
            <p className="review-text">"{review.text}"</p>
            <p className="reviewer-name">- {review.name}</p>
          </div>
        ))}
      </div>
      <div className="review-controls">
        <button className="control-btn" onClick={prevReview}>
          ‹
        </button>
        <button className="control-btn" onClick={nextReview}>
          ›
        </button>
      </div>
      {/* <NavLink to="/reviewsPage" className="reviews-link">
        Read More Reviews
      </NavLink> */}
    </div>
  );
};

export default ReviewsSlideshow;
