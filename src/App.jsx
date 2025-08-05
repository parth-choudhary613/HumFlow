import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MoreCard from "./components/MoreCards";
import MoreSoundsPage from "./pages/MoreSoundsPage";

import './App.css';

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/moresounds" element={<MoreSoundsPage />} />
          </Routes>
        </main>
        <MoreCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
