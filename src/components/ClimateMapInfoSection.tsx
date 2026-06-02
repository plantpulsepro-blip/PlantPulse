'use client';

export function ClimateMapInfoSection() {
  return (
    <div className="mb-10 md:mb-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)] gap-6 items-end">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
          <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
          <span className="text-[#10b981] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold">Climate Atlas</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white leading-[1.02]">
          India&apos;s Changing Climate Landscape
        </h2>
        <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
          India&apos;s climate patterns are shifting due to rising temperatures, changing rainfall patterns, extreme weather events, and growing ecosystem stress.
        </p>
        <p className="mt-4 text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          From Himalayan ecosystems to coastal agriculture, climate change is reshaping how plants, crops, and biodiversity survive across India.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
        {[
          { label: 'Rising temperatures', value: '+0.7-1.5°C trend', tone: 'from-[#10b981]/20 to-transparent' },
          { label: 'Rainfall shifts', value: 'Monsoon volatility', tone: 'from-white/10 to-transparent' },
          { label: 'Ecosystem stress', value: 'Rising vulnerability', tone: 'from-[#047857]/20 to-transparent' },
        ].map((item) => (
          <div key={item.label} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${item.tone} p-4 backdrop-blur-md`}>
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/35 mb-2">{item.label}</div>
            <div className="text-sm md:text-base text-white/80 font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}