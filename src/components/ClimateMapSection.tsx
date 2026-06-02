'use client';

import dynamic from 'next/dynamic';
import { ClimateMapInfoSection } from './ClimateMapInfoSection';

const ClimateMapCanvas = dynamic(
  () => import('./ClimateMapCanvas').then((module) => module.ClimateMapCanvas),
  {
    ssr: false,
    loading: () => (
      <section className="relative z-20 bg-[#050505] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 md:p-12 text-white/60">
            Loading climate atlas...
          </div>
        </div>
      </section>
    ),
  }
);

export function ClimateMapSection() {
  return (
    <section id="climate-map" className="relative z-20 bg-[#050505] pt-20 pb-12 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#10b981]/10 blur-[120px] opacity-60" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#047857]/10 blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ClimateMapInfoSection />
        <ClimateMapCanvas />
      </div>
    </section>
  );
}