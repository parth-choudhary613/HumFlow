import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg text-center text-sm text-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-4">

        <p>
          <strong className="text-gray-100">NatureSoundSpace</strong> – Relaxing ambient sound mixer for work, sleep, and focus. Inspired by the idea of creating a calm environment with natural audio experiences.
        </p>

        <p className="space-x-3">
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <span>|</span>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          <span>|</span>
          <a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-blue-600 transition">Terms of Use</a>
          <span>|</span>
          <a href="/credits" className="hover:text-blue-600 transition">Credits</a>
        </p>

        <p>
          Sounds mixed and played locally in your browser – nothing is uploaded. No login required.
        </p>

        <p>
          Built with <span className="text-red-500">❤️</span> by <span className="font-medium">[Your Name or Brand]</span> | Inspired by <a href="https://asoftmurmur.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">A Soft Murmur</a>
        </p>

        <p className="space-x-4">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
          <a href="mailto:youremail@example.com" className="hover:text-blue-500">Email</a>
        </p>

        <p className="text-xs text-gray-400">&copy; 2025 NatureSoundSpace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
