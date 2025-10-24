import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "/assets/headphones1.png"; // Make sure this path is correct!

// The WelcomeDialog component (updated with green gradient)
const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show the dialog on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500); // Small delay
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="p-6 rounded-3xl shadow-2xl max-w-sm text-center relative w-full
                       bg-gradient-to-br from-green-700 via-emerald-800 to-gray-900
                       text-white overflow-hidden" // --- GREEN GRADIENT ---
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 260, damping: 20 },
            }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
          >
            {/* Pulsating background circle for visual interest */}
            <motion.div
              className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [360, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image Section */}
            <motion.div
              className="h-52 w-full mb-6 flex justify-center items-center relative z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
            >
              <img
                src={Image1}
                alt="Fancy Headphones"
                className="h-full object-contain drop-shadow-lg"
              />
            </motion.div>

            <h2 className="text-3xl font-extrabold mb-3 relative z-10">
              Welcome!
            </h2>
            <p className="mb-8 text-lg px-2 relative z-10">
              🎧 <span className="font-bold">Use headphones</span> for a mind-blowing audio journey!
            </p>

            <motion.button
              onClick={handleClose}
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg
                         hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-4
                         focus:ring-green-500 focus:ring-opacity-50 relative z-10" // --- UPDATED COLORS ---
              whileHover={{ scale: 1.05, boxShadow: "0 0px 25px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
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