import React from "react";
import FeaturedReviews from "../../Components/FeaturedReviews/FeaturedReviews";
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";
import ScreenshotGallery from "../../Components/ScreenshotGallery/ScreenshotGallery";
import Title from "../../Components/Title/Title";
// import CTASection from "./CTASection";

import "./ReviewsPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const ReviewsPage = () => {
  return (
    <>
      <Navbar />
      <div className="reviews-page">
        <Title
          subTitle="What Our Clients Say"
          title="Real experiences from satisfied customers"
          className="reviews-header"
        />
        {/* </header> */}

        <FeaturedReviews />
        <CustomerReviews />
        <ScreenshotGallery />
        {/* <CTASection /> */}
      </div>
      <Footer />
    </>
  );
};

export default ReviewsPage;
