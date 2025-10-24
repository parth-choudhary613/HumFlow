import { useState, useEffect, Suspense, lazy } from "react";
import { FaPlay, FaPause, FaTrash, FaRegHeart } from "react-icons/fa";
import SplitText from "./SplitText";
import cardData from "../assets/cardData"; // Import cardData to access card IDs

// Lazy load heavy components
const Soundcards = lazy(() => import("../components/SoundCards"));
const Extracards = lazy(() => import("../components/MoreCards"));
const ASMR = lazy(() => import("../components/Asmr"));

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIds, setPlayingIds] = useState([]); // Array of playing card IDs (allows multiple)
  const [globalCardId, setGlobalCardId] = useState(null); // ID of the card controlled by global button
  const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility
  const [hasShownPopup, setHasShownPopup] = useState(false); // Track if pop-up has been shown

  // Function to select a random card ID
  const getRandomCardId = () => {
    if (!cardData.length) return null;
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
  };

  const togglePlay = () => {
    if (isPlaying) {
      // Pause all sounds by clearing playingIds
      setPlayingIds([]);
      setGlobalCardId(null);
    } else {
      // Play: select a new random card and add to playingIds
      const cardId = getRandomCardId();
      if (cardId) {
        setGlobalCardId(cardId);
        setPlayingIds((prev) => [...new Set([...prev, cardId])]);
      }
    }
  };

  // Sync isPlaying with whether any card is playing
  useEffect(() => {
    setIsPlaying(playingIds.length > 0);
  }, [playingIds]);

  // ✅ Popup Logic (Fixed & Improved)
  useEffect(() => {
    if (playingIds.length > 0 && !hasShownPopup) {
      const showTimer = setTimeout(() => {
        setShowPopup(true);
        setHasShownPopup(true);

        // Hide after 4 seconds
        const hideTimer = setTimeout(() => {
          setShowPopup(false);
        }, 4000);

        return () => clearTimeout(hideTimer);
      }, 1000);

      return () => clearTimeout(showTimer);
    }
  }, [playingIds, hasShownPopup]);

  return (
    <>
      <div className="flex flex-col items-center justify-start text-white p-2">
        {/* Header Section */}
        <h1 className="text-8xl md:text-12xl sm:text-12xl mt-44 tropical-heading text-center">
          <SplitText
            text="HumFlow"
            draft="true"
            delay={100}
            duration={3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>

        <div className="text-shadow-lg/30 text-gray-100 md:text-2xl text-center">
          <h4>Flow with Hmmm...</h4>
        </div>

        {/* Player Section */}
        <div className="w-140 max-w-4xl rounded-xl py-6 px-4 flex flex-col items-center justify-center relative">
          {/* Top Buttons */}
          <div className="w-120 lg:w-full flex justify-between px-4 mb-8">
            <button className="p-5 border-3 border-[#1B5E20] rounded-full hover:bg-green-900 hover:text-white transition-all duration-700">
              <FaRegHeart className="lg:text-2xl md:text-4xl" />
            </button>
            <button className="p-5 border-3 border-[#1B5E20] rounded-full hover:bg-green-900 hover:text-white transition-all duration-700">
              <FaTrash className="lg:text-2xl md:text-4xl" />
            </button>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="text-white text-8xl mb-10 hover:scale-110 transition-all duration-500"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Bottom Buttons */}
          <div className="flex gap-4 pt-4">
            {["TIMERS", "MIXES", "SHARE"].map((label) => (
              <button
                key={label}
                className="px-7 py-3 border-3 border-[#1B5E20] lg:text-2sm md:sm:text-3xl rounded-4xl hover:bg-[#1B5E20] hover:text-white transition backdrop-blur-lg"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 🌟 Popup Notification */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-md animate-fade-in-out">
            <div className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#66BB6A] text-white px-10 py-8 rounded-3xl shadow-[0_0_60px_rgba(27,94,32,0.7)] border border-green-300/40 animate-float-up w-[90%] max-w-md text-center overflow-hidden transition-all duration-700">

              {/* Glowing rings */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute w-80 h-80 bg-green-400/30 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
                <div className="absolute w-60 h-60 bg-green-700/40 rounded-full blur-3xl animate-pulse-slow bottom-0 right-0"></div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full shadow-lg animate-bounce-slow">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 19V6l12-2v13l-12 2zm-3 0V6m3 0L6 9" />
                  </svg>
                </div>
              </div>

              {/* Text */}
              <h2 className="text-2xl font-bold mb-2 tracking-wide animate-glow">
               You can play multiple sounds at the same time.
              </h2>
              
            </div>
          </div>
        )}
      </div>

      {/* Lazy-loaded sections */}
      <Suspense fallback={<div className="text-center text-white p-20">Loading Sounds...</div>}>
        <Soundcards playingIds={playingIds} setPlayingIds={setPlayingIds} />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white p-20">Loading More Sounds...</div>}>
        <Extracards />
        <Suspense fallback={<div className="text-center text-white p-20">Loading ASMR Section...</div>}>
          <ASMR />
        </Suspense>
      </Suspense>
    </>
  );
};

export default Home;
