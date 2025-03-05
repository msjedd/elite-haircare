import React from "react";
import termsData from "../../data/termsData.json";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Terms.css";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="terms-page">
        <div className="terms-container">
          <h1>{termsData.title}</h1>
          <p>{termsData.intro}</p>

          {termsData.sections.map((section, index) => (
            <div key={index} className="terms-section">
              <h2 className="terms-heading">{section.heading}</h2>
              <p className="terms-content">{section.content}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
