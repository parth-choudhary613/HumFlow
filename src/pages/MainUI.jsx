import { useState } from "react";
import { FaPlay, FaPause, FaTrash, FaWaveSquare } from "react-icons/fa";

const MainUI = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Top Icons */}
      <div className="absolute top-6 left-6">
        <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          <FaWaveSquare className="text-xl" />
        </button>
      </div>
      <div className="absolute top-6 right-6">
        <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          <FaTrash className="text-xl" />
        </button>
      </div>

      {/* Center Play Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={togglePlay}
          className="text-white text-7xl hover:scale-110 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        {["TIMERS", "MIXES", "SHARE"].map((label) => (
          <button
            key={label}
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainUI;
