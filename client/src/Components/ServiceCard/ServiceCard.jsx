import React, { useState } from "react";
import { useBooking } from "../../Contexts/BookingContext";
import BookingModal from "../BookingModal/BookingModal";
import "./ServiceCard.css";

const ServiceCard = ({
  title,
  description,
  video,
  image1,
  image2,
  price,
  tagline,
}) => {
  const { showModal, handleOpenModal, handleCloseModal } = useBooking();

  return (
    <>
      <div className="service-card">
        <div className="service-description">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="service-tagline">{tagline}</p>
        </div>

        <div className="service-media">
          {video && (
            <div className="video-container">
              <video
                src={video}
                controls
                className="service-video"
                aria-label={`Video for ${title}`}
              />
            </div>
          )}

          <div className="image-container">
            {image1 && (
              <img
                src={image1}
                alt={`${title} image 1`}
                className="service-image"
              />
            )}
            {image2 && (
              <img
                src={image2}
                alt={`${title} image 2`}
                className="service-image"
              />
            )}
          </div>
        </div>
      </div>

      <div className="service-footer">
        <p className="price">
          <strong>PRICE: {price}</strong>
        </p>

        <button className="book-btn" onClick={handleOpenModal}>
          Book Now!
        </button>

        {showModal && (
          <BookingModal service={title} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default ServiceCard;
