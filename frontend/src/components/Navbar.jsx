import { NavLink } from "react-router-dom";

export default function Navbar() {



  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-yellow-400"
        >
          Mini<span className="text-red-600">Bag</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
              }`
            }
          >
            Shop
          </NavLink>

          {/* Cart with badge */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "border border-red-400 bg-yellow-400  text-black"
                  : "bg-white text-slate-900 hover:bg-yellow-400"
              }`
            }
          >
            Cart

            {/* {cartCount > 0 && (
              <span
                className="
                  absolute -top-2 -right-2
                  bg-red-600 text-white
                  text-xs font-bold
                  w-5 h-5 flex items-center justify-center
                  rounded-full
                "
              >
                {cartCount}
              </span>
            )} */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
