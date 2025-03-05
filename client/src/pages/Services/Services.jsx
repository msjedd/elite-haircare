import React from "react";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Title from "../../Components/Title/Title";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ReviewSlideshow from "../../Components/ReviewSlideshow/ReviewSlideshow";

import service_video_1 from "../../assets/service_video_1.mp4";
import service_video_2 from "../../assets/service_video_2.mp4";
import service_video_3 from "../../assets/service_video_3.mp4";
import service_1 from "../../assets/service_1.jpg";
import service_2 from "../../assets/service_2.jpg";
import service_3 from "../../assets/service_3.jpg";
import service_4 from "../../assets/service_4.jpg";
import service_5 from "../../assets/service_5.jpg";
import service_6 from "../../assets/service_6.jpg";

import "./Services.css";

const services = [
  {
    title: "Professional Braiding Services",
    description: "Get your hair braided by experts in the industry.",
    tagline: (
      <>
        <p>
          At <strong>Elite Signatures</strong>, we specialize in expert braiding
          services tailored to your unique style. From box braids and cornrows
          to feed-in braids and Senegalese twists, we create stunning,
          long-lasting styles that enhance your look while protecting your hair
          health. <strong>Why choose us?</strong>
        </p>
        <ul>
          <li>
            <strong>Skilled Experts:</strong> Precision and attention to detail
            with every braid.
          </li>
          <li>
            <strong>Customized Styles:</strong> Personalized recommendations to
            suit your face shape and lifestyle.
          </li>
          <li>
            <strong>Premium Quality:</strong> We use top-tier hair extensions
            and products for comfort and durability.
          </li>
          <li>
            <strong>Hair Health Focus:</strong> Gentle techniques that promote
            scalp and hair wellness.
          </li>
        </ul>
        <p>
          Whether for a special occasion or a low-maintenance, stylish look, our
          professional braiding services will leave you feeling confident and
          beautiful.
          {/* <strong>Book your appointment today! 💆‍♀️✨</strong> */}
        </p>
      </>
    ),
    video: service_video_1,
    image1: service_1,
    image2: service_2,
    price: "Subject to negotiation",
  },
  {
    title: "Haircare Consultation",
    description: "Talk to a specialist about your hair needs and solutions.",
    tagline: (
      <>
        <p>
          <strong>Haircare consultation (online via WhatsApp)</strong> -
          Duration: 20 minutes
        </p>
        {/* <p>
          <strong>🏷️ PRICE:</strong> ₦5000
        </p> */}
        <p>
          At <strong>Elite Haircare</strong>, our haircare consultation is
          designed to provide personalized guidance to achieve optimal hair
          health and appearance.
        </p>
        <ul>
          <li>
            <strong>Tailored Professional Guidance</strong> and recommendations.
          </li>
          <li>
            <strong>Client Satisfaction:</strong> Solutions tailored to your
            hair type and needs.
          </li>
          <li>
            <strong>Promote Hair Wellness:</strong> Learn proper hair care
            techniques.
          </li>
          <li>
            <strong>Advanced Solutions:</strong> Get expert advice on hair
            concerns.
          </li>
          <li>
            <strong>Long-Term Partnership:</strong> Ongoing support for your
            hair journey.
          </li>
        </ul>
      </>
    ),
    video: service_video_2,
    image1: service_3,
    image2: service_4,
    price: "₦5,000",
  },
  {
    title: "Home Service",
    description: "Enjoy salon-quality service in the comfort of your home.",
    tagline: (
      <>
        <p>
          <strong>Hair treatment (Strictly home service)</strong> - Limited to
          residence within Ilorin, Kwara State.
        </p>
        <p>
          Available for travel on request (extra charges apply). Our home
          services include premium hair treatments designed for deep nourishment
          and rejuvenation.
        </p>
        <p>
          <strong>🏷️ PRICING:</strong>
        </p>
        <ul>
          <li>
            <strong>GENERAL HAIR TREATMENT:</strong> One-time treatment (30
            minutes) - ₦15,000
          </li>
          <li>
            <strong>DEEP/INTENSE HAIR TREATMENT:</strong> One-month program
            {/* <ul>
              <li>First treatment visit (1st week, 40 minutes) - ₦15,000</li>
              <li>Subsequent visit (3rd week, 30 minutes) - ₦10,000</li>
            </ul> */}{" "}
            <br />
            <strong>Total Package:</strong> ₦25,000
          </li>
        </ul>
        <p>
          <strong>Note:</strong> Fees include treatment products and service
          charges.
        </p>
      </>
    ),
    video: service_video_3,
    image1: service_5,
    image2: service_6,
    price: "₦25,000",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-page container">
        <Title title="Our Services" subtitle="Services Rendered" />
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="services-summary">
        <Title
          subTitle="A trial will convince you!"
          title="Experience the Elite Touch"
        />
        <p>
          At <strong>Elite Signatures</strong>, we are committed to delivering
          top-notch haircare services that leave you feeling beautiful and
          confident.
        </p>
        <p>
          Don't just take our word for it – hear from our satisfied clients!
        </p>
        <div className="review-links">
          {/* <a href="/reviews" className="reviews-btn">
            Read Reviews
          </a> */}
          <ReviewSlideshow />
          <p>
            <em>Book an appointment today—a trial will convince you! 💕</em>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
