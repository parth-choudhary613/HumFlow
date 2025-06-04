// src/components/Navbar.jsx
import React from "react";
import Logo from "../assets/logo.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className=" shadow-xl/30 inset-shadow-sm fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md bg-transparent  py-3   md:top-6 md:rounded-3xl lg:max-w-screen-lg">
  <div className="px-4 ">
    <div className="flex items-center justify-between">
       <div class="flex shrink-0">
        <a href="/" class="flex items-center" aria-current="page">
          <img src={Logo} alt="Logo" class="h-auto w-14" />
          <span class="sr-only">Website Title</span>
        </a>
      </div>
  
      {/* <!-- Nav Links (Visible on md and above) --> */}
      <nav className="hidden md:flex md:items-center md:gap-7">
        <Link to="#" className="rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition">
          About
        </Link>
        <Link to="#" className="rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition">
          Home
        </Link>
        <Link to="#" className="rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition">
          Contact
        </Link>
      </nav>

      {/* <!-- Action Buttons --> */}
      <div className="flex items-center gap-3">
        <Link to="/login" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition">
          Light
        </Link>
        <Link to="/login" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition">
          Dark
        </Link>
      </div>
    </div>
  </div>
</header>
  );
}

export default Navbar;
