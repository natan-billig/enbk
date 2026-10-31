import React from "react";
import Link from "next/link";
import { ProfileAvatar } from "./ProfileAvatar";
import { ArrowDown, Cpu, ShieldCheck, Zap, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="sobre" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
          
          {/* Avatar with cyber neon lighting frame */}
          <div className="flex-shrink-0">
            <ProfileAvatar size={180} />
          </div>

          {/* Core Information */}
          <div className="flex-1 text-center md:text-left space-y-5">
            {/* Tagline / Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack &amp; Systems Architect</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Natan <span className="text-gradient-cyan">Billig</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-slate-300 font-medium tracking-wide">
                Desenvolvedor de Software &amp; Criador de Soluções Digitais
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Engenharia de software de ponta a ponta: sistemas de missão crítica, governança fiscal em nuvem,
              controle financeiro multi-moeda de alta precisão e pipelines de IA com visão computacional para eliminar
              gargalos operacionais reais do mercado corporativo.
            </p>

            {/* Stats / Numbers Highlight */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg border-y border-slate-800/80">
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl font-black font-mono text-cyan-400">+3</div>
                <div className="text-[11px] font-mono text-slate-400">Sistemas no Catálogo</div>
              </div>
              <div className="text-center md:text-left border-x border-slate-800/80 px-3">
                <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">100%</div>
                <div className="text-[11px] font-mono text-slate-400">Isolamento Multi-Tenant</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl font-black font-mono text-purple-400">99.4%</div>
                <div className="text-[11px] font-mono text-slate-400">Acurácia IA Vision</div>
              </div>
            </div>

            {/* Pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 max-w-xl">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-300">Missão Crítica &amp; SaaS</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-300">Automação &amp; Finanças</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <Zap className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <span className="text-xs font-mono text-slate-300">IA Aplicada &amp; Visão</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              >
                <span>Explorar Catálogo</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <span>Iniciar Contato</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
