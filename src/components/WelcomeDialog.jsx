import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import HeadphonesAnimation from "../assets/Headphones.json";

const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <motion.div
            className="p-6 rounded-3xl shadow-2xl max-w-sm text-center relative w-full
                       bg-gradient-to-br from-green-700 via-emerald-800 to-gray-900
                       text-white overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 60 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 25,
                mass: 0.8,
              },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              y: 60,
              transition: { duration: 0.3 },
            }}
          >
            {/* Smooth pulsating circles */}
            <motion.div
              className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.55, 0.25],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.55, 0.25],
                rotate: [360, 0, 360],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Lottie Illustration */}
            <motion.div
              className="h-52 w-full mb-6 flex justify-center items-center relative z-10"
              initial={{ y: -30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3, type: "spring", stiffness: 100, damping: 20 },
              }}
            >
              <Player
                autoplay
                loop
                keepLastFrame
                src={HeadphonesAnimation}
                style={{ height: "208px", width: "100%" }}
                speed={0.8} // slower, smoother playback
              />
            </motion.div>

            <h2
              className="text-3xl font-extrabold mb-3 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.4, duration: 0.6 } }}
            >
              Welcome!
            </h2>
            <p
              className="mb-8 text-lg px-2 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
            >
               <span>Use headphones</span> for immersive audio experience!
            </p>

            <motion.button
              onClick={handleClose}
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg
                         hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-4
                         focus:ring-green-500 focus:ring-opacity-50 relative z-10"
              whileHover={{ scale: 1.07, boxShadow: "0 10px 35px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Dive In
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeDialog;
