// Base URL (Render backend or localhost)
const BASE_URL = import.meta.env.VITE_API_URL;

// PRODUCTS
export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

// CART
export const addToCart = async (product) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const fetchCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`);
  return res.json();
};

export const removeFromCart = async (id) => {
  const res = await fetch(`${BASE_URL}/cart/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const removeCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
  });
  return res.json();
};

// CHECKOUT
export const checkoutOrder = async (order) => {
  const res = await fetch(`${BASE_URL}/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return res.json();
};
