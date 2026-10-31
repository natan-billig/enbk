import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Terminal, Sparkles, ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="projetos" className="relative py-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sistemas &amp; Portfólio Ativo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Catálogo de Sistemas ENBK
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-normal">
            Soluções completas com arquiteturas escaláveis, foco em segurança, integridade relacional e experiência de uso de alto nível. Clique em qualquer sistema para acessar a ficha técnica completa.
          </p>
        </div>

        {/* Catalog Direct Shortcuts Bar */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mr-2">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Atalhos rápidos do catálogo:</span>
          </span>
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/${p.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <span className="text-cyan-400 font-semibold">{p.name}</span>
              <span className="text-slate-500 font-mono">/</span>
              <span className="text-slate-400 font-mono">{p.slug}</span>
            </Link>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
