import { useState } from "react";

const SoundCard = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-4 rounded-2xl w-28 sm:w-32 transition duration-300 hover:bg-white/20">
      {/* ✅ Proper usage of Icon */}
      <div className="text-3xl mb-2">
        <Icon />
      </div>
      <p className="text-white text-sm font-semibold mb-2">{label}</p>
      <input
        type="range"
        min="0"
        max="100"
        className="w-full accent-white"
      />
    </div>
  );
};

export default SoundCard;
