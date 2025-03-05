import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./BlogPage.css";
import { blogArticles } from "../../blog";
import Title from "../../Components/Title/Title";
import StickySidebar from "../../Components/StickySidebar/StickySidebar";

const Blog = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (index) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div>
      <Navbar />
      <div className="blog">
        <div className="main">
          <div className="blog-hero">
            <Title
              title="Elite Haircare Blog"
              subTitle="Tips, tricks, and expert advice for healthy, beautiful hair."
            />

            <div className="blog-container">
              {blogArticles.map((article, index) => (
                <div key={index} className="blog-card">
                  <div className="blog-content">
                    <h2>{article.title}</h2>
                    <p className="blog-intro">{article.intro}</p>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="blog-image"
                    />
                    <button
                      className="read-more"
                      onClick={() => toggleArticle(index)}
                    >
                      {expandedArticle === index ? "Show Less" : "Read More"}
                    </button>
                    {expandedArticle === index && (
                      <div className="blog-full">
                        {article.content.map((section, idx) => (
                          <div key={idx}>
                            <h3>{section.heading}</h3>
                            <p>{section.text}</p>
                            {section.productRef && (
                              <p className="product-ref">
                                <strong>Recommended Product:</strong>{" "}
                                {section.productRef}
                              </p>
                            )}
                          </div>
                        ))}
                        <p className="blog-conclusion">
                          <strong>{article.conclusion}</strong>
                        </p>
                        <p className="blog-cta">
                          <strong>{article.cta}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="aside">
          <StickySidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
