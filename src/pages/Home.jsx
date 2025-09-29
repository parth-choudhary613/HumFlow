import { useState } from "react";
import { FaPlay, FaPause, FaTrash, FaRegHeart } from "react-icons/fa";
import SoundCard from "../components/SoundCards";
import Extracards from "../components/MoreCards"
import ASMR from "../components/Asmr";
import SplitText from "./SplitText";
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <>
      <div className=" flex flex-col items-center justify-start text-white p-2">
        {/* Header Section */}
        <h1 className=" text-8xl md:text-10xl sm:text-8xl text-[#E0E0E0] mt-28 tropical-heading text-center ">
          <SplitText
  text="HumFlow"
  delay={100}
  duration={3}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={Home}
/>
        </h1>
        <div className=" text-shadow-lg/30 text-lg text-gray-100  text-center">
          <h4>Flow with Hmmm...</h4>
        </div>

        {/* Player Section */}
        <div className="w-140 max-w-4xl rounded-xl py-1 px-2 flex flex-col items-center justify-center relative">
          {/* Top Buttons */}
          <div className="w-80 lg:w-full flex justify-between px-4 mb-6">
            <button className="p-3 border border-[#1B5E20] rounded-full hover:bg-white hover:text-black transition">
              <FaRegHeart className="text-xl" />
            </button>
            <button className="p-3 border border-[#1B5E20] rounded-full hover:bg-white hover:text-black transition">
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
                className="px-5 py-2 border border-[#1B5E20] rounded-3xl hover:bg-[#1B5E20] hover:text-white transition  backdrop-blur-sm"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
      < SoundCard />
      <Extracards />  
      <ASMR />
    </>
  );
};

export default Home;
