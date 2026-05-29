'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoader } from '@/components/LoaderContext';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);
  const { isIntroComplete } = useLoader();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (!isIntroComplete) {
        lenisRef.current.stop();
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
      } else {
        lenisRef.current.start();
        document.body.style.overflow = '';
        document.body.style.height = '';
      }
    }
  }, [isIntroComplete]);

  return lenisRef.current;
}
