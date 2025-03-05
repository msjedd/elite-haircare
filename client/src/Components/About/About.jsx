import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play_icon.svg";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About ELITE HAIRCARE</h3>
        <h2>Your Haircare is my Business</h2>
        <p>
          Our principal aim is to aid hair growth, guide you to repair damaged
          hair and restore a healthy hairline using safe, natural and effective
          haircare products.
        </p>
        <p>
          Our products are well formulated and produced to efficiently and
          effectively meet your hair needs. To restore individual confidence and
          hair glow and to give you the best care your hair deserves.
        </p>
        <p>
          Our products are made from natural ingredients and are free from
          harmful chemicals, making them safe for all hair types.
        </p>
      </div>
    </div>
  );
};
export default About;
