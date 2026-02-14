'use client';

import { motion } from 'framer-motion';

export default function FinalPage({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-200 via-pink-200 to-purple-300">
      {/* Floating hearts from bottom */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{ 
            y: '100vh', 
            x: Math.random() * 400,
            opacity: 0.8,
            rotate: 0
          }}
          animate={{ 
            y: '-20vh',
            x: Math.random() * 400,
            rotate: 360
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut'
          }}
        >
          {['💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-pink-600 mb-6"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Forever & Always 💕
        </motion.h1>

        <motion.p
          className="text-xl text-purple-700 mb-6 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Here's to more adventures, laughter, and love together
        </motion.p>

        <motion.p
          className="text-2xl text-pink-600 font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Happy Valentine's Day, my Kandaaa! 🌸
        </motion.p>

        <motion.button
          onClick={onReplay}
          className="px-10 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-lg font-semibold rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Replay 🔄
        </motion.button>
      </div>
    </div>
  );
}
