import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.automations": "Automations",
    "nav.pricing": "Pricing",
    "nav.signIn": "Sign In",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.badge": "No APIs. No Integrations. Just Results.",
    "hero.title": "Give Founders Their Time Back",
    "hero.description": "Focus on business growth, not administrative tasks. Plug-and-play automations that save you time without requiring any technical setup or API connections.",
    "hero.cta": "Start Saving Time",
    "hero.trial": "14-day free trial • No credit card required",
    "hero.stat1.value": "24hrs",
    "hero.stat1.label": "Wasted Weekly",
    "hero.stat2.value": "9.5hrs",
    "hero.stat2.label": "Saved Weekly",
    "hero.stat3.value": "50M+",
    "hero.stat3.label": "Target Market",
    
    // Features
    "features.title": "Everything You Need to Reclaim Your Time",
    "features.description": "Plug-and-play automations designed specifically for startup founders. No technical setup, no API connections, no hassle.",
    "features.1.title": "No Setup Required",
    "features.1.description": "Plug & play automations with zero configuration. No API connections or technical knowledge needed.",
    "features.2.title": "Pre-Built & Ready",
    "features.2.description": "Six powerful automations ready to use immediately. Just select, submit, and receive results via email.",
    "features.3.title": "Instant Results",
    "features.3.description": "Save up to 9.5 hours per week from day one. Start reclaiming your time immediately.",
    "features.4.title": "Non-Tech Friendly",
    "features.4.description": "No coding or technical skills required. Built for founders, not developers.",
    "features.5.title": "Bilingual Support",
    "features.5.description": "Full English and Spanish language support for global founders.",
    "features.6.title": "Mobile-First",
    "features.6.description": "Fully responsive design. Work from anywhere, on any device.",
    
    // Automations
    "automations.title": "Ready-to-Use Automations",
    "automations.description": "No setup required. No APIs to connect. Just click, submit, and receive results.",
    "automations.try": "Try",
    "automations.howItWorks": "How it works:",
    "automations.requiredData": "Required Data:",
    
    // Pricing
    "pricing.title": "Choose Your Plan",
    "pricing.description": "From $20/month - No credit card for free trial",
    "pricing.monthly": "month",
    "pricing.mostPopular": "Most Popular",
    "pricing.getStarted": "Get Started",
    "pricing.contactSales": "Contact Sales",
    
    // CTA
    "cta.title": "Ready to Get Your Time Back?",
    "cta.description": "Join thousands of founders who are reclaiming their time and focusing on what really matters. No setup. No APIs. No hassle. Start saving 9.5 hours per week today.",
    "cta.button": "Start Your Free Trial",
    "cta.trial": "14-day free trial • No credit card required",
    
    // Footer
    "footer.tagline": "Give Founders Their Time Back",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.createdBy": "Created by",
    "footer.website": "Website",
    "footer.allRights": "All rights reserved.",
  },
  es: {
    // Header
    "nav.features": "Características",
    "nav.howItWorks": "Cómo Funciona",
    "nav.automations": "Automatizaciones",
    "nav.pricing": "Precios",
    "nav.signIn": "Iniciar Sesión",
    "nav.getStarted": "Comenzar",
    
    // Hero
    "hero.badge": "Sin APIs. Sin Integraciones. Solo Resultados.",
    "hero.title": "Devuelve el Tiempo a los Fundadores",
    "hero.description": "Enfócate en el crecimiento del negocio, no en tareas administrativas. Automatizaciones plug-and-play que te ahorran tiempo sin requerir configuración técnica ni conexiones de API.",
    "hero.cta": "Comienza a Ahorrar Tiempo",
    "hero.trial": "Prueba gratis de 14 días • Sin tarjeta de crédito",
    "hero.stat1.value": "24hrs",
    "hero.stat1.label": "Desperdiciadas Semanalmente",
    "hero.stat2.value": "9.5hrs",
    "hero.stat2.label": "Ahorradas Semanalmente",
    "hero.stat3.value": "50M+",
    "hero.stat3.label": "Mercado Objetivo",
    
    // Features
    "features.title": "Todo lo que Necesitas para Recuperar tu Tiempo",
    "features.description": "Automatizaciones plug-and-play diseñadas específicamente para fundadores de startups. Sin configuración técnica, sin conexiones de API, sin complicaciones.",
    "features.1.title": "Sin Configuración",
    "features.1.description": "Automatizaciones plug & play sin configuración. No se necesitan conexiones API ni conocimientos técnicos.",
    "features.2.title": "Pre-Construidas y Listas",
    "features.2.description": "Seis potentes automatizaciones listas para usar inmediatamente. Solo selecciona, envía y recibe resultados por email.",
    "features.3.title": "Resultados Instantáneos",
    "features.3.description": "Ahorra hasta 9.5 horas por semana desde el primer día. Comienza a recuperar tu tiempo inmediatamente.",
    "features.4.title": "Amigable para No-Técnicos",
    "features.4.description": "No se requiere programación ni habilidades técnicas. Diseñado para fundadores, no desarrolladores.",
    "features.5.title": "Soporte Bilingüe",
    "features.5.description": "Soporte completo en inglés y español para fundadores globales.",
    "features.6.title": "Mobile-First",
    "features.6.description": "Diseño totalmente responsive. Trabaja desde cualquier lugar, en cualquier dispositivo.",
    
    // Automations
    "automations.title": "Automatizaciones Listas para Usar",
    "automations.description": "Sin configuración requerida. Sin APIs que conectar. Solo haz clic, envía y recibe resultados.",
    "automations.try": "Probar",
    "automations.howItWorks": "Cómo funciona:",
    "automations.requiredData": "Datos Requeridos:",
    
    // Pricing
    "pricing.title": "Elige tu Plan",
    "pricing.description": "Desde $20/mes - Sin tarjeta de crédito para prueba gratis",
    "pricing.monthly": "mes",
    "pricing.mostPopular": "Más Popular",
    "pricing.getStarted": "Comenzar",
    "pricing.contactSales": "Contactar Ventas",
    
    // CTA
    "cta.title": "¿Listo para Recuperar tu Tiempo?",
    "cta.description": "Únete a miles de fundadores que están recuperando su tiempo y enfocándose en lo que realmente importa. Sin configuración. Sin APIs. Sin complicaciones. Comienza a ahorrar 9.5 horas por semana hoy.",
    "cta.button": "Comienza tu Prueba Gratis",
    "cta.trial": "Prueba gratis de 14 días • Sin tarjeta de crédito",
    
    // Footer
    "footer.tagline": "Devuelve el Tiempo a los Fundadores",
    "footer.product": "Producto",
    "footer.company": "Compañía",
    "footer.legal": "Legal",
    "footer.createdBy": "Creado por",
    "footer.website": "Sitio Web",
    "footer.allRights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
