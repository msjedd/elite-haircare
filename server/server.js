import express from "express";
import cors from "cors";
import axios from "axios";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET;

// 🚀 Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify Paystack Payment & Send Emails
app.post("/api/paystack/verify", async (req, res) => {
  const { reference, email, fullname, cartItems, totalAmount } = req.body;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
      }
    );

    if (response.data.data.status !== "success") {
      return res
        .status(400)
        .json({ success: false, message: "Payment verification failed." });
    }

    // ✅ Send Emails Simultaneously
    const emailResults = await Promise.allSettled([
      sendEmail(email, fullname, cartItems, totalAmount),
      sendEmail(
        process.env.WEBSITE_OWNER_EMAIL,
        "Elite Haircare",
        cartItems,
        address,
        email,
        fullname,
        whatsappNumber,
        totalAmount,
        true
      ),
    ]);

    logFailedEmails(emailResults);

    return res.json({
      success: true,
      message: "Payment verified. Emails sent.",
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res
      .status(500)
      .json({ success: false, message: "Error verifying payment" });
  }
});

// ✅ Handle Service Bookings & Send Emails
app.post("/api/bookings", async (req, res) => {
  const { fullname, email, whatsappNumber, date, time, service } = req.body;

  try {
    // ✅ Send Booking Emails Simultaneously
    const emailResults = await Promise.allSettled([
      sendBookingEmail(
        email,
        fullname,
        service,
        date,
        time,
        whatsappNumber,
        email,
        false
      ),
      sendBookingEmail(
        process.env.WEBSITE_OWNER_EMAIL,
        fullname,
        service,
        date,
        time,
        whatsappNumber,
        email,
        true
      ),
    ]);

    logFailedEmails(emailResults);

    return res.json({
      success: true,
      message: "Booking confirmed. Emails sent.",
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    res
      .status(500)
      .json({ success: false, message: "Error processing booking" });
  }
});

// 📧 Generic Function to Send Emails
const sendEmail = async (
  recipient,
  name,
  cartItems,
  totalAmount,
  isOwner = false
) => {
  const subject = isOwner
    ? "New Purchase Notification"
    : "Payment Confirmation";
  const message = `
    <h2>Hello ${name},</h2>
    <p>${
      isOwner
        ? "A customer has made a purchase."
        : "Thank you for your purchase."
    }</p>
    <ul>
      ${cartItems
        .map(
          (item) => `<li>${item.name} - ${item.quantity} x ₦${item.price}</li>`
        )
        .join("")}
    </ul>
    <p><strong>Total Amount Paid:</strong> ₦${totalAmount}</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: recipient,
    subject,
    html: message,
  });
};

// 📧 Generic Function to Send Booking Emails
const sendBookingEmail = async (
  recipient,
  name,
  service,
  date,
  time,
  phone,
  email,
  isOwner = false
) => {
  const subject = isOwner
    ? "New Service Booking - Customer Details"
    : "Booking Confirmation - Your Appointment is Set!";
  const message = isOwner
    ? `
      <h2>New Service Booking</h2>
      <p>A customer has booked a service:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
      </ul>
    `
    : `
      <h2>Hello ${name},</h2>
      <p>Your service booking has been confirmed:</p>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
      </ul>
      <p>See you soon! Contact us at +2348114756558 if needed.</p>
    `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: recipient,
    subject,
    html: message,
  });
};

// 🛠 Function to Log Failed Emails
const logFailedEmails = (results) => {
  const failedEmails = results.filter((res) => res.status === "rejected");

  if (failedEmails.length > 0) {
    console.warn("Some emails failed to send:", failedEmails);
  }
};

// 🚀 Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
