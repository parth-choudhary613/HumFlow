import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ added import
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <footer className="backdrop-blur-sm text-xl text-gray-100 py-4 px-4 bg-transparent">
      <div
        className="max-w-4xl w-full mx-auto flex flex-col gap-4 items-center text-center will-change-transform will-change-opacity"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Logo / Name */}
        <p className="text-gray-100 font-semibold">HumFlow</p>

        {/* Description */}
        <p className="text-sm sm:text-lg leading-relaxed max-w-xl">
          Relaxing ambient sound mixer for work, sleep, and focus. Inspired by
          the idea of creating a calm environment with natural audio experiences.
        </p>

        {/* Navigation Links */}
        <div
          className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <span className="sm:inline">|</span>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <span className="sm:inline">|</span>
          <a
            href="https://pixabay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            Video / Sounds Credit
          </a>
        </div>

        {/* Info Text */}
        <p
          className="text-lg leading-relaxed max-w-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Sounds mixed and played locally in your browser – nothing is uploaded.
          No login required.
        </p>

        {/* Social Links */}
        <div
          className="flex flex-wrap justify-center gap-4 text-sm"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/parth-choudhary613"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-blue-500 cursor-pointer"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p
          className="text-[10px] text-gray-400"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          &copy; 2025 NatureSoundSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
