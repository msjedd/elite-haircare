import { useCart } from "../../Contexts/CartContext";
import "../FullProduct/FullProduct.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description  product-info">{product.description}</p>
      <p className="product-directions product-info">{product.directions}</p>
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
