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
    const audio = audioRef.current;

    const handleEnded = () => {
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    };

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
        audio.pause();
        videoRef.current?.pause();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[20rem] min-h-[26rem] sm:min-h-[24rem] rounded-xl relative overflow-hidden shadow-lg glassneurophism">
      {/* Background video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
      />

      {/* Glass UI overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-xl p-4 flex flex-col justify-between z-10">
        <div>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className="w-full h-40 bg-cover bg-center rounded-lg"
          ></div>
          <h2 className="text-white font-semibold text-lg mt-2 truncate">{title}</h2>
          <FaRegHeart className="text-gray-100 text-xl cursor-pointer mt-1" />
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
