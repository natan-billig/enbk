import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="relative py-20 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Main Translucent Glow Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-500 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-black/50">
          
          {/* Subtle Cyber Grid Background & Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono uppercase tracking-widest text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Novos Projetos & Parcerias</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
              Vamos construir sua próxima solução de alto impacto?
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Disponível para consultoria técnica, engenharia de novos sistemas, automações de processos críticos 
              e integração de IA sob demanda.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Arquitetura Segura & Escalável</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Atendimento Ágil & Direto</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/595994195695"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs font-mono text-slate-400 pt-2">
              Telefone: +595 994 195 695 • Atendimento profissional
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
