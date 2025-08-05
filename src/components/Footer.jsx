import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-sm text-sm text-gray-100 py-4 px-4  text-sm">
      <div className="max-w-4xl mx-auto flex flex-col gap-4 items-center text-center">

        <p className="text-gray-100 font-semibold">
          NatureSoundSpace
        </p>
        <p className="text-sm leading-relaxed">
          Relaxing ambient sound mixer for work, sleep, and focus. Inspired by the idea of creating a calm environment with natural audio experiences.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <span className=" sm:inline">|</span>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          <span className=" sm:inline">|</span>
          <a href="https://pixabay.com/" className="hover:text-blue-600 transition">Video / Sounds Credit</a>
          <span className="hidden sm:inline">|</span>
           </div>

        {/* Extra Info */}
        <p className="text-xs leading-relaxed">
          Sounds mixed and played locally in your browser – nothing is uploaded. No login required.
        </p>

    

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm ">
          <a
          
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer"
          >
            Twitter
          </a>
          <a
          
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer"
          >
            GitHub
          </a>
          <a className="hover:text-blue-500 cursor-pointer">
            Email
          </a>
        </div>

        <p className="text-[10px] text-gray-400">&copy; 2025 NatureSoundSpace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
