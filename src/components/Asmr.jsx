import React from "react";
import Plasma from "./Plasma";
import Image1 from "../assets/asmr1.png"; 
import SplitText from "../pages/SplitText";

const SustainabilitySection = () => {
  return (
    <section className="relative text-white px-4 sm:px-8 lg:px-16 py-12">
      {/* Plasma Background */}
      <div className="absolute inset-0 z-0">
        <Plasma
          colors={['#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center lg:flex-row lg:text-left lg:items-start gap-12 relative z-10">
        
        {/* Right Text */}
        <div className="w-full lg:w-3/4 xl:w-1/2 flex flex-col items-center lg:items-start">
          <SplitText
            text="Why ASMR ?"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-100 tropical-heading mb-6"
            delay={100}
            duration={3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-100 mb-4">
            Autonomous Sensory Meridian Response{" "}
            <span className="block sm:inline text-green-300 tropical-heading text-4xl sm:text-5xl md:text-6xl">
              (ASMR)
            </span>
          </h3>

          <p className="text-base sm:text-lg text-green-200 mb-8 max-w-2xl">
            ASMR, which stands for Autonomous Sensory Meridian Response, is a term for a tingling,
            calming sensation experienced in response to certain sounds, visuals, or touch.
          </p>

          <div className="flex justify-center lg:justify-start">
            <img
              className="w-82 sm:w-64 md:w-72 lg:w-80 contrast-200 saturate-70 rounded-lg"
              src={Image1}
              alt="ASMR Example"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
