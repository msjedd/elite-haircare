import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./About.css";
import aboutImage from "../../assets/about-image.jpg";
import Title from "../../Components/Title/Title";
import jojoba from "../../assets/jojoba.jpeg";
import peppermint from "../../assets/peppermint.jpeg";
import shea_butter from "../../assets/shea_butter.jpeg";

const images = [jojoba, peppermint, shea_butter];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <Title title="Elite Haircare" subTitle="Your Hair, Our Passion." />
      </section>

      <div className="about-container">
        <div className="about-content">
          <Title title="Our Story" />
          <p>
            Elite Haircare was founded on a simple yet powerful belief:{" "}
            <strong>everyone deserves to feel confident in their hair.</strong>{" "}
            What started as a dream to provide natural, high-quality, and
            effective haircare solutions has grown into a trusted brand, helping
            thousands restore and maintain healthy, beautiful hair.
          </p>

          <Title title="What Sets Us Apart?" />
          <ul>
            <li>
              <strong>Premium Ingredients:</strong> Carefully sourced, natural,
              and backed by science.
            </li>
            <li>
              <strong>Expert Formulations:</strong> Designed for real
              results—hydration, growth, and protection.
            </li>
            <li>
              <strong>Customer-Centric Innovation:</strong> Your feedback shapes
              our products.
            </li>
            <li>
              <strong>Commitment to Excellence:</strong> We never compromise on
              quality.
            </li>
          </ul>

          <p>
            At Elite Haircare, we’re not just about hair—we’re about{" "}
            <strong>confidence, empowerment, and self-expression.</strong> As we
            continue to grow, our promise remains the same:{" "}
            <strong>
              high-quality products that nurture, protect, and transform your
              hair.
            </strong>
          </p>

          <p>
            ✨{" "}
            <strong>
              Join us on this journey—because healthy, beautiful hair starts
              here.
            </strong>
          </p>
        </div>

        <aside className="about-image">
          <img src={aboutImage} alt="Elite Haircare" />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default About;
