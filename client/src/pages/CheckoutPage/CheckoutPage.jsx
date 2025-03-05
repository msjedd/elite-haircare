import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Checkout from "../../Components/Checkout/Checkout";
import Products from "../../Components/Products/Products";
import OrderList from "../../Components/OrderList/OrderList";
import Title from "../../Components/Title/Title";
import { useCheckout } from "../../Contexts/CheckoutContext";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar />
      <OrderList />
      <Checkout />
      {/* {loading && <p>Processing your payment...</p>}
      {paymentStatus === "success" && <p>Your payment was successful!</p>}
      {paymentStatus === "failed" && (
        <p>Your payment failed. Please try again.</p>
      )} */}

      <Title title="" subTitle="Check these out!"></Title>
      <Products />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
