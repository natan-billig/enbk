import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";
import { CheckCircle2, Layers, ExternalLink, ArrowRight, Activity, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Producción":
        return {
          bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
          dot: "bg-emerald-500",
        };
      case "Activo":
        return {
          bg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
          dot: "bg-cyan-400",
        };
      case "En Expansión":
        return {
          bg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
          dot: "bg-amber-400",
        };
    }
  };

  const statusStyle = getStatusBadge(project.status);
  const whatsappUrl = `https://wa.me/595994195695?text=${encodeURIComponent(
    `Hola Natan, me gustaría saber más sobre la arquitectura y detalles de la solución ${project.name} (enbk.vercel.app/${project.slug}).`
  )}`;

  const canonicalUrl = `enbk.vercel.app/${project.slug}`;

  return (
    <div className="group relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden">
      {/* Subtle top corner gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-tr-2xl blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      {/* Visual Image Mockup / Thumbnail with Link */}
      <Link
        href={`/${project.slug}`}
        className="relative block w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/80 cursor-pointer"
        aria-label={`Ver detalles de ${project.name}`}
      >
        <Image
          src={project.previewImage}
          alt={`Preview de la interfaz de ${project.name}`}
          width={600}
          height={375}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-cyan-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs flex items-center gap-1.5 shadow-lg">
            <span>Abrir Ficha Técnica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* URL Shortcut Tag Overlay */}
        <div className="absolute bottom-2 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/70 text-[11px] font-mono text-cyan-300 font-semibold shadow-sm">
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span>{canonicalUrl}</span>
          </span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header: Category & Status */}
          <div className="flex items-center justify-between gap-4 mb-3">
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
          <Link href={`/${project.slug}`} className="block group/title">
            <h3 className="text-2xl font-bold text-white group-hover/title:text-cyan-300 transition-colors flex items-center justify-between">
              <span>{project.name}</span>
              <span className="text-xs font-mono font-normal text-slate-500">{project.version}</span>
            </h3>
          </Link>
          <p className="mt-1 text-sm font-medium text-slate-300">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm text-slate-400 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Key Features List */}
          <div className="mt-5 pt-4 border-t border-slate-800/60">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Aspectos de Arquitectura</span>
            </h4>
            <ul className="space-y-2">
              {project.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack Pills & Direct Actions */}
        <div className="mt-6 pt-5 border-t border-slate-800/60">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/70 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <Link
              href={`/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/70 transition-all flex-1 justify-center"
            >
              <span>Ficha Técnica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {project.liveAppUrl && (
              <a
                href={project.liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir sistema ${project.name} en producción`}
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors"
                title="Acceder al Sistema en Producción"
              >
                <span>App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar sobre ${project.name} por WhatsApp`}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 transition-colors"
              title="Hablar por WhatsApp"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
