import React, { useState } from "react";
import axios from "axios";
import { useCheckout } from "../../Contexts/CheckoutContext";
import "./BookingModal.css";

const BookingModal = ({ service, onClose }) => {
  const { formData, setFormData, handleFormChange } = useCheckout();
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bookingData = { ...formData, service };
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData
      );

      if (response.data.success) {
        setShowConfirmation(true);
        setTimeout(() => {
          setShowConfirmation(false);
          onClose();
          setFormData({
            email: "",
            phoneNumber: "",
            fullname: "",
            address: "",
            whatsappNumber: "",
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Error booking service:", error);
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {showConfirmation ? (
          <div className="confirmation-modal">
            <h2>Booking Confirmed!</h2>
            <p>
              <strong>Service:</strong> {service}
            </p>
            <p>
              <strong>Name:</strong> {formData.fullname}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.whatsappNumber}
            </p>
            <p>
              <strong>Date:</strong> {formData.date}
            </p>
            <p>
              <strong>Time:</strong> {formData.time}
            </p>
            <p>A confirmation email has been sent.</p>
          </div>
        ) : (
          <>
            <h2>Book {service}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.fullname}
                onChange={(e) => handleFormChange("fullname", e.target.value)}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                value={formData.whatsappNumber}
                onChange={(e) =>
                  handleFormChange("whatsappNumber", e.target.value)
                }
                placeholder="Whatsapp Number"
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleFormChange("date", e.target.value)}
                required
              />
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleFormChange("time", e.target.value)}
                required
              />
              <button type="submit" className="btn dark-btn" disabled={loading}>
                {loading ? "Processing..." : "Book Now"}
              </button>
            </form>
          </>
        )}
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingModal;

///XXXX

// import { useCheckout } from "../../Contexts/CheckoutContext";
// import { useBooking } from "../../Contexts/BookingContext";
// import "./BookingModal.css";

// const BookingModal = ({ service, onClose }) => {
//   const { formData, handleFormChange } = useCheckout();
//   const { submitBooking, loading, showPopupWithTimer } = useBooking(); // Use booking context

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {showPopupWithTimer ? (
//           <div className="confirmation-modal">
//             <h2>Booking Confirmed!</h2>
//             <p>
//               <strong>Service:</strong> {service}
//             </p>
//             <p>
//               <strong>Name:</strong> {formData.fullname}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.whatsappNumber}
//             </p>
//             <p>
//               <strong>Date:</strong> {formData.date}
//             </p>
//             <p>
//               <strong>Time:</strong> {formData.time}
//             </p>
//             <p>A confirmation email has been sent.</p>
//           </div>
//         ) : (
//           <>
//             <h2>Book {service}</h2>
//             <form onSubmit={(e) => submitBooking(e, service)}>
//               {" "}
//               {/* Use context function */}
//               <input
//                 type="text"
//                 value={formData.fullname}
//                 onChange={(e) => handleFormChange("fullname", e.target.value)}
//                 placeholder="Full Name"
//                 required
//               />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleFormChange("email", e.target.value)}
//                 placeholder="Email Address"
//                 required
//               />
//               <input
//                 type="tel"
//                 value={formData.whatsappNumber}
//                 onChange={(e) =>
//                   handleFormChange("whatsappNumber", e.target.value)
//                 }
//                 placeholder="Whatsapp Number"
//                 required
//               />
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleFormChange("date", e.target.value)}
//                 required
//               />
//               <input
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => handleFormChange("time", e.target.value)}
//                 required
//               />
//               <button type="submit" className="btn dark-btn" disabled={loading}>
//                 {loading ? "Processing..." : "Book Now"}
//               </button>
//             </form>
//           </>
//         )}
//         <button onClick={onClose} className="close-btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

///XXXXX

// import React, { useState } from "react";
// import { useBooking } from "../../Contexts/BookingContext";

// const BookingModal = ({ service }) => {
//   const {
//     showModal,
//     handleCloseModal,
//     handleBooking,
//     loading,
//     showPopupWithTimer,
//   } = useBooking();

//   const [localFormData, setLocalFormData] = useState({
//     email: "",
//     phoneNumber: "",
//     fullname: "",
//     address: "",
//     whatsappNumber: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLocalFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!localFormData.email || !localFormData.fullname || !service) {
//       showPopupWithTimer("Please fill in all required fields.");
//       return;
//     }
//     await handleBooking(service, localFormData);
//   };

//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">Book {service.name}</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="fullname"
//             placeholder="Full Name"
//             value={localFormData.fullname}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={localFormData.email}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-2"
//             required
//           />
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={localFormData.phoneNumber}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-2"
//           />
//           <input
//             type="text"
//             name="whatsappNumber"
//             placeholder="WhatsApp Number"
//             value={localFormData.whatsappNumber}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-2"
//           />
//           <textarea
//             name="address"
//             placeholder="Address"
//             value={localFormData.address}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded mb-2"
//           ></textarea>
//           <div className="flex justify-end mt-4">
//             <button
//               type="button"
//               onClick={handleCloseModal}
//               className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//               disabled={loading}
//             >
//               {loading ? "Booking..." : "Confirm Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

// import { useCheckout } from "../../Contexts/CheckoutContext";
// import { useBooking } from "../../Contexts/BookingContext";
// import "./BookingModal.css";

// const BookingModal = ({ service, onClose }) => {
//   const { formData, handleFormChange } = useCheckout();
//   const { submitBooking, loading, showPopupWithTimer, showConfirmation } =
//     useBooking();

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {showConfirmation ? (
//           <div className="confirmation-modal">
//             <h2>Booking Confirmed!</h2>
//             <p>
//               <strong>Service:</strong> {service}
//             </p>
//             <p>
//               <strong>Name:</strong> {formData.fullname}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.whatsappNumber}
//             </p>
//             <p>
//               <strong>Date:</strong> {formData.date}
//             </p>
//             <p>
//               <strong>Time:</strong> {formData.time}
//             </p>
//             <p>A confirmation email has been sent.</p>
//           </div>
//         ) : (
//           <>
//             <h2>Book {service}</h2>
//             <form onSubmit={(e) => submitBooking(e, service)}>
//               <input
//                 type="text"
//                 value={formData.fullname}
//                 onChange={(e) => handleFormChange("fullname", e.target.value)}
//                 placeholder="Full Name"
//                 required
//               />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleFormChange("email", e.target.value)}
//                 placeholder="Email Address"
//                 required
//               />
//               <input
//                 type="tel"
//                 value={formData.whatsappNumber}
//                 onChange={(e) =>
//                   handleFormChange("whatsappNumber", e.target.value)
//                 }
//                 placeholder="Whatsapp Number"
//                 required
//               />
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleFormChange("date", e.target.value)}
//                 required
//               />
//               <input
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => handleFormChange("time", e.target.value)}
//                 required
//               />
//               <button type="submit" className="btn dark-btn" disabled={loading}>
//                 {loading ? "Processing..." : "Book Now"}
//               </button>
//             </form>
//           </>
//         )}
//         <button onClick={onClose} className="close-btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

// import { useCheckout } from "../../Contexts/CheckoutContext";
// import { useBooking } from "../../Contexts/BookingContext";
// import "./BookingModal.css";

// const BookingModal = ({ service, onClose }) => {
//   const { formData, handleFormChange } = useCheckout();
//   const { submitBooking, loading, showConfirmation } = useBooking();

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {showConfirmation ? (
//           <div className="confirmation-modal">
//             <h2>Booking Confirmed!</h2>
//             <p>
//               <strong>Service:</strong> {service}
//             </p>
//             <p>
//               <strong>Name:</strong> {formData.fullname}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.whatsappNumber}
//             </p>
//             <p>
//               <strong>Date:</strong> {formData.date}
//             </p>
//             <p>
//               <strong>Time:</strong> {formData.time}
//             </p>
//             <p>A confirmation email has been sent.</p>
//           </div>
//         ) : (
//           <>
//             <h2>Book {service}</h2>
//             <form onSubmit={(e) => submitBooking(e, service)}>
//               <input
//                 type="text"
//                 value={formData.fullname}
//                 onChange={(e) => handleFormChange("fullname", e.target.value)}
//                 placeholder="Full Name"
//                 required
//               />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleFormChange("email", e.target.value)}
//                 placeholder="Email Address"
//                 required
//               />
//               <input
//                 type="tel"
//                 value={formData.whatsappNumber}
//                 onChange={(e) =>
//                   handleFormChange("whatsappNumber", e.target.value)
//                 }
//                 placeholder="Whatsapp Number"
//                 required
//               />
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleFormChange("date", e.target.value)}
//                 required
//               />
//               <input
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => handleFormChange("time", e.target.value)}
//                 required
//               />
//               <button type="submit" className="btn dark-btn" disabled={loading}>
//                 {loading ? "Processing..." : "Book Now"}
//               </button>
//             </form>
//           </>
//         )}
//         <button onClick={onClose} className="close-btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;

// import { useCheckout } from "../../Contexts/CheckoutContext";
// import { useBooking } from "../../Contexts/BookingContext";
// import "./BookingModal.css";

// const BookingModal = ({ service, onClose }) => {
//   const { formData, handleFormChange } = useCheckout();
//   const { handleBooking, loading, showConfirmation } = useBooking();

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {showConfirmation ? (
//           <div className="confirmation-modal">
//             <h2>Booking Confirmed!</h2>
//             <p>
//               <strong>Service:</strong> {service}
//             </p>
//             <p>
//               <strong>Name:</strong> {formData.fullname}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {formData.whatsappNumber}
//             </p>
//             <p>
//               <strong>Date:</strong> {formData.date}
//             </p>
//             <p>
//               <strong>Time:</strong> {formData.time}
//             </p>
//             <p>A confirmation email has been sent to you and the owner.</p>
//           </div>
//         ) : (
//           <>
//             <h2>Book {service}</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleBooking(service);
//               }}
//             >
//               <input
//                 type="text"
//                 value={formData.fullname}
//                 onChange={(e) => handleFormChange("fullname", e.target.value)}
//                 placeholder="Full Name"
//                 required
//               />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleFormChange("email", e.target.value)}
//                 placeholder="Email Address"
//                 required
//               />
//               <input
//                 type="tel"
//                 value={formData.whatsappNumber}
//                 onChange={(e) =>
//                   handleFormChange("whatsappNumber", e.target.value)
//                 }
//                 placeholder="Whatsapp Number"
//                 required
//               />
//               <input
//                 type="date"
//                 value={formData.date}
//                 onChange={(e) => handleFormChange("date", e.target.value)}
//                 required
//               />
//               <input
//                 type="time"
//                 value={formData.time}
//                 onChange={(e) => handleFormChange("time", e.target.value)}
//                 required
//               />
//               <button type="submit" className="btn dark-btn" disabled={loading}>
//                 {loading ? "Processing..." : "Book Now"}
//               </button>
//             </form>
//           </>
//         )}
//         <button onClick={onClose} className="close-btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;
