import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080D] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-base text-cyan-400">ENBK</span>
              <span className="text-slate-600">•</span>
              <span className="text-sm font-medium text-slate-300">Catálogo Oficial de Sistemas</span>
            </div>
            <p className="text-xs text-slate-400">
              Engenharia de software de alta performance, governança e cibersegurança por Natan Billig.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <Link href="/enbik" className="hover:text-cyan-400 transition-colors">
              /enbik
            </Link>
            <span>•</span>
            <Link href="/kofre" className="hover:text-cyan-400 transition-colors">
              /kofre
            </Link>
            <span>•</span>
            <Link href="/controle-cheques" className="hover:text-cyan-400 transition-colors">
              /controle-cheques
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© {currentYear} ENBK • Arquitetado por Natan Billig</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Infraestrutura Verificada na Borda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
