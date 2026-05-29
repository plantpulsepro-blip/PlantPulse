'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface LoaderContextType {
  progress: number;
  isFramesLoaded: boolean;
  isIntroComplete: boolean;
  setIntroComplete: (val: boolean) => void;
  imagesRef: React.MutableRefObject<HTMLImageElement[]>;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isFramesLoaded, setIsFramesLoaded] = useState(false);
  const [isIntroComplete, setIntroComplete] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const frameCount = 329;

  useEffect(() => {
    const currentFrame = (index: number) => 
      `/frames/frame_${(index + 1).toString().padStart(6, '0')}.png`;

    let loadedCount = 0;
    const handleLoadOrError = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / frameCount) * 100));
      if (loadedCount === frameCount) {
        setIsFramesLoaded(true);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = handleLoadOrError;
      img.onerror = handleLoadOrError;
      imagesRef.current.push(img);
    }
  }, []);

  return (
    <LoaderContext.Provider value={{ progress, isFramesLoaded, isIntroComplete, setIntroComplete, imagesRef }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
}
