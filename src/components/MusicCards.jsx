import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRegHeart, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MusicCard = ({ audioSrc, videoSrc, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      videoRef.current?.pause();
    } else {
      audioRef.current?.play();
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const vol = parseInt(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol / 100;
  };

  return (
    <div
      className="sm:w-full max-w-[17rem] min-h-[22rem] rounded-xl relative overflow-hidden shadow-lg will-change-transform will-change-opacity"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Lazy-loaded video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/30 rounded-xl p-10 flex flex-col justify-between z-10">
        <div>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className="w-full h-26 bg-cover bg-center rounded-lg"
            loading="lazy"
          ></div>

          <h2 className="text-white font-semibold text-2xl mt-1 truncate">{title}</h2>

          {liked ? (
            <FaHeart
              className="text-rose-900 text-2xl cursor-pointer mt-1 transition-all duration-200 hover:scale-125"
              onClick={() => setLiked(false)}
            />
          ) : (
            <FaRegHeart
              className="text-gray-100 text-2xl cursor-pointer mt-1 transition-all duration-200 hover:scale-125"
              onClick={() => setLiked(true)}
            />
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="w-11 h-11 border-4 border-white rounded-full flex items-center justify-center"
          >
            {isPlaying ? <FaPause size={12} color="white" /> : <FaPlay size={12} color="white" />}
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
          <span className="text-4lg text-white">{volume}%</span>
        </div>

        <audio ref={audioRef} src={audioSrc} preload="auto" loop />
      </div>
    </div>
  );
};

export default MusicCard;
