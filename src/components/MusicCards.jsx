import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRegHeart, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MusicCard = ({ audioSrc, thumbnail, title, id, playingIds, setPlayingIds }) => {
  const [volume, setVolume] = useState(100);
  const [liked, setLiked] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // Initialize AOS and cleanup on unmount
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
    return () => {
      audioRef.current?.pause();
      videoRef.current?.pause();
    };
  }, []);

  // Sync audio playback with playingIds
  useEffect(() => {
    if (playingIds.includes(id)) {
      audioRef.current?.play();
      videoRef.current?.play();
    } else {
      audioRef.current?.pause();
      videoRef.current?.pause();
    }
  }, [playingIds, id]);

  const togglePlay = () => {
    setPlayingIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleVolumeChange = (e) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol / 100;
  };

  return (
    <div
      className="w-80 sm:w-110 sm:h-130 justify-center rounded-xl will-change-transform will-change-opacity relative overflow-hidden"
    >
      <div className="absolute inset-0 rounded-xl p-10 flex flex-col justify-between">
        <div>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className="w-auto h-32 sm:h-60 bg-cover bg-center rounded-lg"
            loading="lazy"
          ></div>

          <h2 className="text-white font-bold text-3xl">{title}</h2>

          {liked ? (
            <FaHeart
              className="text-rose-900 sm:text-2xl text-2xl cursor-pointer transition-all duration-200 hover:scale-125"
              onClick={() => setLiked(false)}
            />
          ) : (
            <FaRegHeart
              className="text-gray-100 text-2xl sm:text-2xl cursor-pointer transition-all duration-200 hover:scale-125"
              onClick={() => setLiked(true)}
            />
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="w-11 h-11 sm:w-20 sm:h-20 border-4 border-white sm:text-3xl rounded-full flex items-center justify-center"
          >
            {playingIds.includes(id) ? <FaPause size={28} color="white" /> : <FaPlay size={28} color="white" />}
          </button>
        </div>

        <div className="flex flex-col items-center m-2">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full custom-slider mt-4 accent-white"
            style={{ "--value": `${volume}%` }}
          />
          <span className="text-2xl text-white mt-2">{volume}%</span>
        </div>

        <audio ref={audioRef} src={audioSrc} preload="auto" loop />
      </div>
    </div>
  );
};

export default MusicCard;