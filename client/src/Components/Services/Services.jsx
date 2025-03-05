import React from "react";
import "./Services.css";
import { NavLink } from "react-router-dom";
import service_1 from "../../assets/service_1.jpg";
import service_2 from "../../assets/service_2.jpeg";
import service_3 from "../../assets/service_3.jpg";
import service_icon_1 from "../../assets/service_icon_1.png";
import service_icon_2 from "../../assets/service_icon_2.png";
import service_icon_3 from "../../assets/service_icon_3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <NavLink to="/services">
            <img src={service_icon_1} alt="" />
            <p>Home Service</p>
          </NavLink>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <NavLink to="/services">
            <img src={service_icon_2} alt="" />
            <p>Haircare Consultation</p>
          </NavLink>
        </div>
      </div>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <NavLink to="/services">
            <img src={service_icon_3} alt="" />
            <p>Professional Braiding Services</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// const Service = ({ image, icon, title, link }) => {
//   return (
//     <div className="service">
//       <img src={image} alt={title} />
//       <div className="caption">
//         <NavLink to={link}>
//           <img src={icon} alt={title} />
//           <p>{title}</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

export default Services;
