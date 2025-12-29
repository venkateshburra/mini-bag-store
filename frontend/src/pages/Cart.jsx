import { useEffect, useState } from "react";
import { fetchCart, removeFromCart } from "../api/api";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  fetchCart().then(data => {
    console.log("CART FROM SERVER:", data);
    setCart(data);
  });
}, []);



const handleRemoveFromCart = async (id) => {
  const updated = await removeFromCart(id);
  setCart(updated);
  toast.success("Removed from cart");

};



  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
<div className=" p-6 max-w-4xl mx-auto" style={{padding: '3rem'}}>
  <h2 className="text-3xl font-bold mb-8 text-slate-900 text-center">
    Your <span className="text-red-600">Cart</span>
  </h2>

{cart.length === 0 && (
  <div className="text-center text-gray-500 py-20">
    <p className="text-lg mb-4">Your cart is empty 🛒</p>

    <NavLink
      to="/"
      className="
        inline-flex items-center gap-2 my-4
        bg-red-600 text-white
        px-6 py-2 rounded-lg
        text-lg font-medium cursor-pointer
        transition-all duration-300
        hover:bg-red-700 hover:shadow-lg
      "
    >
      Shop Now
    </NavLink>
  </div>
)}

  {cart.length > 0 && (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {cart.map((item) => (
        <div
          key={item.cartItemId}
          className="
            flex justify-between items-center
            border-b last:border-none py-4
          "
        >
          {/* Product Info */}
          <div>
            <p className="font-medium text-slate-900">
              {item.name}
            </p>
            <p className="text-yellow-500 font-semibold">
              ₹{item.price}
            </p>
          </div>

          {/* Remove */}
          <button
            onClick={() => handleRemoveFromCart(item.cartItemId)}
            className="
              text-red-600 font-medium cursor-pointer
              hover:underline hover:text-red-700
              transition
            "
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <div className="flex justify-between items-center mt-6 pt-4">
        <span className="text-lg font-semibold text-slate-900">
          Total
        </span>
        <span className="text-xl font-bold text-yellow-500">
          ₹{total}
        </span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="
          mt-8 w-full bg-red-600 text-white
          py-3 rounded-lg text-lg font-medium cursor-pointer
          transition-all duration-300
          hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5
        "
      >
        Proceed to Checkout
      </button>
    </div>
  )}
</div>

  );
}
