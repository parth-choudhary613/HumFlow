import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border border-[#1B5E20] lg:text-white fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md py-3 shadow-xl/30 backdrop-blur-sm md:backdrop-blur-lg md:top-6 rounded-b-3xl md:rounded-3xl lg:max-w-screen-lg text-white">
      <div className="relative flex items-center justify-between h-12 text-white px-6">
        {/* === Logo === */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-16 h-auto" />
            <span className="sr-only">Website Title</span>
          </Link>
        </div>

        {/* === Center Nav (visible only on md and up) === */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-white">

          {/* <Link to="/about" className="px-2 py-1 text-md font-medium hover:text-green-400 transition">
            About
          </Link>
          <Link to="/" className="px-2 py-1 text-md font-medium hover:text-green-400 transition">
            Home
          </Link>
          <Link to="/contact" className="px-2 py-1 text-md font-medium hover:text-green-400 transition">
            Contact
          </Link> */}
        </nav>

        {/* === Right Side Buttons or Toggle === */}
        <div className="ml-auto flex items-center gap-3">
          {/* Toggle button for mobile */}
          <button
            className="md:hidden text-gray-100 hover:text-green-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right buttons for desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="#" className="rounded-xl bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition">
              Mute
            </Link>
            <Link to="#" className="rounded-xl bg-charcoal px-3 py-2 text-sm text-gray-100 shadow-sm hover:bg-gray-900 transition">
              LogIn
            </Link>
          </div>
        </div>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {/* {menuOpen && (
        <div className="flex flex-col mt-3 items-center gap-3 md:hidden px-4 transition-all duration-300">
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-white w-full text-center hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/" className="px-3 py-2 text-sm font-medium text-white w-full text-center hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-white w-full text-center hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <div className="flex gap-2 mt-2">
            <Link to="#" className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition">
              Mute
            </Link>
            <Link to="#" className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition">
              LogIn
            </Link>
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Navbar;
