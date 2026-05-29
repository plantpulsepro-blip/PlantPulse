'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLoader } from './LoaderContext';

export function ScrollStory() {
  const { imagesRef, isFramesLoaded } = useLoader();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);
  const text6Ref = useRef<HTMLDivElement>(null);

  const frameCount = 329;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isFramesLoaded) return;

    let lastRenderedFrame = -1;

    const render = (rawIndex: number) => {
      const index = Math.round(rawIndex);
      if (index === lastRenderedFrame) return;
      lastRenderedFrame = index;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
      }

      const hRatio = rect.width / img.width;
      const vRatio = rect.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (rect.width - img.width * ratio) / 2;
      const centerShift_y = (rect.height - img.height * ratio) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const initialDraw = setInterval(() => {
      if (imagesRef.current[0]?.complete) {
        render(0);
        clearInterval(initialDraw);
      }
    }, 50);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=6000',
        pin: true,
        scrub: 0.5,
      }
    });

    const obj = { frame: 0 };
    tl.to(obj, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      onUpdate: () => render(obj.frame),
      duration: 1
    }, 0);

    const f = (frame: number) => frame / frameCount;

    // Simple, rock-solid "Air Dissolve" GSAP Timeline
    const setupTextAnim = (ref: React.RefObject<HTMLDivElement | null>, start: number, duration: number, noExit: boolean = false) => {
      const el = ref.current;
      if (!el) return;
      
      // Right to left air dissolve entrance
      tl.fromTo(el, 
        { autoAlpha: 0, x: 40, filter: 'blur(10px)' }, 
        { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: f(15), ease: 'power2.out' },
        f(start)
      );

      // Subtle continuous parallax while visible
      tl.to(el, 
        { y: -20, duration: f(duration + 10), ease: 'none' },
        f(start)
      );

      // Continue to left air dissolve exit
      if (!noExit) {
        tl.to(el, 
          { autoAlpha: 0, x: -40, filter: 'blur(10px)', duration: f(15), ease: 'power2.in' },
          f(start + duration)
        );
      }
    };

    setupTextAnim(text1Ref, 5, 45);
    setupTextAnim(text2Ref, 60, 50);
    setupTextAnim(text3Ref, 125, 40);
    setupTextAnim(text4Ref, 180, 40);
    setupTextAnim(text5Ref, 230, 40);
    setupTextAnim(text6Ref, 280, 49, true); // noExit for final text

    const handleResize = () => render(obj.frame);
    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      clearInterval(initialDraw);
      window.removeEventListener('resize', handleResize);
    };
  }, [isFramesLoaded, imagesRef]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full transform-gpu" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none text-white flex flex-col items-center justify-center">
        
        {/* 1. Opening */}
        <div ref={text1Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 invisible">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" style={{ WebkitTextStroke: '1px #10b981' }}>
            <span>Plants are speaking.</span>
          </h2>
          <div className="text-2xl md:text-4xl text-white font-medium" style={{ WebkitTextStroke: '1px rgba(16,185,129,0.5)' }}>
             <span>Most of the world isn't listening.</span>
          </div>
        </div>

        {/* 2. Sensors */}
        <div ref={text2Ref} className="absolute inset-0 flex flex-col justify-center items-start pl-[10%] md:pl-[20%] opacity-0 invisible">
          <div className="max-w-xl">
            <div className="text-white text-sm font-mono tracking-widest mb-6 uppercase">
              <span className="inline-block px-3 py-1 border border-[#10b981] bg-black/50 rounded-full" style={{ WebkitTextStroke: '0.5px #10b981' }}>Sensor Network</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" style={{ WebkitTextStroke: '1px #10b981' }}>
              Measure what<br/>human eyes cannot.
            </h2>
          </div>
        </div>

        {/* 3. Macro Leaf */}
        <div ref={text3Ref} className="absolute inset-0 flex flex-col items-center justify-end pb-[15%] opacity-0 invisible">
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" style={{ WebkitTextStroke: '1px #10b981' }}>
            Every leaf contains data.
          </h2>
        </div>

        {/* 4. AI Stream */}
        <div ref={text4Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 invisible">
          <div className="text-white text-sm font-mono tracking-[0.2em] mb-8 border border-[#10b981] bg-black/50 px-6 py-2 rounded-full uppercase" style={{ WebkitTextStroke: '0.5px #10b981' }}>
            AI Analysis Engine
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-center max-w-5xl text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] leading-[1.1]" style={{ WebkitTextStroke: '1.5px #10b981' }}>
            Transform biological<br/>signals into action.
          </h2>
        </div>

        {/* 5. Fractal Ecosystem */}
        <div ref={text5Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 invisible">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]" style={{ WebkitTextStroke: '1.5px #10b981' }}>
            <span>One greenhouse.</span>
          </h2>
          <div className="italic font-serif text-white tracking-normal text-3xl md:text-5xl mt-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]" style={{ WebkitTextStroke: '1px #10b981' }}>
            <span>Thousands of living data streams.</span>
          </div>
        </div>

        {/* 6. Future Scale */}
        <div ref={text6Ref} className="absolute inset-0 flex flex-col items-center justify-end pb-[20%] opacity-0 invisible">
          {/* Protective contrast gradient - Oversized and pushed down to prevent parallax clipping */}
          <div className="absolute -bottom-32 left-0 right-0 h-[80vh] bg-gradient-to-t from-black via-black/50 to-transparent -z-10 pointer-events-none"></div>
          
          <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.9)]" style={{ WebkitTextStroke: '3px #10b981' }}>
            PlantPulse
          </h2>
          <div className="mt-8 text-lg md:text-xl text-white font-mono tracking-[0.3em] font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,1)] shadow-black">
            THE OPERATING SYSTEM FOR PLANT INTELLIGENCE
          </div>
        </div>

      </div>
    </div>
  );
}
