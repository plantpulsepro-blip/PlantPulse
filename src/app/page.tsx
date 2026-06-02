import { LenisProvider } from '@/components/LenisProvider';
import { Navigation } from '@/components/Navigation';
import { ScrollStory } from '@/components/ScrollStory';
import { Footer } from '@/components/Footer';
import { LoaderProvider } from '@/components/LoaderContext';
import { IntroLoader } from '@/components/IntroLoader';
import { ScrollPrompt } from '@/components/ScrollPrompt';
import { ClimateMapSection } from '@/components/ClimateMapSection';
import { ClimateImpactCards } from '@/components/ClimateImpactCards';
import { ClimateNewsSection } from '@/components/ClimateNewsSection';
import { HowPlantPulseHelps } from '@/components/HowPlantPulseHelps';
import { SDGImpactSection } from '@/components/SDGImpactSection';

export default function Home() {
  return (
    <LoaderProvider>
      <LenisProvider>
        <main className="min-h-screen bg-black">
          <IntroLoader />
          <Navigation />
          <ScrollPrompt />
          
          {/* The Frame-by-Frame Cinematic Experience */}
          <ScrollStory />
        
        {/* Vibrant Living Bento Grid Section */}
        <section id="platform" className="relative z-20 bg-black pt-32 pb-40 px-4 md:px-8 lg:px-16">
          
          {/* Custom Curved Notch Divider (Allowed to bleed up into the video) */}
          <div className="absolute top-0 left-0 w-full flex items-stretch -translate-y-[calc(100%-1px)] pointer-events-none">
            <div className="flex-1 bg-black border-t border-[#10b981]/20"></div>
            
            <svg viewBox="0 0 480 61" className="w-[300px] md:w-[480px] flex-shrink-0 overflow-visible">
              <path d="M0,0.5 C80,0.5 80,59.5 160,59.5 L320,59.5 C400,59.5 400,0.5 480,0.5 L480,61 L0,61 Z" fill="black" />
              <path d="M0,0.5 C80,0.5 80,59.5 160,59.5 L320,59.5 C400,59.5 400,0.5 480,0.5" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            
            <div className="flex-1 bg-black border-t border-[#10b981]/20"></div>
          </div>

          {/* Ambient Living Background (Safely clipped) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10b981]/20 rounded-full blur-[120px] opacity-40 transform-gpu"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Hero Header - climate focused */}
            <div className="mb-16 md:w-4/5">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 group cursor-default">
                <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]"></span>
                </div>
                <span className="text-[#10b981] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-500">
                  Climate Monitoring
                </span>
                <div className="w-px h-3 bg-white/20 mx-2"></div>
                <span className="text-white/40 font-mono text-[10px] sm:text-xs tracking-widest uppercase">India Focus</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tighter mb-6 leading-[1.05] text-white">
                Real-time climate insights <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#10b981] to-[#047857]">for India's ecosystems and agriculture</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl">
                Track changing temperatures, shifting rainfall patterns, and extreme events — understand their impacts on crops, native plants, and regional vulnerability.
              </p>
            </div>

            {/* Placeholder platform section removed — replaced by climate-focused sections below */}
          </div>
        </section>

        {/* Climate Risk Trends will be rendered after the Climate Challenges section */}

        <ClimateMapSection />

        <ClimateImpactCards />

        {/* Climate Risk Trends Section */}
        <section className="relative z-20 bg-[#020202] pt-20 pb-28 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-white">
                  Climate Risk Trends
                </h2>
                <p className="text-white/50 text-base md:text-lg">
                  Understanding long-term trends in temperature, heatwave frequency, rainfall variability, and crop vulnerability to identify emerging risks across regions.
                </p>
              </div>
              
              {/* Legend */}
              <div className="flex gap-6 bg-white/[0.03] border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-[#ffb020] rounded-full shadow-[0_0_10px_rgba(255,176,32,0.25)]"></div>
                  <span className="text-sm font-medium text-white">Temperature Increase</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-[#f43f5e] rounded-full"></div>
                  <span className="text-sm font-medium text-white">Heatwave Frequency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-[#60a5fa] rounded-full"></div>
                  <span className="text-sm font-medium text-white">Rainfall Variability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-[#10b981] rounded-full"></div>
                  <span className="text-sm font-medium text-white">Crop Vulnerability</span>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className="w-full relative rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 md:p-10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/5 to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              {/* Unbreakable Flex Layout Chart Area */}
              <div className="w-full h-[300px] md:h-[400px] mt-8 flex flex-col">
                
                {/* Top Section: Y-Axis + Graph Canvas */}
                <div className="flex flex-1 w-full relative">
                  
                  {/* Y-Axis */}
                  <div className="w-12 md:w-16 h-full relative border-r border-white/10 pr-4 text-white/40 text-[10px] md:text-xs font-mono pb-2">
                    <span className="absolute top-0 right-4 translate-y-[-50%]">100%</span>
                    <span className="absolute top-[25%] right-4 translate-y-[-50%]">75%</span>
                    <span className="absolute top-[50%] right-4 translate-y-[-50%]">50%</span>
                    <span className="absolute top-[75%] right-4 translate-y-[-50%]">25%</span>
                    <span className="absolute bottom-2 right-4 translate-y-[50%]">0%</span>
                  </div>

                  {/* SVG Canvas Area */}
                  <div className="flex-1 h-full relative pb-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                      
                      {/* Horizontal Grid Lines */}
                      <path d="M0,75 L1000,75 M0,150 L1000,150 M0,225 L1000,225" stroke="rgba(255,255,255,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" strokeDasharray="4 4" />
                      
                        {/* Temperature Increase (sample) */}
                        <path d="M0,250 L100,240 L200,220 L300,200 L400,180 L500,160 L600,150 L700,135 L800,120 L900,110 L1000,100" fill="none" stroke="#ffb020" strokeWidth="3.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Heatwave Frequency (sample) */}
                        <path d="M0,270 L100,260 L200,245 L300,230 L400,210 L500,200 L600,190 L700,175 L800,160 L900,150 L1000,140" fill="none" stroke="#f43f5e" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Rainfall Variability (sample) */}
                        <path d="M0,260 L100,265 L200,255 L300,270 L400,250 L500,265 L600,255 L700,270 L800,260 L900,275 L1000,260" fill="none" stroke="#60a5fa" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Crop Vulnerability (sample) */}
                        <path d="M0,280 L100,275 L200,265 L300,260 L400,250 L500,240 L600,230 L700,220 L800,210 L900,200 L1000,190" fill="none" stroke="#10b981" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                      
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(16,185,129,0.3)" />
                          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Interactive Hover Markers */}
                    <div className="absolute left-[35%] top-[40%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-[#ffb020] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_12px_rgba(255,176,32,0.25)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 bg-black/80 border border-white/10 backdrop-blur-xl rounded-lg p-3 w-44 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-white text-xs font-semibold mb-1">Avg Temperature Rise</p>
                        <p className="text-white/50 text-[10px]">Sample regional trend over the past decade</p>
                      </div>
                    </div>

                    <div className="absolute right-0 top-[10%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-[#f43f5e] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_12px_rgba(244,63,94,0.25)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 right-0 bg-black/80 border border-[#f43f5e]/30 backdrop-blur-xl rounded-lg p-3 w-44 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-[#f43f5e] text-lg font-bold mb-0.5">Heatwave Events</p>
                        <p className="text-white/50 text-[10px]">Increasing frequency and intensity observed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: X-Axis Spacer + Labels */}
                <div className="flex w-full h-8">
                  <div className="w-12 md:w-16 shrink-0"></div> {/* Spacer to align with Y-axis */}
                  <div className="flex-1 relative border-t border-white/10 pt-3 text-white/40 text-[10px] md:text-xs font-mono">
                    <span className="absolute left-0 top-3">Year 2010</span>
                    <span className="absolute left-[33%] top-3 -translate-x-1/2">Year 2014</span>
                    <span className="absolute left-[66%] top-3 -translate-x-1/2">Year 2018</span>
                    <span className="absolute right-0 top-3">Year 2022</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <ClimateNewsSection />

        <HowPlantPulseHelps />

        <SDGImpactSection />

        {/* TEAM SECTION (restored) */}
        <section className="relative z-20 bg-[#050505] pt-32 pb-20 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white">
                The Minds Behind the Machine
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
                Our engineering and leadership team brings together decades of expertise in edge computing, agronomy, and environmental science.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {[
                { name: 'Pranab Saini', role: 'Chief Executive Officer', photo: '/Members/pranab.webp' },
                { name: 'Yashpal Kumar', role: 'Chief Technology Officer', photo: '/Members/yashpal.webp' },
                { name: 'Abhishek Kumar', role: 'Chief Financial Officer', photo: '/Members/abhishek.webp' },
                { name: 'Yashika', role: 'Marketing Head', photo: '/Members/yashika.webp' },
                { name: 'Aditi', role: 'Product Manager', photo: '/Members/aditi.webp' }
              ].map((member, i) => (
                <div key={i} className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-[#10b981]/50 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-full aspect-[4/5] overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#10b981]/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10"></div>
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6 relative z-20 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent -mt-24 pt-16">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#10b981] transition-colors duration-300">{member.name}</h3>
                    <p className="text-white/50 text-sm font-medium tracking-wide">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </LenisProvider>
    </LoaderProvider>
  );
}
