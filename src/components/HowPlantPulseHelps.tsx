import React from 'react';

export function HowPlantPulseHelps() {
  const cards = [
    {
      title: 'Climate Monitoring',
      desc: 'Track environmental changes across regions with continuous climate signals and geospatial overlays.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83"/></svg>
      ),
    },
    {
      title: 'Plant Vulnerability Insights',
      desc: 'Understand species response to climate stress and identify vulnerable native plants and crops.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><path d="M12 2v20"/></svg>
      ),
    },
    {
      title: 'Agricultural Awareness',
      desc: 'Learn how shifting climate patterns affect crop cycles, irrigation needs, and pest pressures.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
      ),
    },
    {
      title: 'Sustainability Education',
      desc: 'Connect data to local action: adaptation measures, conservation priorities, and community outreach.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><path d="M12 2 L12 22"/></svg>
      ),
    },
  ];

  return (
    <section className="relative z-20 bg-[#050505] pt-16 pb-20 px-4 md:px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 text-white">How PlantPulse Helps</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Practical tools and insights to support climate resilience, biodiversity protection, and sustainable agriculture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group bg-[#0a0a0a] border border-white/6 rounded-2xl p-6 hover:border-[#10b981]/40 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.02] border border-white/8 mb-4">{c.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
