import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <footer className="backdrop-blur-sm text-xl text-gray-100 py-4 px-4">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-4 items-center text-center will-change-transform will-change-opacity" data-aos="fade-up" data-aos-delay="100">

        <p className="text-gray-100 font-semibold">HumFlow</p>

        <p className="text-sm sm:text-lg leading-relaxed">
          Relaxing ambient sound mixer for work, sleep, and focus. Inspired by the idea of creating a calm environment with natural audio experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm" data-aos="fade-up" data-aos-delay="200">
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <span className=" sm:inline">|</span>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          <span className=" sm:inline">|</span>
          <a href="https://pixabay.com/" className="hover:text-blue-600 transition">Video / Sounds Credit</a>
          <span className="hidden sm:inline">|</span>
        </div>

        <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          Sounds mixed and played locally in your browser – nothing is uploaded. No login required.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm" data-aos="fade-up" data-aos-delay="400">
          <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 cursor-pointer">Twitter</a>
          <a target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 cursor-pointer">GitHub</a>
          <a className="hover:text-blue-500 cursor-pointer">Email</a>
        </div>

        <p className="text-[10px] text-gray-400" data-aos="fade-up" data-aos-delay="500">&copy; 2025 NatureSoundSpace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
