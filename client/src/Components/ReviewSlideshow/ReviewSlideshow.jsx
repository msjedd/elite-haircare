// import React, { useState, useEffect } from "react";
// import "./ReviewSlideshow.css";

// const reviews = [
//   {
//     name: "Adeola A.",
//     text: "Elite Signatures transformed my hair! The braiding was so neat and lasted for weeks. Highly recommended!",
//   },
//   {
//     name: "Chinwe O.",
//     text: "The haircare consultation was so informative. My hair has never been healthier!",
//   },
//   {
//     name: "Fatima K.",
//     text: "The home service was so convenient! Professional, timely, and the results were amazing.",
//   },
//   {
//     name: "Oluwaseun M.",
//     text: "A trial will truly convince you! Fantastic service and attention to detail.",
//   },
// ];

// const ReviewSlideshow = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="review-section">
//       <h3>What Our Clients Say</h3>
//       <div className="review-card">
//         <p className="review-text">"{reviews[currentIndex].text}"</p>
//         <p className="review-name">- {reviews[currentIndex].name}</p>
//       </div>
//       <div className="review-nav">
//         {reviews.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${currentIndex === index ? "active" : ""}`}
//             onClick={() => setCurrentIndex(index)}
//           ></span>
//         ))}
//       </div>
//       <a href="/reviews" className="reviews-btn">
//         Read More Reviews
//       </a>
//     </div>
//   );
// };

// export default ReviewSlideshow;

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
      <NavLink to="/reviewsPage" className="reviews-link">
        Read More Reviews
      </NavLink>
    </div>
  );
};

export default ReviewsSlideshow;
