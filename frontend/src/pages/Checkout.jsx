import { useEffect, useState } from "react";
import { checkoutOrder, fetchCart, removeCart } from "../api/api";
import { useNavigate } from "react-router-dom";
import OrderSuccessModal from "./OrderSuccessModal";

export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetchCart().then(setCart);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

const submit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.address) {
    alert("Please fill all fields");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  await checkoutOrder({
    ...form,
    items: cart,
    total,
  });

  await removeCart();

  setShowSuccess(true); // ✅ show popup
};

  return (
    <>
      {/* Checkout Form */}
      <div
        className={`p-6 max-w-lg mx-auto ${
          showSuccess ? "min-h-screen opacity-0" : ""
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">
          Checkout
        </h2>

        <div className="bg-white border border-amber-300 rounded-2xl shadow-lg p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              name="address"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <button
            onClick={submit}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            Place Order (₹{total})
          </button>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <OrderSuccessModal
          name={form.name}
          cart={cart}
          total={total}
          onClose={() => navigate("/")}
        />
      )}
    </>
  );
}
