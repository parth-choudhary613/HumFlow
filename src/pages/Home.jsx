import { useState } from "react";
import { FaPlay, FaPause, FaTrash, FaRegHeart } from "react-icons/fa";
import MusicCard from "../components/SoundCards";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <>
      <div className=" flex flex-col items-center justify-start text-white p-2">
        {/* Header Section */}
        <h1 className=" text-shadow-lg/30 text-6xl md:text-8xl sm:text-4xl font-bold text-gray-100 mt-20  text-center ">
          humflow
        </h1>
        <div className=" text-shadow-lg/30 text-lg text-gray-100  text-center">
          <h4>Flow with Hmmm...</h4>
        </div>

        {/* Player Section */}
        <div className="w-140 max-w-4xl rounded-xl py-1 px-2 flex flex-col items-center justify-center relative">
          {/* Top Buttons */}
          <div className="w-80 lg:w-full flex justify-between px-4 mb-6">
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaRegHeart className="text-xl" />
            </button>
            <button className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              <FaTrash className="text-xl" />
            </button>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="text-white text-6xl m-2 hover:scale-110 transition"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Bottom Buttons */}
          <div className="flex gap-4 pt-4">
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
