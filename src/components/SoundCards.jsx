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
    <div className="flex items-center justify-center ">
      <div
        className="w-80 h-96 rounded-xl bg-cover bg-center relative overflow-hidden "
      >
        <div className="absolute inset-0  backdrop-blur-xl rounded-xl flex items-center justify-center p-4 border-4 border-white shadow-xl/30">
          <div className="w-full h-80 bg-black/60 rounded-xl text-white p-1">
            <div className="">
                
              </div>
      <div style={{ backgroundImage: `url('https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-mountain-line-draft-decorative-elements-png-image_4236523.png')` }} className="w-auto h-40 rounded-lg bg-cover bg-center mx-auto mb-4 shadow-lg">
              <FaRegHeart className="text-gray-100 text-xl cursor-pointer" />
            </div>

            <div className=" my-5 flex flex-col items-center">
              <button
                onClick={togglePlay}
                className="w-10 h-10 border border-white rounded-full text-black flex items-center justify-center"
              >
                {isPlaying ? <FaPause size={14} color="white" /> : <FaPlay size={14} color="white" />}
              </button>
            </div>

            <div className="  flex flex-col items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-gray-50"
              />
              <span className="text-sm mt-1">{volume}</span>
            </div>

            <audio ref={audioRef} src="/assets/sample.mp3" preload="auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
