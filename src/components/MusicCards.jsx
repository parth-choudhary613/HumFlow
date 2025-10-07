import { useState, useRef, useEffect, Suspense, lazy } from "react";
import { FaPlay, FaPause, FaRegHeart, FaHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy-load audio dynamically
const LazyAudio = lazy(() => import("./LazyAudio"));

const MusicCard = ({ audioSrc, videoSrc, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [liked, setLiked] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  // Intersection Observer for lazy media
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Play/pause handling
  const togglePlay = () => {
    if (!isInView) return;
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
      ref={cardRef}
      className="sm:w-full max-w-[17rem] min-h-[22rem] rounded-xl relative overflow-hidden shadow-2xl will-change-transform will-change-opacity transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Video Background */}
      {isInView && (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-xl p-6 flex flex-col justify-between z-10 backdrop-blur-sm">
        {/* Thumbnail + Title + Like */}
        <div className="space-y-2">
          <div
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
            className="w-full h-28 bg-cover bg-center rounded-lg transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <h2 className="text-white font-semibold text-xl truncate">{title}</h2>
          <div>
            {liked ? (
              <FaHeart
                className="text-rose-500 text-2xl cursor-pointer transition-transform duration-200 hover:scale-125"
                onClick={() => setLiked(false)}
              />
            ) : (
              <FaRegHeart
                className="text-white text-2xl cursor-pointer transition-transform duration-200 hover:scale-125"
                onClick={() => setLiked(true)}
              />
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-2">
          <button
            onClick={togglePlay}
            className="w-12 h-12 border-4 border-white rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          >
            {isPlaying ? <FaPause size={14} color="white" /> : <FaPlay size={14} color="white" />}
          </button>
        </div>

        {/* Volume */}
        <div className="flex flex-col items-center mt-2">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full accent-white"
          />
          <span className="text-lg text-white">{volume}%</span>
        </div>

        {/* Lazy Audio */}
        {isInView && (
          <Suspense fallback={<div className="text-white text-sm">Loading Audio...</div>}>
            <LazyAudio ref={audioRef} src={audioSrc} volume={volume} loop />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
