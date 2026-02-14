'use client';

import { useState } from 'react';
import LandingPage from './components/LandingPage';
import SwipeGallery from './components/SwipeGallery';
import FinalPage from './components/FinalPage';

export default function Home() {
  const [stage, setStage] = useState<'landing' | 'gallery' | 'final'>('landing');

  return (
    <main className="min-h-screen overflow-hidden">
      {stage === 'landing' && <LandingPage onStart={() => setStage('gallery')} />}
      {stage === 'gallery' && <SwipeGallery onComplete={() => setStage('final')} />}
      {stage === 'final' && <FinalPage onReplay={() => setStage('gallery')} />}
    </main>
  );
}
