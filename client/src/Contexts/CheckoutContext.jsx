import React, { useState, useContext, createContext } from "react";

const CheckoutContext = createContext();

const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};

const CheckoutProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    fullname: "",
    address: "",
    whatsappNumber: "",
  });

  // const navigate = useNavigate();

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <CheckoutContext.Provider
      value={{
        formData,
        handleFormChange,
        setFormData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutProvider, useCheckout };
