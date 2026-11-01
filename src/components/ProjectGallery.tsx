"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/projects";
import { CheckCircle2, Monitor, Sparkles, ChevronRight, Eye, ShieldCheck, Terminal } from "lucide-react";

interface ProjectGalleryProps {
  gallery: GalleryItem[];
  projectName: string;
}

export function ProjectGallery({ gallery, projectName }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const currentItem = gallery[activeIndex];

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
            <span>Galería de Módulos &amp; Opciones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explorador de Pantallas &amp; Funcionalidades
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-lg">
          Capturas reales tomadas directamente de la aplicación en producción. Selecciona cada módulo para inspeccionar sus opciones, flujos y capacidades operativas.
        </p>
      </div>

      {/* Screen Selector Tabs */}
      <div role="tablist" aria-label="Pantallas del sistema" className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {gallery.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? "bg-slate-900/90 border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/50"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2 w-full">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {item.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
              </div>
              <h4
                className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                  isActive ? "text-white" : "text-slate-300"
                }`}
              >
                {item.title}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Main Display Box */}
      <div
        id={`panel-${currentItem.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentItem.id}`}
        className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl space-y-0"
      >
        {/* Screenshot Viewport */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80 group">
          <Image
            src={currentItem.image}
            alt={`${projectName} - ${currentItem.title}`}
            width={1440}
            height={900}
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-30 pointer-events-none" />

          {/* Top metadata pill */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 text-xs font-mono text-cyan-300 font-semibold shadow-md">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentItem.badge}</span>
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10 hidden sm:flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-slate-300">
              Captura Real en Producción • 1440x900
            </span>
          </div>
        </div>

        {/* Detailed Explanation for this screen */}
        <div className="p-6 sm:p-8 space-y-6 bg-slate-900/60">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Detalle Técnico &amp; Operativo
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400">{currentItem.subtitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentItem.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl pt-1">
              {currentItem.description}
            </p>
          </div>

          {/* Functional Options List */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Opciones y Capacidades Disponibles en Esta Pantalla:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {currentItem.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
