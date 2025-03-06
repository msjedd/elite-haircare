import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const CartProvider = ({ children }) => {
  const getInitialCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };

  const [cart, setCart] = useState(getInitialCart);
  const [notification, setNotification] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationPosition, setNotificationPosition] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, e) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity =
          Number(updatedCart[existingProductIndex].quantity) + 1;
        return updatedCart;
      } else {
        console.log(prevCart);

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    showNotification("Added to cart!", e);
  };

  const handleQuantityChange = (id, amount) => {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    // const updatedCart = cart.filter((_, i) => i !== index);
    // setCart(updatedCart);

    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = useMemo(() => {
    return () =>
      cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const showNotification = (message, e) => {
    const { top, left, width } = e.target.getBoundingClientRect();
    setNotification(message);
    // setLastAddedProductId(productId);
    setNotificationPosition({
      top: top + window.scrollY - 30, // Position above the button
      left: left + width / 2, // Center horizontally
    });
    setIsNotificationVisible(true);

    setTimeout(() => {
      setIsNotificationVisible(false);
      // setLastAddedProductId(null);
    }, 500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalPrice,
        handleQuantityChange,
        notification,
        isNotificationVisible,
        notificationPosition,
        setNotification,
        showNotification,
        clearCart,
      }}
    >
      {children}
      {isNotificationVisible && notificationPosition && (
        <div
          className="cart-notification"
          style={{
            position: "absolute",
            top: `${notificationPosition.top}px`,
            left: `${notificationPosition.left}px`,
            transform: "translateX(-50%)",
            background: "green",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "14px",
            zIndex: 1000,
            // transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          <p>{notification}</p>
        </div>
      )}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
