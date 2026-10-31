import React from "react";
import { HelpCircle, Sparkles } from "lucide-react";

export function CatalogFAQ() {
  const faqs = [
    {
      q: "O que é o catálogo de sistemas ENBK?",
      a: "É o ecossistema oficial de soluções de software desenhadas e desenvolvidas por Natan Billig. Inclui ERP corporativo com governança fiscal (ENBIK ERP), fintech pessoal multi-moeda (Kofre) e pipeline de automação bancária com IA (Controle Inteligente de Cheques). Cada sistema possui sua própria página de ficha técnica acessível diretamente pelo slug.",
    },
    {
      q: "Como acessar a documentação e ficha técnica de cada sistema?",
      a: "Você pode acessar diretamente pelo atalho na URL, como enbk.vercel.app/enbik, enbk.vercel.app/kofre ou enbk.vercel.app/controle-cheques, ou clicando no cartão do projeto na grade principal do catálogo.",
    },
    {
      q: "Os sistemas podem ser personalizados para o fluxo da minha empresa?",
      a: "Sim. A arquitetura modular e desacoplada foi construída justamente para permitir extensões sob medida, integração via API/Webhooks com sistemas contábeis já existentes e regras de negócio específicas da sua operação.",
    },
    {
      q: "Como funciona a contratação e implantação?",
      a: "O atendimento e a avaliação de escopo são conduzidos diretamente pelo arquiteto e desenvolvedor. Basta clicar no botão de contato via WhatsApp para alinhar demonstração ao vivo, viabilidade técnica e proposta de implantação.",
    },
    {
      q: "Qual a política de segurança de dados e privacidade?",
      a: "Todas as soluções seguem conformidade estrita com a LGPD (Lei 13.709/2018), utilizam criptografia em repouso e trânsito (AES-256 / TLS 1.3), contam com isolamento de dados via Row Level Security (RLS) no PostgreSQL e zero credenciais em código.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 border-t border-slate-800/60 bg-slate-900/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes do Catálogo
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Informações sobre o funcionamento dos sistemas, implantação corporativa e segurança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-2"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white flex items-start gap-2.5">
                <span className="text-cyan-400 font-mono text-sm mt-0.5 font-bold">0{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
