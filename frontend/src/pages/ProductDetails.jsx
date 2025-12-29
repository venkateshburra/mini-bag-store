import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById, addToCart } from "../api/api";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

 useEffect(() => {
  const loadProduct = async () => {
    const data = await fetchProductById(id);
    setProduct(data);
  };

  loadProduct();
}, [id]);


  if (!product) return <p className="p-6">Loading...</p>;


  const handleAdd = async () => {
  await addToCart(product);

  toast.success("Added to cart");
};


  return (
<div className="p-6 mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
  
  {/* Image Section */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
    <img
      src={product.image}
      alt={product.name}
      className="
        w-full h-[420px] object-cover
        transition-transform duration-500 ease-out
        group-hover:scale-105
      "
    />
  </div>

  {/* Details Section */}
  <div className="flex flex-col justify-center">
    <h2 className="text-4xl font-bold text-slate-900 mb-3">
      {product.name}
    </h2>

    <p className="text-gray-600 leading-relaxed mb-6">
      {product.description}
    </p>

    <p className="text-3xl font-bold text-yellow-500 mb-8">
      ₹{product.price}
    </p>

    <button
      onClick={handleAdd}
      className="
        w-fit bg-red-600 text-white
        px-8 py-3 rounded-lg text-lg font-medium
        transition-all duration-300 cursor-pointer
        hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5
      "
    >
      Add to Cart
    </button>
  </div>
</div>

  );
}
