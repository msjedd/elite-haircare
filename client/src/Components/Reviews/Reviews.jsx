import { useEffect, useState } from "react";
import reviewTwins from "../../assets/review_twins.jpeg";
import reviewFisayo from "../../assets/review_fisayo.jpeg";
import reviewMariam from "../../assets/review_mariam.jpeg";
import reviewPeace from "../../assets/review_peace.jpeg";
import "./Reviews.css";

const screenshotImages = [reviewTwins, reviewFisayo, reviewMariam, reviewPeace];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slidesToShow based on screen width
  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener("resize", updateSlides);
    updateSlides(); // Initial call

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshotImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshotImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="featured-reviews">
      <div className="carousel">
        {Array.from({ length: slidesToShow }).map((_, i) => {
          const index = (currentIndex + i) % screenshotImages.length;

          return (
            <div
              key={index}
              className={`review-card ${i === 1 ? "large center" : "small"}`}
            >
              <img
                src={screenshotImages[index]}
                alt={`Customer Review ${index + 1}`}
              />
            </div>
          );
        })}
      </div>

      <div className="review-navigation">
        <button onClick={prevReview}>&#10094; Prev</button>
        <button onClick={nextReview}>Next &#10095;</button>
      </div>
    </section>
  );
};

export default Reviews;
