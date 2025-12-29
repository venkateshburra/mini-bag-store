import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/OrderSuccessModal";

export default function App() {
  return (
    <BrowserRouter>

       <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />

      <Navbar />

      <main className="bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
