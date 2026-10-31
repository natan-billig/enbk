"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080D]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Status */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/50 transition-all">
            <span className="font-mono font-bold text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
              E
            </span>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-extrabold text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
              ENBK
            </span>
          </div>

          {/* Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 ml-3 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-800/80 text-[11px] font-mono text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Catálogo Ativo</span>
          </div>
        </Link>

        {/* Navigation Anchors with Next.js Link */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          <Link
            href="/#sobre"
            className="hover:text-cyan-400 transition-colors hover:underline underline-offset-8 decoration-cyan-500/40"
          >
            Sobre
          </Link>
          <Link
            href="/#projetos"
            className="hover:text-cyan-400 transition-colors hover:underline underline-offset-8 decoration-cyan-500/40"
          >
            Catálogo
          </Link>
          <Link
            href="/#arquitetura"
            className="hover:text-cyan-400 transition-colors hover:underline underline-offset-8 decoration-cyan-500/40"
          >
            Arquitetura
          </Link>
          <Link
            href="/#faq"
            className="hover:text-cyan-400 transition-colors hover:underline underline-offset-8 decoration-cyan-500/40"
          >
            FAQ
          </Link>
          <Link
            href="/#contato"
            className="hover:text-cyan-400 transition-colors hover:underline underline-offset-8 decoration-cyan-500/40"
          >
            Contato
          </Link>
        </nav>

        {/* Direct Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/595994195695"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-400 border border-cyan-800/50 hover:border-cyan-400/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden px-6 pt-3 pb-6 bg-[#06080D]/95 border-b border-slate-800 backdrop-blur-xl flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 py-2 text-xs font-mono text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Status: Catálogo Ativo</span>
          </div>
          <Link
            href="/#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-300 hover:text-cyan-400 py-1"
          >
            Sobre
          </Link>
          <Link
            href="/#projetos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-300 hover:text-cyan-400 py-1"
          >
            Catálogo de Sistemas
          </Link>
          <Link
            href="/#arquitetura"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-300 hover:text-cyan-400 py-1"
          >
            Arquitetura
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-300 hover:text-cyan-400 py-1"
          >
            FAQ
          </Link>
          <Link
            href="/#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-slate-300 hover:text-cyan-400 py-1"
          >
            Contato
          </Link>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase text-slate-500">Atalhos dos Sistemas:</span>
            <Link
              href="/enbik"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-cyan-300 hover:underline"
            >
              • ENBIK ERP (/enbik)
            </Link>
            <Link
              href="/kofre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-cyan-300 hover:underline"
            >
              • Kofre (/kofre)
            </Link>
            <Link
              href="/controle-cheques"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-cyan-300 hover:underline"
            >
              • Controle Inteligente de Cheques (/controle-cheques)
            </Link>
          </div>
          <a
            href="https://wa.me/595994195695"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-600/20 text-cyan-300 border border-cyan-500/40"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
