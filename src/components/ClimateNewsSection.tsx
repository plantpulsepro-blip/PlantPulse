const climateNewsArticles = [
  {
    title: 'India\'s warming trend is reshaping planting windows',
    summary: 'Researchers are tracking how hotter nights and longer heatwaves are forcing farmers to rethink sowing calendars.',
    source: 'Down To Earth',
    date: '02 Jun 2026',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tag: 'Climate change in India',
  },
  {
    title: 'Crop productivity under pressure from erratic monsoons',
    summary: 'Water timing has become as important as water volume, especially in rain-fed agricultural districts.',
    source: 'The Hindu',
    date: '29 May 2026',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    tag: 'Crop productivity',
  },
  {
    title: 'Why agricultural resilience now depends on micro-climate monitoring',
    summary: 'Farmers and agri-tech teams are investing in better field-scale weather intelligence to reduce losses.',
    source: 'Mongabay India',
    date: '26 May 2026',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1f5f1?auto=format&fit=crop&w=1200&q=80',
    tag: 'Agricultural resilience',
  },
  {
    title: 'Biodiversity conservation and the shrinking habitat margin',
    summary: 'Native species are under pressure as temperature bands move upward and rainfall becomes less stable.',
    source: 'Nature India',
    date: '21 May 2026',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Biodiversity conservation',
  },
  {
    title: 'Sustainable farming methods gain ground in dryland India',
    summary: 'Mulching, shade systems, and smarter irrigation are helping communities adapt to heat and water stress.',
    source: 'India Today',
    date: '16 May 2026',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    tag: 'Sustainable farming',
  },
  {
    title: 'Policy moves toward climate-smart agriculture and water governance',
    summary: 'Recent state and national policy updates are aligning subsidy, irrigation, and conservation goals.',
    source: 'The Economic Times',
    date: '12 May 2026',
    image: 'https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80',
    tag: 'Environmental policy',
  },
];

export function ClimateNewsSection() {
  return (
    <section className="relative z-20 bg-[#020202] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#047857]/10 blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2 text-xs text-[#10b981] font-mono tracking-[0.2em] uppercase mb-6">
              Research Feed
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
              Latest Climate & Agriculture Updates
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-3xl">
              Placeholder and demo articles focused on climate change in India, crop productivity, agricultural resilience, biodiversity conservation, sustainable farming, and environmental policy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {climateNewsArticles.map((article) => (
            <article
              key={article.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:border-[#10b981]/30 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                  {article.tag}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4 text-xs text-white/35 uppercase tracking-[0.22em] font-mono mb-4">
                  <span>{article.source}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/55 leading-relaxed mb-6">
                  {article.summary}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#10b981]/35 hover:bg-[#10b981]/10 hover:text-[#10b981] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/60"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}