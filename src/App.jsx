import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const MoreSoundsPage = lazy(() => import('./pages/MoreSoundsPage.jsx'));

function App() {
  return (
    <div className="app-container">
      <img
        src="/HumFlow/background.jpg"
        alt="Background"
        className="bg-video will-change-transform"
        loading="lazy"
      />

      <div className="overlay-content">
        <Navbar />

        <main className="main-content">
          <Suspense fallback={<div className="text-center text-white p-20">Loading Page...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/moresounds" element={<MoreSoundsPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
