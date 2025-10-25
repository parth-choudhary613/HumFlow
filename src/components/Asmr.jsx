import React, { useEffect, Suspense } from "react";
import SplitText from "../pages/SplitText";
import Image1 from "../assets/asmr1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import InfiniteScroll from './InfiniteScroll';

const SustainabilitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);
const items = [
  { content: "Welcome to HumFlow – your ambient soundscape experience." },
  { content: <p>Dive into a world of calming loops, gentle rhythms, and immersive sound design crafted to keep you focused, relaxed and inspired.</p> },
  { content: "Create your own mix: vocals, keys, pads, field recordings." },
  { content: <p>Choose from curated presets or design your own sonic environment with drag-and-drop layers and real-time controls.</p> },
  { content: "Switch between day and night mode for a visual ambience that matches your mood." },
  { content: <p>Whether you’re working, unwinding, or exploring new creative ideas — HumFlow adapts to your flow.</p> },
  { content: "Seamless loop transitions and tempo sync keep everything aligned." },
  { content: <p>Integrate background video visuals with your sound mix to create a full multimedia experience within your browser.</p> },
  { content: "Optimised for mobile-first design and full responsiveness across all devices." },
  { content: <p>Lightweight build, efficient audio decoding, and intuitive UI ensure smooth performance even on low-power devices.</p> },
  { content: "Community-shared presets and upcoming collaborative features are on the roadmap." },
  { content: <p>Stay tuned for version updates, new modules, and deeper customisation coming soon.</p> }
];

  
  return (
    <section className="relative text-white px-4 sm:px-8 lg:px-16 py-12 will-change-transform will-change-opacity" data-aos="fade-up">
  

      {/* Foreground Content */}
      <div className="relative h-150 ">
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={3}
    autoplayDirection="up"
    pauseOnHover={true}
  />
</div>

      
    </section>
  );
};

export default SustainabilitySection;
