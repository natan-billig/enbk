import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Terminal } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="projetos" className="relative py-20 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sistemas & Portfólio Ativo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Catálogo de Projetos
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-normal">
            Soluções completas com arquiteturas escaláveis, foco em segurança, integridade relacional e experiência de uso de alto nível.
          </p>
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
