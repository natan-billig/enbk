import React from "react";
import { ProjectItem } from "@/data/projects";
import { CheckCircle2, Layers, ExternalLink, Activity } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Produção":
        return {
          bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          dot: "bg-emerald-500",
        };
      case "Ativo":
        return {
          bg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
          dot: "bg-cyan-400",
        };
      case "Em Expansão":
        return {
          bg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
          dot: "bg-amber-400",
        };
    }
  };

  const statusStyle = getStatusBadge(project.status);
  const whatsappUrl = `https://wa.me/595994195695?text=${encodeURIComponent(
    `Olá Natan, gostaria de saber mais sobre a arquitetura e detalhes da solução ${project.name} (Catálogo ENBK).`
  )}`;

  return (
    <div className="group relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-black/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]">
      {/* Subtle top corner gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-tr-2xl blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Header: Category & Status */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            {project.category}
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${statusStyle.bg}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${statusStyle.dot} animate-pulse`} />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-300">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="mt-6 pt-5 border-t border-slate-800/60">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Destaques de Arquitetura</span>
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Stack Pills & Action */}
      <div className="mt-8 pt-6 border-t border-slate-800/60">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/70 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Arquitetura Verificada</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
          >
            <span>Consultar Solução</span>
            <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
