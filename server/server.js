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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

app.post("/api/bookings", async (req, res) => {
  const { fullname, email, whatsappNumber, date, time, service } = req.body;

  try {
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

const logFailedEmails = (results) => {
  const failedEmails = results.filter((res) => res.status === "rejected");

  if (failedEmails.length > 0) {
    console.warn("Some emails failed to send:", failedEmails);
  }
};

// ✅ Contact Form Submission
app.post("/api/contact", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const emailResults = await Promise.allSettled([
      sendContactEmail(
        process.env.WEBSITE_OWNER_EMAIL,
        name,
        phone,
        message
        // true
      ),
      // sendContactEmail(name, phone, message, false),
    ]);

    logFailedEmails(emailResults);

    return res.json({
      success: true,
      message: "Message sent successfully. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res
      .status(500)
      .json({ success: false, message: "Error processing contact form" });
  }
});

// ✅ Send Contact Form Emails
const sendContactEmail = async (recipient, name, phone, message) => {
  const subject = "New Contact Form Submission";

  const body = `
      <h2>New Message received!</h2>
      <p>You have received a new contact message:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Message:</strong> ${message}</li>
      </ul>
    `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: recipient,
    subject,
    html: body,
  });
};

app.listen(5000, () => console.log("Server running on port 5000"));
