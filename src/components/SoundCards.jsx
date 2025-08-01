// MusicCard.jsx
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
    <div className="w-72 sm:w-80 md:w-96 max-w-full h-[28rem] sm:h-96 rounded-xl relative overflow-hidden">
      <div
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1146660389/photo/fani-the-cyclone.jpg?s=612x612&w=0&k=20&c=NgkOAhWnisz5mZLv5vVrZPKvjEWutUpzLlxnRZr8MP8=')`,
        }}
        className="w-full h-full rounded-xl bg-cover bg-center shadow-lg"
      ></div>

      <div className=" absolute inset-0 backdrop-blur-sm rounded-xl flex items-center justify-center p-6 border-4 border-white">
        <div className="w-80 h-full bg-black/60 rounded-xl text-white p-3 flex flex-col justify-between">
          <div>
            <div
              style={{
                backgroundImage: `url('https://freesvg.org/img/raincloud-bw.png')`,
              }}
              className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
            ></div>
            <FaRegHeart className="text-gray-100 text-xl cursor-pointer" />
          </div>

          <div className="my-6 flex justify-center">
            <button
              onClick={togglePlay}
              className="w-12 h-12 border border-white rounded-full flex items-center justify-center"
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
  );
};

export default MusicCard;
