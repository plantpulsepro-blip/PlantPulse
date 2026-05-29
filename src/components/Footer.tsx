export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#10b981]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </span>
            <span className="font-semibold text-xl tracking-tight">PlantPulse</span>
          </div>
          <p className="text-white/50 text-sm max-w-xs">
            Advanced plant intelligence and environmental monitoring platform for modern agriculture.
          </p>
        </div>
        
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <h4 className="font-medium mb-1">Product</h4>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Sensors</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Platform</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Analytics</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-medium mb-1">Company</h4>
            <a href="#" className="text-white/50 hover:text-white transition-colors">About</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Careers</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 PlantPulse. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
