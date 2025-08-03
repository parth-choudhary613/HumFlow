import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRegHeart } from "react-icons/fa";

const MusicCard = ({ audioSrc, videoSrc, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      videoRef.current.pause();
    } else {
      audioRef.current.play();
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol / 100;
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      videoRef.current?.pause();
    };
  }, []);

  return (
    <div className="w-72 sm:w-80 md:w-96 h-[28rem] sm:h-96 rounded-xl relative overflow-hidden shadow-lg">
      {/* Background video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 object-cover w-full h-full"
        muted
        loop="true"
      />

      {/* Glass UI */}
      <div className="absolute inset-0 bg-black/20 rounded-xl p-4 border-4 border-white flex flex-col justify-between z-10">
        <div>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
          ></div>
          <h2 className="text-white font-semibold text-lg mb-2">{title}</h2>
          <FaRegHeart className="text-gray-100 text-xl cursor-pointer" />
        </div>

        <div className="my-4 flex justify-center">
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
          <span className="text-sm mt-1 text-white">{volume}%</span>
        </div>

        <audio ref={audioRef} src={audioSrc} preload="auto" />
      </div>
    </div>
  );
};

export default MusicCard;
