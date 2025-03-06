import "./Hero.css";
import dark_arrow from "../../assets/dark_arrow.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import service_2333 from "../../assets/service_2333.jpg";
import product_10 from "../../assets/product_10.jpg";
import product_11 from "../../assets/product_11.jpg";

const images = [service_2333, product_10, product_11];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-text">
        <h1>Your Haircare is our Business</h1>
        <p>
          {/* Our principal aim is to aid hair growth, guide you to repair damaged
          hair and restore a healthy hairline using safe, natural and effective
          haircare products. Our products are well formulated and produced to
          efficiently and effectively meet your hair needs. To restore
          individual confidence and hair glow. To give you the best care your
          hair deserves. */}
          {/* Our goal is to promote hair growth, repair damage, and restore a healthy hairline with safe, natural, and effective haircare products. Carefully formulated to meet your hair needs, our products help you regain confidence and achieve a radiant, healthy glow.  */}
          Give your hair the care it deserves.
        </p>
        <NavLink to="products">
          <button className="btn">
            <span>Explore more</span> <img src={dark_arrow} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
