// import React, { useState, useContext, createContext } from "react";
// import axios from "axios";
// import { useCheckout } from "./CheckoutContext";

// const BookingContext = createContext();

// export const useBooking = () => {
//   const context = useContext(BookingContext);
//   if (!context) {
//     throw new Error("useBooking must be used within a BookingProvider");
//   }
//   return context;
// };

// export const BookingProvider = ({ children }) => {
//   const { formData, setFormData } = useCheckout();
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleBooking = async (service) => {
//     setLoading(true);
//     try {
//       const bookingData = { ...formData, service };
//       const response = await axios.post(
//         "http://localhost:5000/api/bookings",
//         bookingData
//       );
//       if (response.data.success) {
//         setShowConfirmation(true);
//         setTimeout(() => {
//           setShowConfirmation(false);
//           handleCloseModal();
//           setFormData({
//             email: "",
//             phoneNumber: "",
//             fullname: "",
//             address: "",
//             whatsappNumber: "",
//           });
//         }, 5000);
//       }
//     } catch (error) {
//       console.error("Error booking service:", error);
//     }
//     setLoading(false);
//   };

//   const showPopupWithTimer = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   return (
//     <BookingContext.Provider
//       value={{
//         showModal,
//         handleOpenModal,
//         handleCloseModal,
//         handleBooking,
//         loading,
//         showPopupWithTimer,
//         // showConfirmation,
//       }}
//     >
//       {children}
//     </BookingContext.Provider>
//   );
// };

// // export { BookingProvider, useBooking }

// import React, { useState, useContext, createContext } from "react";
// import axios from "axios";
// import { useCheckout } from "./CheckoutContext";

// const BookingContext = createContext();

// export const useBooking = () => {
//   const context = useContext(BookingContext);
//   if (!context) {
//     throw new Error("useBooking must be used within a BookingProvider");
//   }
//   return context;
// };

// export const BookingProvider = ({ children }) => {
//   const { formData, setFormData } = useCheckout();
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const showPopupWithTimer = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   const handleBooking = async (service) => {
//     setLoading(true);
//     try {
//       const bookingData = { ...formData, service };
//       const response = await axios.post(
//         "http://localhost:5000/api/bookings",
//         bookingData
//       );

//       if (response.data.success) {
//         showPopupWithTimer("Booking successful! Confirmation email sent.");
//         setTimeout(() => {
//           handleCloseModal();
//           setFormData({
//             email: "",
//             phoneNumber: "",
//             fullname: "",
//             address: "",
//             whatsappNumber: "",
//           });
//         }, 3000);
//       } else {
//         showPopupWithTimer("Booking failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error booking service:", error);
//       showPopupWithTimer("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <BookingContext.Provider
//       value={{
//         showModal,
//         handleOpenModal,
//         handleCloseModal,
//         handleBooking,
//         loading,
//         showPopupWithTimer,
//       }}
//     >
//       {children}
//     </BookingContext.Provider>
//   );
// };

// import React, { useState, useContext, createContext } from "react";
// import axios from "axios";
// import { useCheckout } from "./CheckoutContext";

// const BookingContext = createContext();

// export const useBooking = () => {
//   const context = useContext(BookingContext);
//   if (!context) {
//     throw new Error("useBooking must be used within a BookingProvider");
//   }
//   return context;
// };

// export const BookingProvider = ({ children }) => {
//   const { formData, setFormData } = useCheckout();
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const showPopupWithTimer = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 3000);
//   };

//   const submitBooking = async (e, service) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const bookingData = { ...formData, service };
//       const response = await axios.post(
//         "http://localhost:5000/api/bookings",
//         bookingData
//       );

//       if (response.data.success) {
//         setShowConfirmation(true);
//         showPopupWithTimer("Booking successful! Confirmation email sent.");
//         setTimeout(() => {
//           setShowConfirmation(false);
//           handleCloseModal();
//           setFormData({
//             email: "",
//             phoneNumber: "",
//             fullname: "",
//             address: "",
//             whatsappNumber: "",
//             date: "",
//             time: "",
//           });
//         }, 3000);
//       } else {
//         showPopupWithTimer("Booking failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error booking service:", error);
//       showPopupWithTimer("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <BookingContext.Provider
//       value={{
//         showModal,
//         handleOpenModal,
//         handleCloseModal,
//         submitBooking,
//         loading,
//         showPopupWithTimer,
//         showConfirmation,
//       }}
//     >
//       {children}
//     </BookingContext.Provider>
//   );
// };

import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useCheckout } from "./CheckoutContext";

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const { formData, setFormData } = useCheckout();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setShowConfirmation(false);
  };

  const showPopupWithTimer = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleBooking = async (service) => {
    setLoading(true);
    try {
      const bookingData = { ...formData, service };
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );

      if (response.data.success) {
        // Send email to both customer and owner
        await axios.post("http://localhost:5000/api/send-confirmation-email", {
          customerEmail: formData.email,
          ownerEmail: "owner@example.com", // Change this to actual owner email
          service,
          fullname: formData.fullname,
          phone: formData.whatsappNumber,
          date: formData.date,
          time: formData.time,
        });

        showPopupWithTimer("Booking successful! Confirmation emails sent.");
        setShowConfirmation(true);

        setTimeout(() => {
          handleCloseModal();
          setFormData({
            email: "",
            phoneNumber: "",
            fullname: "",
            address: "",
            whatsappNumber: "",
            date: "",
            time: "",
          });
        }, 3000);
      } else {
        showPopupWithTimer("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking service:", error);
      showPopupWithTimer("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        showModal,
        handleOpenModal,
        handleCloseModal,
        handleBooking,
        loading,
        showPopupWithTimer,
        showConfirmation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
