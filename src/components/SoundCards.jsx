import { useState, useRef } from "react";
import { FaPlay, FaPause, FaRegHeart } from "react-icons/fa";

const MusicCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    audioRef.current.volume = vol / 100;
  };

  return (
    <div className="flex items-center justify-center pb-14">
      <div className="w-72  sm:w-80 md:w-96 max-w-full h-[28rem] sm:h-96 rounded-xl relative overflow-hidden">
        <div
          style={{
            backgroundImage: `url('https://seed2plant.in/cdn/shop/files/BougainvilleaPurple_PaperFlower_FloweringLivePlant-seed2plant1.png?v=1705749579')`,
          }}
          className="w-full h-full rounded-xl bg-cover bg-center shadow-lg"
        ></div>

        <div className="  absolute inset-0 backdrop-blur-xl rounded-xl flex items-center justify-center p-4 border-4 border-white shadow-xl">
          <div className="w-full h-[85%] bg-black/60 rounded-xl text-white p-3 flex flex-col justify-between">
            <div>
              <div
                style={{
                  backgroundImage: `url('https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-mountain-line-draft-decorative-elements-png-image_4236523.png')`,
                }}
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
              ></div>
              <FaRegHeart className="text-gray-100 text-xl cursor-pointer" />
            </div>

            <div className="my-6 flex justify-center">
              <button
                onClick={togglePlay}
                className="w-12 h-12 border border-white rounded-full text-black flex items-center justify-center"
              >
                {isPlaying ? (
                  <FaPause size={16} color="white" />
                ) : (
                  <FaPlay size={16} color="white" />
                )}
              </button>
            </div>

            <div className="flex flex-col items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-white"
              />
              <span className="text-sm mt-1">{volume}%</span>
            </div>

            <audio ref={audioRef} src="/assets/sample.mp3" preload="auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
