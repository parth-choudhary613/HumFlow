import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeDialog from "./components/WelcomeDialog";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const MoreSoundsPage = lazy(() => import("./pages/MoreSoundsPage.jsx"));

function App() {
  const location = useLocation();

  return (
    <div className="app-container relative">
      <img
        src="/HumFlow/background.jpg"
        alt="Background"
        className="bg-video will-change-transform"
        loading="lazy"
      />
      <WelcomeDialog />

      <div className="overlay-content">
        <Navbar />

        <main className="main-content">
          <Suspense
            fallback={
              <div className="text-center text-white p-20">Loading Page...</div>
            }
          >
            {/* AnimatePresence allows exit/enter animations */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/moresounds" element={<MoreSoundsPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
