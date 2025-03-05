import React from "react";
import "./Footer.css";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © {new Date().getFullYear()} ELITE HAIRCARE. <br />
        All rights reserved
      </p>
      <NavLink to="/terms">
        <p>Terms of Services</p>
      </NavLink>
      <NavLink to="/privacyPolicy">
        <p>Privacy Policy</p>
      </NavLink>
      <ul>
        <li>
          <a
            href="https://wa.me/message/2V4GXRZP6Q4AP1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/theelitehaircare.ng/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
