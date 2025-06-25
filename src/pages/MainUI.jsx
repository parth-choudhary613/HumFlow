import { useState } from "react";
import { FaPlay, FaPause, FaTrash, FaWaveSquare } from "react-icons/fa";
import SoundCard from "../components/SoundCard"; // ✅ correct component name

import {
  WiRain,
  WiThunderstorm,
  WiStrongWind,
} from "react-icons/wi";
import {
  GiFire,
  GiWaveCrest,
  GiBirdTwitter,
  GiCricket,
  GiCoffeeCup,
  GiSingingBowl,
  GiTv,
} from "react-icons/gi";

const soundOptions = [
  { label: "Rain", icon: WiRain },
  { label: "Thunder", icon: WiThunderstorm },
  { label: "Waves", icon: GiWaveCrest },
  { label: "Wind", icon: WiStrongWind },
  { label: "Fire", icon: GiFire },
  { label: "Birds", icon: GiBirdTwitter },
  { label: "Crickets", icon: GiCricket },
  { label: "Coffee shop", icon: GiCoffeeCup },
  { label: "Singing Bowl", icon: GiSingingBowl },
  { label: "White noise", icon: GiTv },
];

const MainUI = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">

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

      {/* Sound Cards Grid */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 mt-10 w-full px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {soundOptions.map((sound, index) => (
            <SoundCard key={index} icon={sound.icon} label={sound.label} />
          ))}
        </div>
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
