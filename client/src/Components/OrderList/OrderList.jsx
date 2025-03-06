import React from "react";
import { useCart } from "../../Contexts/CartContext";
import "./OrderList.css";

const OrderList = () => {
  const { cart, getTotalPrice } = useCart();
  // console.log(cart);
  return (
    <div className="order-list">
      <h1>Your Order</h1>
      <ul>
        {cart?.map((cartItem, index) => (
          <li className="order-item" key={index}>
            <p>{cartItem.name}</p>
            <p>X {cartItem.quantity}</p>
            <p>₦{cartItem.price * cartItem.quantity}</p>
            {/* <img src={cartItem.image} alt="" /> */}
          </li>
        ))}
        <p className="total">Total: ₦ {getTotalPrice().toFixed(2)} </p>
      </ul>
    </div>
  );
};

export default OrderList;
