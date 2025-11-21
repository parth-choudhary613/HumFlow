import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
 

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-3 border-[#1B5E20] lg:text-white fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-screen-md py-3 shadow-xl/30 backdrop-blur-sm md:backdrop-blur-lg md:top-6 rounded-b-3xl md:rounded-3xl lg:max-w-screen-lg text-white"
    >
      <div className="relative flex items-center justify-between h-20 max-w-full text-white px-6">
        {/* === Logo === */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-20 h-auto md:w-30" />
            <span className="sr-only">Website Title</span>
          </Link>
        </div>

        {/* === Center Nav === */}
        <nav className="md:flex absolute left-1/2 -translate-x-1/2 gap-40 text-white">
          <Link
            to="/about"
            className="px-2 py-1 text-md font-medium hover:text-green-400 transition"
          >
            About
          </Link>
   <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="w-20 h-auto md:w-30" />
            <span className="sr-only">Website Title</span>
          </Link>
          <Link
            to="/contact"
            className="px-2 py-1 text-md font-medium hover:text-green-400 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
