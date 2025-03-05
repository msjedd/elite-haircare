import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useCheckout } from "../../Contexts/CheckoutContext";
import { useCart } from "../../Contexts/CartContext";
import { PaystackButton } from "react-paystack";
import axios from "axios";

const Checkout = () => {
  const { formData, handleFormChange } = useCheckout();
  const { cart, getTotalPrice, clearCart } = useCart();
  const totalAmount = getTotalPrice();
  const { fullname, email, whatsappNumber, address } = formData;
  const publicKey = "pk_test_ef8038b1870f29f34ee6f7d918c8b6752d1b4e6c"; // Replace with actual key

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Dynamically Load Paystack Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.paystack.com/assets/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Show Popup with Timer
  const showPopupWithTimer = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Handle Payment Success
  const handlePaymentSuccess = async (response) => {
    setLoading(true);
    try {
      const verifyResponse = await axios.post(
        "http://localhost:5000/api/paystack/verify",
        {
          reference: response.reference,
          email,
          fullname,
          whatsappNumber,
          address,
          cartItems: cart,
          totalAmount,
        }
      );

      if (verifyResponse.data.success) {
        console.log("Payment verified successfully.");
        showPopupWithTimer("Your payment was successful!");
        Object.keys(formData).forEach((field) => handleFormChange(field, ""));
        clearCart();
      } else {
        showPopupWithTimer("Payment verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      showPopupWithTimer("An error occurred while verifying payment.");
    } finally {
      setLoading(false);
    }
  };

  // Paystack Button Config
  const componentProps = {
    email,
    amount: totalAmount * 100, // Convert to kobo
    currency: "NGN",
    publicKey,
    text: "Pay Now",
    onSuccess: handlePaymentSuccess,
    onClose: () => showPopupWithTimer("Payment was canceled."),
    className: "btn dark-btn form",
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <input
          type="text"
          value={fullname}
          onChange={(e) => handleFormChange("fullname", e.target.value)}
          placeholder="Full name"
          required
        />
        <input
          type="tel"
          value={whatsappNumber}
          onChange={(e) => handleFormChange("whatsappNumber", e.target.value)}
          placeholder="Whatsapp Number"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => handleFormChange("email", e.target.value)}
          placeholder="Email Address"
          required
        />
        <textarea
          value={address}
          onChange={(e) => handleFormChange("address", e.target.value)}
          placeholder="Delivery Address"
          required
          rows={4}
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
      </form>

      <PaystackButton {...componentProps} />

      {loading && <p>Processing your payment...</p>}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
