import React from "react";
import "./CustomerReviews.css";

const customerReviews = [
  {
    id: 1,
    name: "Ada E.",
    review: "Your Products are so underrated!",
  },
  {
    id: 2,
    name: "Mariam A.",
    review:
      "The oil was so good, I couldn't stop stealing from my roommate. the scent was so good!",
  },
  {
    id: 3,
    name: "Nneka O.",
    review: "Loved the scalp massage! Will definitely return.",
  },
  {
    id: 4,
    name: "Tola K.",
    review: "My hair has never felt this soft before!",
  },
  {
    id: 5,
    name: "Jide C.",
    review: "Fantastic service, very knowledgeable staff.",
  },
  {
    id: 6,
    name: "Amara L.",
    review: "Finally found a haircare service that works for me!",
  },
  { id: 7, name: "Olu D.", review: "Super relaxing and effective treatment." },
  {
    id: 8,
    name: "Halima Y.",
    review: "They really understand hair and how to care for it!",
  },
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {customerReviews.map((review) => (
          <div key={review.id} className="review-box">
            <p className="review-text">"{review.review}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
