export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            MiniBag Store
          </h3>
          <p className="text-sm">
            A mini e-commerce application built as a full-stack assignment using
            React, Node.js, Express, MongoDB, and Tailwind CSS.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-sm">
            Designed & Developed by{" "}
            <span className="text-red-500 font-medium">Venkatesh</span>
          </p>
          <p className="text-xs mt-2 text-gray-400">
            © {new Date().getFullYear()} MiniBag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
