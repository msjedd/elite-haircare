import React, { forwardRef, useState } from "react";
import axios from "axios";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.jpeg";
import white_arrow from "../../assets/white_arrow.png";

const Contact = forwardRef((_, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");
    console.log("formData before sending:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact" ref={ref}>
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="Email" /> theelitehaircare@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="Phone" /> +234 811 475 6558
          </li>
          <li>
            <img src={location_icon} alt="Location" /> 15, Afolabisi - Oyinloye
            street, Pipeline, Ilorin, Kwara State, Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Please enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}{" "}
            <img src={white_arrow} alt="Arrow" />
          </button>
        </form>
        {result && <span>{result}</span>}
      </div>
    </div>
  );
});

export default Contact;
