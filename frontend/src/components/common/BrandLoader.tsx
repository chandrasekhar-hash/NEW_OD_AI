import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6s smooth cinematic loader
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F1E9] text-[#291D29]"
      >
        {/* Subtle background ambient glow in Champagne and Dusty Rose */}
        <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-champagne-200/25 via-rose-dusty/15 to-bronze-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col items-center text-center px-4">
          {/* Animated Emblem */}
          <div className="relative w-20 h-20 mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <motion.ellipse
                cx="50"
                cy="50"
                rx="38"
                ry="18"
                transform="rotate(-28 50 50)"
                stroke="#AD784B"
                strokeWidth="3"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="16"
                fill="#291D29"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="5"
                fill="#AD784B"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              {/* Satellite node */}
              <motion.circle
                cx="78"
                cy="35"
                r="4.5"
                fill="#AD784B"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </svg>
          </div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-plum">
              OD AI HUB
            </h1>
            <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-mauve-deep mt-1">
              LEARN • BUILD • INNOVATE • SCALE
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-48 sm:w-56 mt-8">
            <div className="h-1 w-full bg-champagne-200/60 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-bronze-400 via-rose-dusty to-bronze-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2.5 text-[10px] text-mauve-deep font-mono">
              <span>BERHAMPUR • ODISHA</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
