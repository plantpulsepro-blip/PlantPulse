'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLoader } from './LoaderContext';

export function IntroLoader() {
  const { progress, isFramesLoaded, isIntroComplete, setIntroComplete } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  
  const [phase, setPhase] = useState(0);
  const hasStartedPhase2 = useRef(false);

  useEffect(() => {
    let masterTl: gsap.core.Timeline;

    if (phase === 0) {
      masterTl = gsap.timeline({
        onComplete: () => setPhase(1)
      });

      masterTl.to(dotRef.current, {
        scaleX: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.out'
      })
      .to(lineContainerRef.current, {
        width: '300px',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.inOut'
      });
    }

    return () => {
      if (masterTl) masterTl.kill();
    };
  }, [phase]);

  useEffect(() => {
    if (lineProgressRef.current && phase === 1) {
      gsap.to(lineProgressRef.current, {
        scaleX: progress / 100,
        duration: 0.1,
        ease: 'none'
      });
    }
  }, [progress, phase]);

  useEffect(() => {
    let outTl: gsap.core.Timeline;

    if (phase === 1 && isFramesLoaded && !hasStartedPhase2.current) {
      hasStartedPhase2.current = true;
      
      outTl = gsap.timeline({
        onComplete: () => {
          setIntroComplete(true);
        }
      });

      outTl.to({}, { duration: 0.5 }) 
        .to(lineContainerRef.current, {
          width: '100vw',
          duration: 1.2,
          ease: 'expo.inOut'
        })
        .to(lineContainerRef.current, { opacity: 0, duration: 0.1 }, "-=0.1")
        .set([topHalfRef.current, bottomHalfRef.current], { opacity: 1 })
        .to(topHalfRef.current, { y: '-50vh', duration: 1.5, ease: 'power4.inOut' }, "split")
        .to(bottomHalfRef.current, { y: '50vh', duration: 1.5, ease: 'power4.inOut' }, "split")
        .to(containerRef.current, { autoAlpha: 0, duration: 0.5, ease: 'power2.out' });
    }

    return () => {
      if (outTl) outTl.kill();
    };
  }, [isFramesLoaded, phase, setIntroComplete]);

  // RULES OF HOOKS: Early returns must come AFTER all hooks are called!
  if (isIntroComplete) {
    return null;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black pointer-events-none">
      <div ref={dotRef} className="w-2 h-2 rounded-full bg-[#10b981] absolute"></div>
      <div ref={lineContainerRef} className="h-[2px] w-0 opacity-0 relative overflow-hidden bg-white/10">
         <div 
           ref={lineProgressRef} 
           className="absolute top-0 left-0 h-full w-full bg-[#10b981] origin-left scale-x-0"
         />
      </div>
      <div 
        ref={topHalfRef} 
        className="absolute top-1/2 left-0 w-full h-[1px] bg-[#10b981] opacity-0"
      />
      <div 
        ref={bottomHalfRef} 
        className="absolute top-[calc(50%+1px)] left-0 w-full h-[1px] bg-[#10b981] opacity-0"
      />
    </div>
  );
}
