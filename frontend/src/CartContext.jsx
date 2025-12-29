import { createContext, useContext, useEffect, useState } from "react";
import { fetchCart, addToCart as apiAdd, removeFromCart as apiRemove } from "./api/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔄 load cart from backend
  const loadCart = async () => {
    const data = await fetchCart();
    setCart(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, []);

  // ➕ add item
  const addToCart = async (product) => {
    const updatedCart = await apiAdd(product);
    setCart(updatedCart);
  };

  // ➖ remove item
  const removeFromCart = async (id) => {
    const updatedCart = await apiRemove(id);
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, loadCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
