import React from "react";
import { products } from "../../data";
import { NavLink } from "react-router-dom";
import "./StickySidebar.css";

const StickySidebar = () => {
  return (
    <aside className="sticky-sidebar">
      <h3>Recommended Products</h3>
      <ul>
        {products.slice(0, 5).map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <NavLink to="/products" className="shop-now-btn">
              Shop Now
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default StickySidebar;
