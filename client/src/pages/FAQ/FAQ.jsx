import { useState } from "react";
import "./FAQ.css";
import Title from "../../Components/Title/Title";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/Navbar/Navbar";

const faqs = [
  {
    category: "Products",
    questions: [
      {
        question: "Are your haircare products all-natural?",
        answer:
          "Yes! Our products are made from 100% natural ingredients, free from sulfates, parabens, and harsh chemicals.",
      },
      {
        question: "Can I use your products on chemically treated hair?",
        answer:
          "Absolutely! Our products are safe for all hair types, including relaxed and color-treated hair.",
      },
      {
        question: "How long does shipping take?",
        answer:
          "Orders are processed within 1-2 business days. Shipping usually takes 3-7 business days, depending on your location.",
      },
      {
        question: "Do you accept returns?",
        answer:
          "For hygiene reasons, we do not accept returns. However, if you receive a damaged product, please contact us within 7 days.",
      },
      {
        question: "How often should I use your hair growth oil?",
        answer:
          "For best results, apply the hair growth oil 3-4 times a week, massaging it into your scalp to stimulate hair growth.",
      },
      // {
      //   question: "Can I use the hair growth oil on my skin?",
      //   answer:
      //     "Yes, our hair growth oil is safe for use on your skin. It’s great for moisturizing dry skin and reducing the appearance of scars and stretch marks.",
      // }
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "How do I book a haircare service?",
        answer:
          "You can book a service through our website's booking section. Once confirmed, you’ll receive an email with your appointment details.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept online payments via Paystack, including credit/debit cards and bank transfers.",
      },
      {
        question: "Can I reschedule or cancel my appointment?",
        answer:
          "Yes, you can reschedule up to 24 hours before your appointment. Cancellations must be made at least 48 hours in advance.",
      },
      {
        question: "Do you offer home services?",
        answer:
          "Yes, we do. However, home service is only available for customers in Ilorin and it's environs!",
      },
      {
        question: "Do you provide bridal hair services?",
        answer:
          "Yes, we offer bridal hair services. Please contact us directly to discuss your bridal hair needs.",
      },
      {
        question: "What should I do before my hair appointment?",
        answer:
          "We recommend arriving with clean, detangled hair. If special prep is required for your service, we’ll include details in your confirmation email.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <div className="faq-container">
        <Title
          subTitle="Frequently Asked Questions"
          title="Welcome to the Elite Haircare FAQ page!"
        />
        <p className="faq-description">
          Here, we answer the most common questions about our premium haircare
          products and professional services. Whether you're curious about
          ingredients, booking a service, or shipping details, we've got you
          covered. If you need further assistance, feel free to contact us!
        </p>

        {faqs.map((section, secIndex) => (
          <div key={secIndex} className="faq-section">
            <h2>{section.category}</h2>
            {section.questions.map((faq, index) => {
              const uniqueIndex = `${secIndex}-${index}`;
              return (
                <div key={uniqueIndex} className="faq-item">
                  <button
                    onClick={() => toggleFAQ(uniqueIndex)}
                    className="faq-question"
                  >
                    {faq.question}
                    <span>{openIndex === uniqueIndex ? "−" : "+"}</span>
                  </button>
                  {openIndex === uniqueIndex && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
