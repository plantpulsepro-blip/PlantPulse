import { LenisProvider } from '@/components/LenisProvider';
import { Navigation } from '@/components/Navigation';
import { ScrollStory } from '@/components/ScrollStory';
import { Footer } from '@/components/Footer';
import { LoaderProvider } from '@/components/LoaderContext';
import { IntroLoader } from '@/components/IntroLoader';
import { ScrollPrompt } from '@/components/ScrollPrompt';

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
            {/* Ultra-Modern Header */}
            <div className="mb-24 md:w-4/5">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 group cursor-default">
                <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]"></span>
                </div>
                <span className="text-[#10b981] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold group-hover:text-white transition-colors duration-500">
                  Neural Architecture
                </span>
                <div className="w-px h-3 bg-white/20 mx-2"></div>
                <span className="text-white/40 font-mono text-[10px] sm:text-xs tracking-widest uppercase">System Online</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-8 leading-[1.05] text-white">
                The central nervous system <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#10b981] to-[#047857] animate-gradient-x">for your plants.</span>
              </h3>
              
              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl">
                Powered by next-gen biomimicry and edge AI, PlantPulse translates microscopic chemical signals into actionable insights, operating 24/7 without fatigue.
              </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(320px,_auto)]">
              
              {/* Card 1: Spatial Mapping (Span 8) */}
              <div className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-[#10b981]/50 p-10 flex flex-col justify-between transition-all duration-700">
                {/* Hover Gleam */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="relative z-10 mb-12">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 font-mono text-xs border border-white/5 group-hover:bg-[#10b981]/20 group-hover:text-[#10b981] group-hover:border-[#10b981]/30 transition-all duration-500">v3.0.4</span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Holographic Topography</h4>
                  <p className="text-white/50 max-w-md text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">Real-time 3D spatial mapping of your entire canopy. Pinpoint micro-climate anomalies down to the square millimeter.</p>
                </div>

                {/* Abstract Visual: Grid lines */}
                <div className="relative z-10 w-full h-48 rounded-2xl bg-black border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-[#10b981]/20 transition-colors duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                  {/* Glowing core */}
                  <div className="w-32 h-32 bg-[#10b981]/20 rounded-full blur-[40px] group-hover:bg-[#10b981]/40 group-hover:scale-150 transition-all duration-1000"></div>
                </div>
              </div>

              {/* Card 2: Command Dashboard (Span 4, Row 2) */}
              <div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-[#10b981]/50 p-10 flex flex-col transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 mb-8">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                  </div>
                  <h4 className="text-3xl font-semibold tracking-tight mb-4 text-white">Full-Spectrum Interface</h4>
                  <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
                    The ultimate command center. Monitor hundreds of environmental nodes simultaneously through a deeply intuitive, real-time data streaming dashboard.
                  </p>
                </div>

                {/* Abstract Dashboard UI Visual */}
                <div className="mt-auto relative z-10 w-full h-64 bg-black rounded-2xl border border-white/10 overflow-hidden flex flex-col p-4 gap-4 shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
                   {/* Mock Header */}
                   <div className="w-full flex justify-between items-center border-b border-white/5 pb-3">
                     <div className="flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="w-1/3 h-2 rounded-full bg-white/5"></div>
                   </div>
                   
                   {/* Mock Layout */}
                   <div className="flex-1 flex gap-3">
                     {/* Sidebar */}
                     <div className="w-1/4 h-full flex flex-col gap-2">
                       {[1,2,3,4].map((i) => (
                         <div key={i} className={`w-full h-2 rounded-full ${i === 2 ? 'bg-[#10b981]' : 'bg-white/5'}`}></div>
                       ))}
                     </div>
                     {/* Main Content */}
                     <div className="flex-1 h-full flex flex-col gap-3">
                       {/* Graph Area */}
                       <div className="w-full h-1/2 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden flex items-end">
                         {/* Animated Line Graph Effect */}
                         <svg className="absolute bottom-0 w-[200%] h-full left-0 opacity-50 group-hover:-translate-x-1/2 transition-transform duration-[3000ms] ease-linear" preserveAspectRatio="none" viewBox="0 0 100 100">
                           <path d="M0,100 L0,50 Q12,20 25,50 T50,50 T75,40 T100,50 L100,100 Z" fill="rgba(16,185,129,0.1)"></path>
                           <path d="M0,50 Q12,20 25,50 T50,50 T75,40 T100,50" fill="none" stroke="#10b981" strokeWidth="1"></path>
                         </svg>
                       </div>
                       {/* Stats Area */}
                       <div className="flex-1 flex gap-2">
                         <div className="flex-1 h-full rounded-xl bg-white/[0.02] border border-white/5 p-2 flex flex-col justify-between">
                           <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                           <div className="w-2/3 h-4 bg-[#10b981]/20 rounded-md"></div>
                         </div>
                         <div className="flex-1 h-full rounded-xl bg-white/[0.02] border border-white/5 p-2 flex flex-col justify-between">
                           <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                           <div className="w-1/2 h-4 bg-[#10b981]/20 rounded-md"></div>
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Card 3: Telemetry (Span 4) */}
              <div className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-[#10b981]/50 p-10 flex flex-col transition-all duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#10b981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#10b981]/20 group-hover:border-[#10b981]/50 transition-all duration-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <h4 className="text-2xl font-semibold mb-3 text-white">Root-Zone Telemetry</h4>
                    <p className="text-white/50 leading-relaxed font-light text-base">
                      Subterranean sensors decoding moisture, EC, and nutrient uptake with laboratory-grade precision.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Autonomous (Span 4) */}
              <div className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-[#10b981]/50 p-10 flex flex-col transition-all duration-700">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#10b981]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </div>
                    <h4 className="text-2xl font-semibold mb-3 text-white">Autonomous Symbiosis</h4>
                    <p className="text-white/50 leading-relaxed font-light text-base">
                      Connect directly to HVAC and fertigation APIs. Let the plants control their own environment in real-time.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comparative Growth Section */}
        <section className="relative z-20 bg-[#020202] pt-24 pb-32 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-white">
                  The PlantPulse Effect
                </h2>
                <p className="text-white/50 text-base md:text-lg">
                  12-week comparative analysis of standard growth vs. PlantPulse optimization.
                </p>
              </div>
              
              {/* Legend */}
              <div className="flex gap-6 bg-white/[0.03] border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-sm font-medium text-white">With PlantPulse <span className="text-[#10b981] ml-1">+34%</span></span>
                </div>
                <div className="w-px h-5 bg-white/20"></div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                  <span className="text-sm font-medium text-white/50">Standard Control</span>
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
                      
                      {/* Standard Control Line */}
                      <path 
                        d="M0,270 L100,250 L200,280 L300,220 L400,240 L500,200 L600,230 L700,180 L800,210 L900,160 L1000,190" 
                        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round"
                      ></path>
                      
                      {/* PlantPulse Line */}
                      <path 
                        d="M0,270 C200,260 300,150 500,120 C700,90 850,50 1000,30 L1000,300 L0,300 Z" 
                        fill="url(#chartGradient)"
                      ></path>
                      <path 
                        d="M0,270 C200,260 300,150 500,120 C700,90 850,50 1000,30" 
                        fill="none" stroke="#10b981" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round"
                        className="drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
                      ></path>
                      
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(16,185,129,0.3)" />
                          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Interactive Hover Markers */}
                    <div className="absolute left-[35%] top-[40%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-[#10b981] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 bg-black/80 border border-white/10 backdrop-blur-xl rounded-lg p-3 w-40 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-white text-xs font-semibold mb-1">Micro-Climate Corrected</p>
                        <p className="text-white/50 text-[10px]">VPD spike mitigated automatically</p>
                      </div>
                    </div>

                    <div className="absolute right-0 top-[10%] hidden md:flex flex-col items-center group cursor-pointer hover:z-20">
                      <div className="w-4 h-4 bg-[#10b981] rounded-full border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-transform group-hover:scale-125"></div>
                      <div className="absolute top-8 right-0 bg-black/80 border border-[#10b981]/30 backdrop-blur-xl rounded-lg p-3 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <p className="text-[#10b981] text-lg font-bold mb-0.5">Peak Yield</p>
                        <p className="text-white/50 text-[10px]">Optimal harvest</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: X-Axis Spacer + Labels */}
                <div className="flex w-full h-8">
                  <div className="w-12 md:w-16 shrink-0"></div> {/* Spacer to align with Y-axis */}
                  <div className="flex-1 relative border-t border-white/10 pt-3 text-white/40 text-[10px] md:text-xs font-mono">
                    <span className="absolute left-0 top-3">Week 1</span>
                    <span className="absolute left-[33%] top-3 -translate-x-1/2">Week 4</span>
                    <span className="absolute left-[66%] top-3 -translate-x-1/2">Week 8</span>
                    <span className="absolute right-0 top-3">Week 12</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="relative z-20 bg-[#050505] pt-32 pb-20 px-4 md:px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white">
                The Minds Behind the Machine
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
                Our engineering and leadership team brings together decades of expertise in edge computing, agronomy, and artificial intelligence.
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

        {/* CONTACT SECTION */}
        <section className="relative z-20 bg-black pt-20 pb-32 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/10 p-12 md:p-20 text-center group hover:border-[#10b981]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#10b981]/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#10b981]/40 transition-colors duration-1000"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#047857]/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#047857]/40 transition-colors duration-1000"></div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-white relative z-10">
              Ready to upgrade your canopy?
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
              Get in touch with our engineering team to schedule a live demo of the PlantPulse neural network and see what your plants are really saying.
            </p>
            
            {/* Contact Links Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              
              {/* Email */}
              <a href="mailto:help@plantpulse.xyz" className="flex flex-col items-center justify-center gap-4 py-8 px-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#10b981]/10 hover:border-[#10b981]/50 hover:-translate-y-2 transition-all duration-500 group/link shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center group-hover/link:bg-[#10b981] group-hover/link:text-black text-white/50 transition-colors duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span className="text-white/80 font-medium group-hover/link:text-white transition-colors tracking-wide">help@plantpulse.xyz</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/pranab.tech" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 py-8 px-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#10b981]/10 hover:border-[#10b981]/50 hover:-translate-y-2 transition-all duration-500 group/link shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center group-hover/link:bg-[#10b981] group-hover/link:text-black text-white/50 transition-colors duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <span className="text-white/80 font-medium group-hover/link:text-white transition-colors tracking-wide">@pranab.tech</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/pranabsssssss" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 py-8 px-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#10b981]/10 hover:border-[#10b981]/50 hover:-translate-y-2 transition-all duration-500 group/link shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)]">
                <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center group-hover/link:bg-[#10b981] group-hover/link:text-black text-white/50 transition-colors duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <span className="text-white/80 font-medium group-hover/link:text-white transition-colors tracking-wide">/pranabsssssss</span>
              </a>
              
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </LenisProvider>
    </LoaderProvider>
  );
}
