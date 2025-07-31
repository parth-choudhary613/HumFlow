import { useState } from "react";
import { FaPlay, FaPause, FaTrash, FaWaveSquare } from "react-icons/fa";
import MusicCard from "../components/SoundCards";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <>
      <div className=" text-shadow-orange-800 flex flex-col items-center justify-start min-h-screen  text-white p-10">
        {/* Header Section */}
        <h1 className=" text-shadow-lg/30 text-6xl md:text-9xl font-bold text-gray-100 mt-40 mb-4 text-center ">
          humflow
        </h1>
        <p className=" text-shadow-lg/30 text-lg text-gray-100 mb-12 text-center">
          This is the home page. Explore our content!
        </p>

        {/* Player Section */}
        <div className="w-full max-w-4xl rounded-xl py-16 px-4 flex flex-col items-center justify-center relative">
          {/* Top Buttons */}
          <div className="w-full flex justify-between px-6 mb-16">
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaWaveSquare className="text-xl" />
            </button>
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaTrash className="text-xl" />
            </button>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="text-white text-7xl mb-16 hover:scale-110 transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Bottom Buttons */}
          <div className="flex gap-4">
            {["TIMERS", "MIXES", "SHARE"].map((label) => (
              <button
                key={label}
                className="px-5 py-2 border border-white rounded hover:bg-white hover:text-black transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      < MusicCard />
    </>
  );
};

export default Home;
