import "./Products.css";
import white_arrow from "../../assets/white_arrow.png";
import { products } from "../../data/data";
import ProductCard from "../ProductCard/ProductCard";
import { useCart } from "../../Contexts/CartContext";
import { NavLink } from "react-router-dom";

const Products = () => {
  const { addToCart } = useCart();
  return (
    <div className="products">
      <div className="product">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            className="vibrate-box"
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <NavLink to="/products">
        <button className="btn dark-btn">
          See more here <img src={white_arrow} alt="" />
        </button>
      </NavLink>
    </div>
  );
};

export default Products;
