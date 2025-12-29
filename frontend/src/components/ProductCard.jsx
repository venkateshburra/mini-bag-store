import { NavLink } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div
      className="
        group bg-white rounded-xl overflow-hidden
        shadow-md transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-2xl
        hover:border border-yellow-400
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-44 w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="
            font-semibold text-lg text-slate-900
            transition-colors duration-300
            group-hover:text-red-600
          "
        >
          {product.name}
        </h3>

        <p className="text-yellow-500 font-bold mt-1">
          ₹{product.price}
        </p>

        <NavLink
          to={`/product/${product._id}`}
          className="
            block mt-4 text-center
            bg-slate-950 text-white py-2 rounded-lg
            transition-all duration-300
            hover:bg-slate-950 hover:tracking-wide
          "
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
}
