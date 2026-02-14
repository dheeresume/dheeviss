'use client';

import { motion } from 'framer-motion';

export default function FinalPage({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-pink-100">
      {/* Floating hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-30"
          initial={{ 
            y: '100vh', 
            x: Math.random() * 400,
          }}
          animate={{ 
            y: '-20vh',
            x: Math.random() * 400,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear'
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-6"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Forever & Always 💕
        </motion.h1>

        <motion.p
          className="text-lg text-rose-700 mb-4 max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Here's to more adventures, laughter, and love together
        </motion.p>

        <motion.p
          className="text-xl text-pink-600 font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Happy Valentine's Day, my Kandaaa! 🌸
        </motion.p>

        <motion.button
          onClick={onReplay}
          className="px-12 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-base font-semibold rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Replay 🔄
        </motion.button>
      </div>
    </div>
  );
}
