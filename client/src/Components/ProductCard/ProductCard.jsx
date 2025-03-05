import "./ProductCard.css";
import { useCart } from "../../Contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="product-card ">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <span className="product-price">₦ {product.price}</span>
      <button
        className="add-to-cart-btn"
        onClick={(e) => addToCart(product, e)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
