import React, { useEffect, Suspense } from "react";
import SplitText from "../pages/SplitText";
import Image1 from "../assets/asmr1.png";
import AOS from "aos";
import "aos/dist/aos.css";



const SustainabilitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <section className="relative text-white px-4 sm:px-8 lg:px-16 py-12 will-change-transform will-change-opacity" data-aos="fade-up">
  

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center lg:flex-row lg:text-left lg:items-start gap-12 relative z-10">
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
            <span className="block sm:inline text-green-300 tropical-heading text-4xl sm:text-5xl md:text-6xl">(ASMR)</span>
          </h3>

          <p className="text-2xl text-green-200 mb-8">
            ASMR, which stands for Autonomous Sensory Meridian Response, is a term for a tingling,
            calming sensation experienced in response to certain sounds, visuals, or touch.
          </p>

          <div className="flex justify-center lg:justify-start">
            <img
              src={Image1}
              alt="ASMR Example"
              loading="lazy"
              className="w-82 sm:w-64 md:w-72 lg:w-80 contrast-200 saturate-70 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
