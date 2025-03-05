import React, { useState, useEffect } from "react";

import "./ProductPageHero.css";
import dark_arrow from "../../assets/dark_arrow.svg";
import Title from "../../Components/Title/Title";

import hero_img1 from "../../assets/hero_img1.jpg";
import hero_img2 from "../../assets/hero_img2.jpg";
import hero_img3 from "../../assets/hero_img3.jpg";
import hair_growth_kit from "../../assets/hair_growth_kit.jpg";
import hero_img4 from "../../assets/hero_img4.jpg";

const productImages = [
  hero_img1,
  hero_img2,
  hero_img3,
  hair_growth_kit,
  hero_img4,
];

const ProductPageHero = ({ scrollToProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="product-hero"
      style={{ backgroundImage: `url(${productImages[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <Title
          className="light-title"
          title="Pure. Powerful. Natural."
          subTitle="Elevate Your Haircare the Elite Way."
        />
        <button className="btn" onClick={scrollToProducts}>
          Buy now! <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductPageHero;
