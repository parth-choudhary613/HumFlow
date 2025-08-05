// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Morecard from './components/MoreCards.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlayed App Content */}
      <div className="overlay-content">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Morecard/>
        <Footer />
      </div>
    </div>
  );
}

console.log("app running running");
export default App;
