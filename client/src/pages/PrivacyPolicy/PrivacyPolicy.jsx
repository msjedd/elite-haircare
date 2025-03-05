import React from "react";
import "./PrivacyPolicy.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <div className="privacy-container">
        <h1 className="privacy-header">Privacy Policy</h1>
        <p className="privacy-date">Effective Date: {currentYear}</p>

        <section className="privacy-section">
          <h2 className="privacy-subheader">1. Information We Collect</h2>
          <p>We collect personal information in the following ways:</p>
          <ul>
            <li>
              <strong>When You Book a Service:</strong> Name, email, phone
              number, and appointment details.
            </li>
            <li>
              <strong>When You Make a Purchase:</strong> Billing/shipping
              address, payment details (processed securely via Paystack), and
              order history.
            </li>
            <li>
              <strong>When You Contact Us:</strong> Any details you provide
              through forms or direct communication.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> Device information,
              browser type, and site usage analytics via cookies.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>✅ Process bookings and orders.</li>
            <li>✅ Send confirmation emails and important updates.</li>
            <li>✅ Improve our website and services.</li>
            <li>✅ Provide customer support.</li>
            <li>✅ Ensure secure transactions.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">
            3. How We Share Your Information
          </h2>
          <p>
            We do <strong>not</strong> sell, rent, or trade your personal
            information. However, we may share it with:
          </p>
          <ul>
            <li>
              <strong>Payment Processors (e.g., Paystack):</strong> To securely
              process transactions.
            </li>
            <li>
              <strong>Service Providers:</strong> For email notifications and
              website maintenance.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">4. How We Protect Your Data</h2>
          <p>
            We implement security measures such as encryption, secure servers,
            and restricted access to keep your data safe.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">5. Your Rights & Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li> Request access to your data.</li>
            <li> Correct or delete your personal information.</li>
            <li> Opt out of promotional emails at any time.</li>
          </ul>
          <p>
            To make a request, contact us at{" "}
            <strong>[Insert Contact Email]</strong>.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">6. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your browsing experience. You can adjust
            cookie settings in your browser at any time.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="privacy-subheader">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach
            out to us:
          </p>
          <p>
            <strong>theelitehaircare.gmail.com</strong>
          </p>
          <p>
            <strong>+2348114756558</strong>
          </p>
        </section>

        <footer className="privacy-footer">
          <p>© {currentYear} Elite Haircare. All rights reserved.</p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
