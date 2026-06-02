import {
  CloudRain,
  Droplets,
  Leaf,
  Mountain,
  Sprout,
  ThermometerSun,
  Zap,
} from 'lucide-react';

const climateImpactCards = [
  {
    title: 'Rising Temperatures',
    description: 'Higher temperatures reduce crop productivity and increase plant stress.',
    icon: ThermometerSun,
    accent: 'Heat stress',
  },
  {
    title: 'Irregular Rainfall',
    description: 'Unpredictable monsoons affect sowing cycles and water availability.',
    icon: CloudRain,
    accent: 'Monsoon volatility',
  },
  {
    title: 'Extreme Weather Events',
    description: 'Heatwaves, floods, and droughts damage crops and natural ecosystems.',
    icon: Zap,
    accent: 'Event shocks',
  },
  {
    title: 'Biodiversity Loss',
    description: 'Native plant species face habitat shifts and increased extinction risk.',
    icon: Leaf,
    accent: 'Habitat pressure',
  },
  {
    title: 'Soil Degradation',
    description: 'Climate stress accelerates nutrient loss and land degradation.',
    icon: Mountain,
    accent: 'Land decline',
  },
  {
    title: 'Water Scarcity',
    description: 'Reduced groundwater and changing rainfall patterns threaten agriculture.',
    icon: Droplets,
    accent: 'Water shortage',
  },
];

export function ClimateImpactCards() {
  return (
    <section className="relative z-20 bg-[#030303] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#10b981]/10 blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-[#10b981] font-mono tracking-[0.2em] uppercase mb-6">
            Climate Impact
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Climate Change Impact on Indian Plants & Crops
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl">
            Key environmental challenges affecting agriculture and biodiversity across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {climateImpactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#10b981]/35 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-[#10b981] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#10b981]">
                      {card.accent}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">{card.title}</h3>
                    <p className="text-white/55 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}