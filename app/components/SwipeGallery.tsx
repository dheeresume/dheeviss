'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/ai_generated (2).jpg',
  '/images/real (4).jpg',
  '/images/ai_generated (1).jpg',
  '/images/real (1).jpg',
  '/images/ai_generated (3).jpg',
  '/images/real (2).jpg',
  '/images/ai_generated (4).jpg',
  '/images/real (3).jpg',
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
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">


      {/* Image card */}
      <div className="flex items-center justify-center h-full px-4 py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-[400px] aspect-[3/4] cursor-grab active:cursor-grabbing"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 rounded-3xl p-[3px]">
              <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden">
                <Image
                  src={images[currentIndex]}
                  alt={`Memory ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-pink-500 w-8'
                : 'bg-pink-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
