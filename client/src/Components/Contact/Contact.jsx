import React, { forwardRef, useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.jpeg";
import white_arrow from "../../assets/white_arrow.png";

const Contact = forwardRef((_, ref) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6e5cc505-2612-4f48-881b-9864f4782dfd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" ref={ref}>
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to
          everyone.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            theelitehaircare@gmail.com{" "}
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +234 811 475 6558
          </li>
          <li>
            <img src={location_icon} alt="" />
            15, Afolabisi - Oyinloye street, Pipeline, Ilorin
            <br />
            Kwara State, Nigeria
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Please enter your mobile number"
            required
          />
          <label htmlFor="">Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
});

export default Contact;
