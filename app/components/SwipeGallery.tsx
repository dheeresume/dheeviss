'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const images = [
  'https://i.ibb.co/ns9NfypR/ai-generated-2.jpg',
  'https://i.ibb.co/BKG4ZtXz/real-4.jpg',
  'https://i.ibb.co/rRBbFPGh/ai-generated-1.jpg',
  'https://i.ibb.co/jZhyjY0m/real-1.jpg',
  'https://i.ibb.co/fGN3tqdd/ai-generated-3.jpg',
  'https://i.ibb.co/WvLP2sn5/real-2.jpg',
  'https://i.ibb.co/9HV2m1fK/ai-generated-4.jpg',
  'https://i.ibb.co/jPq8zV0b/real-3.jpg',
];

export default function SwipeGallery({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      // Swipe right - previous
      if (currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex(currentIndex - 1);
      }
    } else if (info.offset.x < -100) {
      // Swipe left - next
      if (currentIndex < images.length - 1) {
        setDirection(1);
        setCurrentIndex(currentIndex + 1);
      } else {
        onComplete();
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100">
      {/* Swipe hint */}
      <AnimatePresence>
        {showHint && currentIndex === 0 && (
          <motion.div
            className="absolute top-1/2 left-8 z-20 text-pink-500 text-lg font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            ← Swipe
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image card */}
      <div className="flex items-center justify-center h-full p-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-md h-[70vh] cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-pink-500 w-8'
                : 'bg-pink-300'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-8 left-0 right-0 text-center text-pink-600 font-semibold text-lg z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
