import React from "react";
import { ShieldCheck, Cpu, Database, Zap, Lock, RefreshCw } from "lucide-react";

export function ArchitectureSection() {
  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "Isolamento Estrito Multi-Tenant",
      description:
        "Implementação nativa de Row Level Security (RLS) no PostgreSQL. Cada cliente possui segregação lógica inviolável de dados fiscais e financeiros a nível de banco.",
      tag: "Segurança de Dados",
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "Edge Compute & Serverless",
      description:
        "Aplicações distribuídas na Vercel Edge Network com Next.js 15 e React 19. Respostas com tempo inferior a 200ms e escalabilidade instantânea sem servidores ociosos.",
      tag: "Performance Extrema",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "IA Pragmática & Visão Computacional",
      description:
        "Modelos multimodais Google Gemini Vision aplicados a extração documental de alta precisão (99.4%) e automação de mensageria com a Meta WhatsApp Business API.",
      tag: "Automação com IA",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-300" />,
      title: "Governança Contínua & LGPD",
      description:
        "Conformidade estrita com a Lei 13.709/2018 (LGPD), minimização de dados sensíveis (PII), trilhas de auditoria assinadas e zero credenciais em código-fonte.",
      tag: "Compliance & Cibersegurança",
    },
  ];

  return (
    <section id="arquitetura" className="relative py-20 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engenharia &amp; Governança</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Padrões Arquiteturais dos Sistemas ENBK
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-normal">
            Todos os produtos do catálogo compartilham uma base de engenharia de missão crítica, garantindo estabilidade, segurança e velocidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Padrão Homologado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
