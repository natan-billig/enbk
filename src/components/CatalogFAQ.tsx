import React from "react";
import { HelpCircle } from "lucide-react";

export function CatalogFAQ() {
  const faqs = [
    {
      q: "¿Qué es el catálogo de sistemas ENBK?",
      a: "Es el ecosistema oficial de soluciones de software diseñadas y desarrolladas por Natan Billig. Incluye ERP corporativo con gobernanza fiscal (ENBIK ERP), fintech personal multimoneda (Kofre) y pipeline de automatización bancaria con IA (Control Inteligente de Cheques). Cada sistema cuenta con su propia página de ficha técnica accesible directamente por su slug.",
    },
    {
      q: "¿Cómo acceder a la documentación y ficha técnica de cada sistema?",
      a: "Puedes ingresar directamente mediante el atajo en la URL, como enbk.vercel.app/enbik, enbk.vercel.app/kofre o enbk.vercel.app/controle-cheques, o haciendo clic en la tarjeta del proyecto en la cuadrícula principal del catálogo.",
    },
    {
      q: "¿Los sistemas pueden personalizarse para el flujo de mi empresa?",
      a: "Sí. La arquitectura modular y desacoplada fue diseñada precisamente para admitir extensiones a medida, integración mediante API/Webhooks con sistemas contables existentes y reglas de negocio específicas de tu operación.",
    },
    {
      q: "¿Cómo funciona la contratación e implementación?",
      a: "La atención y la evaluación del alcance se realizan directamente con el arquitecto y desarrollador. Simplemente haz clic en el botón de contacto por WhatsApp para coordinar una demostración en vivo, viabilidad técnica y propuesta de implementación.",
    },
    {
      q: "¿Cuál es la política de seguridad y privacidad de datos?",
      a: "Todas las soluciones cumplen con rigurosos estándares de protección de datos y normativas de privacidad, emplean cifrado en reposo y en tránsito (AES-256 / TLS 1.3), aislamiento de datos vía Row Level Security (RLS) en PostgreSQL y cero credenciales en repositorios de código.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 border-t border-slate-800/60 bg-slate-900/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resuelve tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes del Catálogo
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Información sobre el funcionamiento de los sistemas, implementación corporativa y seguridad.
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
