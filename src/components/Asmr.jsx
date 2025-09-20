import React from "react";
import plantImage from "../assets/parth.jpg"; // Use your exact reference image here

const SustainabilitySection = () => {
  return (
    <section className="backdrop-blur-sm text-white px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={plantImage}
            alt="Plant in Hands"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          {/* Heading */}
          <h2 className="text-12xl md:text-5xl tracking-wide opacity-90 mb-2 bungee-outline-regular">
            Let’s Drive Sustainability
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-green-100 mb-1">
            To Thrive on This Planet
          </h3>
          <p className="text-lg text-green-200 mb-10">
            Live in Harmony with Nature Every Day
          </p>

          {/* Timeline */}
          <div className="relative border-l border-green-600 pl-6 space-y-12">
            {/* 1 */}
            <div className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 bg-green-400 rounded-full"></span>
              <p className="text-green-200">
                There’s just something so special about the traditional ways of living in harmony with nature.
              </p>
            </div>
            {/* 2 */}
            <div className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 bg-green-400 rounded-full"></span>
              <p className="text-green-200">
                It’s truly inspiring, and that’s why we aspire to bring this wisdom to the modern world.
              </p>
            </div>
            {/* 3 */}
            <div className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 bg-green-400 rounded-full"></span>
              <p className="text-green-200">
                With every product we offer, from toothbrushes to tooth powders, we make made with love and care to protect both you and the planet.
              </p>
            </div>
            {/* 4 */}
            <div className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 bg-green-400 rounded-full"></span>
              <p className="text-green-200">
                We believe that by incorporating sustainable practices into our daily routines, we can all make a difference and live in harmony with nature.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SustainabilitySection;
