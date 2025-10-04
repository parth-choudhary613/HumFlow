import React from "react";
import Plasma from "./Plasma";
import Image1 from "../assets/asmr1.png"; 
import SplitText from "../pages/SplitText";

const SustainabilitySection = () => {
  return (
    <section className="backdrop-blur-sm text-white px-4 sm:px-8 lg:px-16 py-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Plasma */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Plasma />

        {/* Right Text */}
        <div className="w-full lg:w-1/2 relative z-10">
          <SplitText
            text="Why ASMR ?"
            className="text-6xl md:text-7xl text-green-100 tropical-heading"
            delay={100}
            duration={3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={SustainabilitySection}
            />

          <h3 className="text-2xl md:text-3xl font-semibold text-green-100 mb-3">
            Autonomous Sensory Meridian Response{" "}
            <span className="text-green-300 tropical-heading text-6xl">(ASMR)</span>
          </h3>

          <p className="text-lg text-green-200 mb-10">
            ASMR, which stands for Autonomous Sensory Meridian Response, is a term for a tingling,
            calming sensation experienced in response to certain sounds, visuals, or touch. It's not
            a slang term but an acronym for a biological response to stimuli like whispering,
            crinkling, or slow, deliberate movements, which can induce feelings of relaxation and
            well-being in some people.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <img
                className="w-auto contrast-200 saturate-70"
                src={Image1}
                alt="ASMR Example"
                />
            </div>
          </div>
        </div>
      </div>
                </div>
    </section>
  );
};

export default SustainabilitySection;
