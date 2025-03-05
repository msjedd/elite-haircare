import { useCart } from "../../Contexts/CartContext";
import { NavLink } from "react-router-dom";
import { useCheckout } from "../../Contexts/CheckoutContext";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, handleQuantityChange } =
    useCart();
  const { isClicked } = useCheckout();
  console.log("Cart length:", cart.length);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {!Array.isArray(cart) || cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart?.map((cartItem, index) => (
              <li key={index} className="cart-item">
                <img src={cartItem.image} alt="" />
                <div className="cart-details">
                  <p>{cartItem.name}</p>

                  <p>₦{cartItem.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(cartItem.id, -1)}
                    >
                      -
                    </button>
                    <p>{cartItem.quantity}</p>
                    <button
                      onClick={() => handleQuantityChange(cartItem.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(cartItem.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-summary">
        <h2>Total: ₦ {getTotalPrice().toFixed(2)}</h2>

        <NavLink to="CheckoutPage">
          <button
            className={`checkout-btn ${isClicked ? "clicked" : ""} `}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
