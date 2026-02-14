'use client';

import { motion } from 'framer-motion';

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300">
      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{ y: '100vh', x: Math.random() * 400, opacity: 0.6 }}
          animate={{ 
            y: '-10vh',
            x: Math.random() * 400,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
        >
          {['💕', '💖', '✨', '🌸'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-pink-600 mb-4 text-center"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Kandaaa 💘
        </motion.h1>

        <motion.p
          className="text-xl text-purple-600 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A special something for my Valentine ✨
        </motion.p>

        <motion.button
          onClick={onStart}
          className="px-12 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xl font-semibold rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Start 💝
        </motion.button>
      </div>
    </div>
  );
}
