// import './Products.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FullProduct from "../../Components/FullProduct/FullProduct";
import { products } from "../../data/data";
import ProductPageHero from "../../Components/ProductPageHero/ProductPageHero";
import Title from "../../Components/Title/Title";
import FeaturedReviews from "../../Components/FeaturedReviews/FeaturedReviews";
import React, { useRef } from "react";

const Products = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />
      <ProductPageHero scrollToProducts={scrollToProducts} />
      <Title
        title="What our customers say about our products"
        subTitle="Reviews"
      />
      <FeaturedReviews />
      <Title title="Our Product Shop" subTitle="Natural and Pure" />
      <div className="products" ref={productsRef}>
        {products.map((product) => (
          <FullProduct key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
