// No localhost here ❌
// Only /api ✅

export const fetchProducts = async () => {
  const res = await fetch("/api/products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
};

export const addToCart = async (product) => {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  
  return res.json();
};

export const fetchCart = async () => {
  const res = await fetch(`api/cart`);
  return res.json();
};


export const removeFromCart = async (id) => {
  const res = await fetch(`/api/cart/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

export const removeCart = async () => {
  const res = await fetch(`/api/cart`, {
    method: "DELETE",
  });
  return res.json();
};

export const checkoutOrder = async (order) => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return res.json();
};
