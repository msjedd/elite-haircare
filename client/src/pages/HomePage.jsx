import { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Title from "../Components/Title/Title";
// import About from "../components/About/About";
import Products from "../Components/Products/Products";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

import Reviews from "../Components/Reviews/Reviews";

const HomePage = () => {
  const contactUs = useRef(null);
  return (
    <main>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="Our Services" title="What we offer" />
        <Services />
        {/* <About /> */}
        <Title subTitle="Products" title="Haircare Products" />
        <Products />
        <Title subTitle="REVIEWS" title="What Satisfied Customers say" />
        <Reviews />
        <Title subTitle="Contact us" title="Get in Touch" />
        <Contact ref={contactUs} />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
