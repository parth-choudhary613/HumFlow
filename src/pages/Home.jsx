import { useState, Suspense, lazy } from "react";
import { FaPlay, FaPause, FaTrash, FaRegHeart } from "react-icons/fa";
import SplitText from "./SplitText";

// Lazy load heavy components
const MusicCard = lazy(() => import("../components/SoundCards"));
const Extracards = lazy(() => import("../components/MoreCards"));
const ASMR = lazy(() => import("../components/Asmr"));

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <>
      <div className="flex flex-col items-center justify-start text-white p-2">
        {/* Header Section */}
        <h1 className="text-8xl md:text-12xl sm:text-12xl mt-28 tropical-heading text-center">
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
      </div>

      {/* Lazy-loaded sections with Suspense */}
      <Suspense fallback={<div className="text-center text-white p-20">Loading Sounds...</div>}>
        <MusicCard />
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
