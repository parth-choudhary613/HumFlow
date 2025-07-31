import { useState, useRef } from "react";
import { FaPlay, FaPause, FaStar } from "react-icons/fa";

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
              <div style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/05/17/06/58/360_F_517065884_FvzSCVtlJ6OwDBE0MD8UxSnk7NsXWzdG.jpg')` }} className="w-16 h-16 bg-cover rounded-full">
                
              </div>
              <FaStar className="text-yellow-400 text-xl cursor-pointer" />
            </div>

            <div className="my-6 flex flex-col items-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
              </button>
            </div>

            <div className="flex flex-col items-center">
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
