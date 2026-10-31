import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-900 bg-[#06080D] py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Signature */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-xs">
            E
          </div>
          <p className="font-mono text-xs text-slate-400">
            © {currentYear} ENBK • Arquitetado por <span className="text-slate-200 font-medium">Natan Billig</span>
          </p>
        </div>

        {/* Tech Indicator & Links */}
        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Next.js • Supabase • AI Systems</span>
          </div>
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors"
          >
            Voltar ao topo ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
