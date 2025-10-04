import React, { useState, useRef } from "react";
import { moreData } from "../assets/moreData";
import { HiPlay, HiPause } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MoreCards = ({ alwaysShow = false }) => {
  const [playingItems, setPlayingItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [volumes, setVolumes] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]); // store user files
  const audioRefs = useRef({});
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handlePlayPause = (item) => {
    if (!audioRefs.current[item.id]) {
      audioRefs.current[item.id] = new Audio(item.audio);
      audioRefs.current[item.id].loop = true;
      audioRefs.current[item.id].volume = volumes[item.id] || 0.5;
    }

    if (playingItems.includes(item.id)) {
      audioRefs.current[item.id].pause();
      setPlayingItems((prev) => prev.filter((i) => i !== item.id));
    } else {
      audioRefs.current[item.id].play();
      setPlayingItems((prev) => [...prev, item.id]);
    }
  };

  const handleVolumeChange = (e, item) => {
    const value = parseFloat(e.target.value);
    setVolumes((prev) => ({ ...prev, [item.id]: value }));
    if (audioRefs.current[item.id]) {
      audioRefs.current[item.id].volume = value;
    }
  };

  // Add local file handler
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file, index) => ({
      id: `local-${Date.now()}-${index}`,
      title:"Added by you", // remove extension
      audio: URL.createObjectURL(file),
      thumbnail:
        "https://cdn-icons-png.flaticon.com/128/2912/2912048.png", // default music icon
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const allCards = [...moreData, ...uploadedFiles]; // merge built-in + uploaded

  if (!alwaysShow) {
    return (
      <div className="flex justify-center p-4">
        <button
          onClick={() => navigate("/moresounds")}
          className="w-86 lg:w-240 md:w-176 border border-[#1B5E20] text-white text-sm font-medium rounded-lg backdrop-blur-lg py-2 px-4 shadow-sm bg-transparent"
        >
          More Sounds
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      {/* Sound Cards */}
      <div className="mt-6 flex flex-col gap-3 w-86 lg:w-300 md:w-176">
        {allCards.map((item) => (
          <div
            key={item.id}
            className="border border-[#1B5E20] p-3 rounded-lg w-full mx-auto bg-white/5 backdrop-blur-md flex items-center gap-2"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-md object-cover"
            />

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center w-full">
              <div className="flex items-center gap-10 sm:gap-4 w-full sm:w-auto">
                <div
                  className={`flex gap-[2px] ${
                    playingItems.includes(item.id)
                      ? "animate-wave"
                      : "opacity-0"
                  }`}
                >
                  <div className="w-[3px] h-[12px] bg-green-400"></div>
                  <div className="w-[3px] h-[12px] bg-green-400"></div>
                  <div className="w-[3px] h-[12px] bg-green-400"></div>
                </div>

                <h3 className="text-white font-sm px-2 py-1">{item.title}</h3>
              </div>

              <div className="w-full flex justify-center sm:justify-center mt-2 sm:mt-0">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volumes[item.id] ?? 0.5}
                  onChange={(e) => handleVolumeChange(e, item)}
                  className="w-36 sm:w-48 accent-white/80 mx-auto"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handlePlayPause(item)}
                className="text-white flex items-center gap-2"
              >
                {playingItems.includes(item.id) ? (
                  <>
                    <HiPause className="h-6 w-6" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <HiPlay className="h-6 w-6" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>

              <button
                onClick={() => toggleFavorite(item.id)}
                className="text-white"
              >
                {favorites.includes(item.id) ? (
                  <FaHeart className="h-5 w-5 text-red-500" />
                ) : (
                  <FaRegHeart className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* File Upload Button */}
      <label className="w-86 lg:w-240 md:w-176 border border-[#1B5E20] text-white text-sm font-medium rounded-lg backdrop-blur-2xl py-2 px-4 shadow-sm bg-transparent mt-6 text-center cursor-pointer">
        Add Files
        <input
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="w-86 lg:w-240 md:w-176 border border-[#1B5E20] text-white text-sm font-medium rounded-lg backdrop-blur-lg py-2 px-4 shadow-sm bg-transparent mt-6"
      >
        ← Back
      </button>

      {/* Wave animation styles */}
      <style>{`
        @keyframes wave {
          0% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
          100% { transform: scaleY(0.3); }
        }
        .animate-wave div:nth-child(1) {
          animation: wave 1s infinite ease-in-out;
        }
        .animate-wave div:nth-child(2) {
          animation: wave 1s infinite ease-in-out .2s;
        }
        .animate-wave div:nth-child(3) {
          animation: wave 1s infinite ease-in-out .4s;
        }
      `}</style>
    </div>
  );
};

export default MoreCards;
