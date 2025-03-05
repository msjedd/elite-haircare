import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>✅ Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/" className="btn dark-btn">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Confirmation;
