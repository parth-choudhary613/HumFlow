import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Or use Heroicons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-4 border-white  fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md py-3 shadow-xl/30 backdrop-blur-sm md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="relative flex items-center justify-between px-4">
        {/* === Logo (center on mobile, left on larger screens) === */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-14 h-auto" />
            <span className="sr-only">Website Title</span>
          </Link>
        </div>

        {/* === Center Nav (visible only on md and up) === */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <Link
            to="/about"
            className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg transition outline-0 hover:outline hover:outline-1 hover:outline-rose-300"
          >
            About
          </Link>
          <Link
            to="/"
            className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg transition outline-0 hover:outline hover:outline-1 hover:outline-rose-300"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg transition outline-0 hover:outline hover:outline-1 hover:outline-rose-300"
          >
            Contact
          </Link>
        </nav>

        {/* === Right Side Buttons or Toggle === */}
        <div className="ml-auto flex items-center gap-3">
          {/* Toggle button for mobile */}
          <button
            className="md:hidden text-gray-700 hover:text-black transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Light/Dark buttons (visible on md and up) */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="#"
              className="rounded-xl bg-white px-3 py-2 text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition"
            >
              Mute
            </Link>
            <Link
              to="#"
              className="rounded-xl bg-charcoal px-3 py-2 text-sm  text-gray-100 shadow-sm hover:bg-gray-900 transition"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {menuOpen && (
        <div className="flex flex-col mt-3 items-center gap-3 md:hidden px-4 transition-all duration-300">
          <Link
            to="/about"
            className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 text-sm font-medium text-gray-900 hover:bg-rose-200 rounded-lg w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex gap-2 mt-2">
            <Link
              to="#"
              className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition"
            >
              Mute
            </Link>
            <Link
              to="#"
              className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:text-gray-100 shadow-sm transition"
            >
              LogIn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
