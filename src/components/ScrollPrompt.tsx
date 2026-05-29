'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLoader } from './LoaderContext';
import { Mouse } from 'lucide-react';

export function ScrollPrompt() {
  const { isIntroComplete } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIntroComplete && containerRef.current) {
      const tl = gsap.timeline();
      
      // Smooth entrance
      tl.fromTo(containerRef.current, 
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      );

      // Fade out after 1.5 seconds to clean up the UI
      tl.to(containerRef.current, {
        autoAlpha: 0,
        y: -10,
        duration: 1,
        ease: 'power2.in',
        delay: 1.5
      });
    }
  }, [isIntroComplete]);

  return (
    <div ref={containerRef} className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 opacity-0 invisible pointer-events-none">
      <Mouse className="w-5 h-5 text-white/50 animate-bounce" />
      <span className="text-white/50 font-mono text-xs tracking-[0.2em] uppercase">Scroll</span>
    </div>
  );
}
