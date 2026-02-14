'use client';

import { motion } from 'framer-motion';

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-pink-100">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <motion.h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-3 text-center"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Kandaaa 💘
        </motion.h1>

        <motion.p
          className="text-lg text-rose-600 mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A special something for my Valentine ✨
        </motion.p>

        <motion.button
          onClick={onStart}
          className="px-16 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-lg font-semibold rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Start 💝
        </motion.button>
      </div>
    </div>
  );
}
