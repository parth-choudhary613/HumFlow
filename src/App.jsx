import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MoreSoundsPage from "./pages/MoreSoundsPage";

import './App.css';

function App() {
  return (
    <div className="app-container">
      <img src='/HumFlow/background.jpg' alt='Background' className='bg-video' />

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
