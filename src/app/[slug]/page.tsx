import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  ProjectItem,
} from "@/data/projects";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Layers,
  Cpu,
  BarChart3,
  HelpCircle,
  Copy,
  Terminal,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto Não Encontrado • Catálogo ENBK",
      description: "O sistema solicitado não foi localizado no catálogo da ENBK.",
    };
  }

  return {
    title: `${project.name} • Catálogo de Sistemas ENBK`,
    description: project.summary,
    keywords: [
      project.name,
      project.category,
      ...project.techStack,
      "ENBK",
      "Natan Billig",
      "Catálogo de Software",
    ],
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      images: [project.previewImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      images: [project.previewImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/595994195695?text=${encodeURIComponent(
    `Olá Natan! Acessei a ficha técnica do ${project.name} (enbk.vercel.app/${project.slug}) e gostaria de conversar sobre implantação, arquitetura ou orçamento.`
  )}`;

  const canonicalUrl = `enbk.vercel.app/${project.slug}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#06080D] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header / Bar */}
      <header className="sticky top-0 z-40 bg-[#06080D]/85 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-cyan-400" />
            <span>Voltar ao Catálogo ENBK</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{project.status}</span>
            </span>

            {project.liveAppUrl && (
              <a
                href={project.liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 transition-all"
              >
                <span>Acessar App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Solicitar Demonstração</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14 w-full space-y-16 sm:space-y-20">
        {/* Breadcrumb & Metadata Header */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 font-semibold">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300">
              {project.version}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-400">
              Release {project.releaseDate}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              {project.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-300 max-w-4xl leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* Quick Info Bar & Shortcut */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Atalho no catálogo:
              </span>
              <code className="px-2.5 py-1 rounded-md bg-slate-950 border border-cyan-500/30 text-cyan-300 font-mono text-xs sm:text-sm font-semibold select-all">
                {canonicalUrl}
              </code>
              {project.liveAppUrl && (
                <a
                  href={project.liveAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold hover:border-emerald-400 transition-colors"
                >
                  <span>Abrir Aplicação Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <div className="text-xs font-mono text-slate-400">
              Público-Alvo:{" "}
              <span className="text-slate-200 font-medium">{project.clientSegment}</span>
            </div>
          </div>
        </section>

        {/* Visual Mockup & Interface Preview */}
        <section className="space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-950 shadow-2xl shadow-cyan-950/20 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080D] via-transparent to-transparent opacity-10 pointer-events-none z-10" />
            <Image
              src={project.previewImage}
              alt={`Interface do sistema ${project.name}`}
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Painel operacional e módulos integrados</span>
            </div>
            <span>Status da Infra: 100% Operacional</span>
          </div>
        </section>

        {/* Executive Summary & Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>Visão Executiva do Sistema</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-cyan-500/20 shadow-lg space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Destaques de Entrega</span>
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problem vs. Solution Breakdown */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              O Problema Real vs. A Solução Arquitetada
            </h2>
            <p className="text-slate-400 text-sm">
              Engenharia direcionada a gargalos reais de produtividade, conformidade e risco financeiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* O Problema */}
            <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/10 border border-rose-900/30 space-y-4">
              <div className="flex items-center gap-2.5 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>O Cenário Desafiador (Antes)</span>
              </div>
              <ul className="space-y-3">
                {project.problemSolved.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A Solução */}
            <div className="p-6 sm:p-8 rounded-2xl bg-cyan-950/15 border border-cyan-800/40 space-y-4">
              <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>A Solução com {project.name}</span>
              </div>
              <ul className="space-y-3">
                {project.solutionOverview.map((sol, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Modules Breakdown */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Arquitetura Modular</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Módulos Principais do Sistema
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              Cada componente projetado para operar com autonomia, alta coesão e baixo acoplamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.modules.map((module, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                      {module.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Módulo 0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{module.name}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{module.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 space-y-2">
                  {module.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Business Key Benefits & Metrics */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Impacto &amp; Eficiência</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Métricas e Benefícios de Negócio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.keyBenefits.map((benefit, bIdx) => (
              <div
                key={bIdx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                {benefit.metric && (
                  <div className="text-2xl font-black font-mono text-emerald-400">
                    {benefit.metric}
                  </div>
                )}
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Tech Stack Breakdown */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Engenharia de Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Stack Tecnológica Categorizada
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.techStackCategorized.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                  {cat.category}
                </span>
                <ul className="space-y-1.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security & LGPD Compliance */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-950 border border-emerald-500/25 space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-white">Governança, Cibersegurança &amp; LGPD</h3>
              <p className="text-xs text-slate-400 font-mono">
                Conformidade com a Lei 13.709/2018 e padrões de segurança ISO 27001
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.securityHighlights.map((sec, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{sec}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {project.faq && project.faq.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">Perguntas Frequentes</h2>
            </div>

            <div className="space-y-4">
              {project.faq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <h3 className="text-base font-semibold text-white">{item.question}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA Banner */}
        <section className="relative rounded-2xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-cyan-950/40 via-slate-900 to-[#06080D] border border-cyan-500/40 text-center space-y-6 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Pronto para implementar o {project.name}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Converse diretamente com o desenvolvedor e arquiteto da solução para alinhar implantação, 
              customizações para o seu fluxo corporativo ou acesso a ambiente de testes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Falar Diretamente no WhatsApp</span>
            </a>

            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
            >
              <span>Ver Outros Sistemas do Catálogo</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 bg-[#06080D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} ENBK • Sistema {project.name} ({project.version})
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Página Principal
            </Link>
            <span>•</span>
            <Link href="/#projetos" className="hover:text-cyan-400 transition-colors">
              Catálogo Completo
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
