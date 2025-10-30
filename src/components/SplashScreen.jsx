import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Always show on each load/refresh; auto-hide after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowSplash(false);
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 max-w-sm mx-4 text-center shadow-2xl"
          >
            {/* Logo with Animation */}
            <motion.div
              initial={{ scale: 0.8, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto rounded-2xl p-1 border-8 border-gray-200 shadow-[0_0_20px_6px_rgba(255,255,255,0.75)]">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900/80">
                  <img
                    src="/team/pp.png"
                    alt="Planning Pros & Consultants"
                    className="w-full h-full object-contain scale-130"
                  />
                </div>
              </div>
            </motion.div>

            {/* Loading Text with Animated Dots */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center justify-center"
            >
              {/* Static Loading Text */}
              <motion.span
                className="text-lg md:text-xl text-white font-medium gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading
              </motion.span>

              {/* Animated Dots */}
              <div className="flex ml-1">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    className="text-lg md:text-xl text-white font-medium gradient-text"
                    animate={{
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    .
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;