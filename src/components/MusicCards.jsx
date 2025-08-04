import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaRegHeart, FaHeart  } from "react-icons/fa";

const MusicCard = ({ audioSrc, videoSrc, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

const [liked, setLiked] = useState(false);

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
    <>
 <div className="w-35 max-w-[11.5rem] min-h-[16rem] sm:min-h-[15rem] rounded-xl relative overflow-hidden shadow-lg">
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
  <div className="absolute inset-0 bg-black/30 rounded-xl p-2.5 flex flex-col justify-between z-10">
    <div>
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className="w-full h-24 bg-cover bg-center rounded-lg"
      ></div>
      <h2 className="text-white font-semibold text-xs mt-1 truncate">{title}</h2>

      {liked ? (
        <FaHeart
          className="text-rose-900 text-base cursor-pointer mt-1 transition-all duration-200 hover:scale-125"
          onClick={() => setLiked(false)}
        />
      ) : (
        <FaRegHeart
          className="text-gray-100 text-base cursor-pointer mt-1 transition-all duration-200 hover:scale-125"
          onClick={() => setLiked(true)}
        />
      )}
    </div>

    <div className="my-2 flex justify-center">
      <button
        onClick={togglePlay}
        className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
      >
        {isPlaying ? (
          <FaPause size={12} color="white" />
        ) : (
          <FaPlay size={12} color="white" />
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
      <span className="text-[0.65rem] mt-1 text-white">{volume}%</span>
    </div>

    <audio ref={audioRef} src={audioSrc} preload="auto" loop />
  </div>
</div>

    </>
  );
};

export default MusicCard;
