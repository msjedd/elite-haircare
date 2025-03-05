import React from "react";
import "./ScreenshotGallery.css";

const screenshotImages = [
  "../../src/assets/review_twins.jpeg",
  "../../src/assets/review_fisayo.jpeg",
  "../../src/assets/review_mariam.jpeg",
  "../../src/assets/review_peace.jpeg",
];

const ScreenshotGallery = () => {
  return (
    <section className="screenshot-gallery">
      {/* <h2>Real Reviews from Our Customers</h2> */}
      <div className="gallery">
        {screenshotImages.map((src, index) => (
          <div key={index} className="screenshot">
            <img
              src={src}
              alt={`Customer Review ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotGallery;
