import { useState, useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import menu_icon from "../../assets/menu_icon.svg";
// import logo from "../../../public/logo.png";
import cart_icon from "../../assets/cart_icon.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navbarRef = useRef(null);
  // const mobileMenuRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    // let timer;
    const handleOutsideClicks = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target))
        setMobileMenu(false);
      //   {
      //   timer = setTimeout(() => setMobileMenu(false), 100);
      // }
    };

    document.addEventListener("click", handleOutsideClicks);

    return () => {
      // clearTimeout(timer);
      document.removeEventListener("click", handleOutsideClicks);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="dark-nav">
      <img className="logo" src="/logo.png" alt="Logo" />
      <span>
        <a
          href="https://wa.me/2348114756558"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        +2348114756558
      </span>

      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogPage"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FAQ"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactPage"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="btn">Contact us</button>
          </NavLink>
        </li>
      </ul>
      <NavLink to="/cartPage">
        <img className="cart-icon" src={cart_icon} alt="shopping cart" />
      </NavLink>

      <img
        className="menu-icon"
        src={menu_icon}
        alt="menu icon"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
      />
    </nav>
  );
};

export default Navbar;
