import { useEffect, useState } from "react";
import React from "react";
import "./FeaturedReviews.css";

const featuredReviews = [
  {
    id: 1,
    name: "Sophia O.",
    review: "Absolutely love the service! My hair has never been healthier.",
    image: "../../src/assets/featured_review1.jpeg",
  },
  {
    id: 2,
    name: "Amaka T.",
    review:
      "Best decision ever! The hair treatment was soothing and effective.",
    image: "../../src/assets/featured_review2.jpeg",
  },
  {
    id: 3,
    name: "Lisa M.",
    review: "Professional and friendly service. My scalp feels amazing!",
    image: "../../src/assets/featured_review3.jpeg",
  },
  {
    id: 4,
    name: "Chidera K.",
    review:
      "I saw visible results after just a few sessions. Highly recommend!",
    image: "../../src/assets/featured_review4.jpeg",
  },
  {
    id: 5,
    name: "Fatima Y.",
    review: "The best haircare service I’ve experienced. Worth every penny!",
    image: "../../src/assets/featured_review5.jpeg",
  },
  { id: 6, image: "../../src/assets/featured_review6.jpeg" },
];

const FeaturedReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredReviews.length - 1 : prevIndex - 1
    );
  };

  const prevIndex =
    currentIndex === 0 ? featuredReviews.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === featuredReviews.length - 1 ? 0 : currentIndex + 1;

  return (
    <section className="featured-reviews">
      <div className="carousel">
        <div className="review-card small left">
          <img
            src={featuredReviews[prevIndex].image}
            alt={featuredReviews[prevIndex].author}
          />
        </div>

        <div className="review-card large center">
          <img
            src={featuredReviews[currentIndex].image}
            alt={featuredReviews[currentIndex].author}
          />
        </div>

        <div className="review-card small right">
          <img
            src={featuredReviews[nextIndex].image}
            alt={featuredReviews[nextIndex].author}
          />
        </div>
      </div>

      <div className="review-navigation">
        <button onClick={prevReview}>&#10094; Prev</button>
        <button onClick={nextReview}>Next &#10095;</button>
      </div>
    </section>
  );
};

export default FeaturedReviews;
