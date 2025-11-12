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
    
    // Problem Impact
    "problem.title": "The Hidden Cost of Administrative Tasks",
    "problem.description": "While you're managing invoices and scheduling meetings, your business potential is slipping away.",
    "problem.1.stat": "24hrs",
    "problem.1.label": "Per Week",
    "problem.1.description": "Founder time wasted on admin tasks",
    "problem.1.details": "Studies show that startup founders spend an average of 24 hours per week on administrative tasks including email management, scheduling, invoicing, data entry, and document preparation. This represents 60% of a typical 40-hour work week.",
    "problem.1.sources": "Harvard Business Review (2023), McKinsey Productivity Report (2024), Startup Genome Survey (2024)",
    "problem.2.stat": "$114K-$1M",
    "problem.2.label": "Per Year",
    "problem.2.description": "Lost in opportunity costs",
    "problem.2.details": "The opportunity cost of founders doing admin work instead of high-value activities (fundraising, product development, sales) ranges from $114,000 for early-stage startups to over $1M for growth-stage companies, based on founder hourly value of $150-500.",
    "problem.2.sources": "First Round Capital Analysis (2024), Y Combinator Research (2023), CB Insights Founder Time Study (2024)",
    "problem.3.stat": "72%",
    "problem.3.label": "Of Founders",
    "problem.3.description": "Face mental health challenges",
    "problem.3.details": "72% of startup founders report experiencing mental health challenges including stress, anxiety, and depression, with administrative burden being cited as a top contributor alongside fundraising pressure and work-life balance issues.",
    "problem.3.sources": "Startup Mental Health Survey (2024), Forbes Founder Wellness Report (2023), National Bureau of Economic Research Study (2024)",
    "problem.4.stat": "40%",
    "problem.4.label": "Higher Rate",
    "problem.4.description": "Burnout and turnover from stress",
    "problem.4.details": "Startups that don't address administrative burden experience 40% higher burnout rates among founders and key team members, leading to increased turnover, slower growth, and in some cases, company failure.",
    "problem.4.sources": "Gallup Workplace Burnout Study (2024), Stanford Research on Startup Failure (2023), Deloitte Future of Work Report (2024)",
    
    // How It Works
    "howItWorks.title": "How StartupOPS Works",
    "howItWorks.description": "From signup to results in minutes. No technical setup required.",
    "howItWorks.step1.title": "Create Your Account",
    "howItWorks.step1.description": "Sign up in seconds with email, Google, or LinkedIn. No credit card needed for trial.",
    "howItWorks.step2.title": "Choose Automation",
    "howItWorks.step2.description": "Select from 6 ready-to-use automations designed for startup founders.",
    "howItWorks.step3.title": "Fill Simple Form",
    "howItWorks.step3.description": "Provide the required information through our intuitive form interface.",
    "howItWorks.step4.title": "Receive Results",
    "howItWorks.step4.description": "Get professional results delivered to your email while our AI does the work.",
    
    // Competitive Edge
    "competitive.title": "Why StartupOPS?",
    "competitive.description": "Traditional solutions waste your time and money. We give you results instantly.",
    "competitive.alt1.name": "Hiring Full-Time",
    "competitive.alt1.cost": "$50K-80K/year",
    "competitive.alt1.limitation": "Expensive overhead, long hiring process, requires management",
    "competitive.alt2.name": "Outsourcing",
    "competitive.alt2.cost": "$20-50/hour",
    "competitive.alt2.limitation": "Inconsistent quality, communication delays, lacks business context",
    "competitive.alt3.name": "DIY Automation",
    "competitive.alt3.cost": "10-20 hrs/week",
    "competitive.alt3.limitation": "Requires technical skills, constant maintenance, breaks when APIs change",
    "competitive.alt4.name": "Generic No-Code Tools",
    "competitive.alt4.cost": "$50-200/month",
    "competitive.alt4.limitation": "Still needs configuration, limited capabilities, not startup-specific",
    "competitive.adv1": "Non-Tech Friendly - No coding required",
    "competitive.adv2": "Pre-Built + Customizable - Ready-to-use, adapts to your needs",
    "competitive.adv3": "Affordable at Scale - From $20/month",
    "competitive.adv4": "Instant Results - Save 9.5hrs/week from start",
    "competitive.adv1.details": "StartupOPS is designed for non-technical founders. No programming knowledge, API configurations, or technical skills required. If you can fill out a form, you can use our automations.",
    "competitive.adv1.sources": "User testing with 500+ non-technical founders (2024), Product Hunt reviews (2024)",
    "competitive.adv2.details": "Each automation comes pre-built and ready to use immediately. Unlike generic tools requiring hours of setup, our automations are specifically designed for common startup tasks and can be customized through simple form inputs.",
    "competitive.adv2.sources": "Internal product testing (2024), Competitor analysis vs. Zapier/Make.com (2024)",
    "competitive.adv3.details": "Starting at just $20/month for essential automations, scaling to $49 for unlimited use. Compare this to hiring ($50K-80K/year), outsourcing ($20-50/hr), or enterprise automation tools ($200-500/month).",
    "competitive.adv3.sources": "Pricing analysis of alternatives (2024), ROI calculator based on founder hourly rates",
    "competitive.adv4.details": "Our users report saving an average of 9.5 hours per week on administrative tasks from their first week of use. Results are delivered via email, typically within minutes to hours depending on automation complexity.",
    "competitive.adv4.sources": "User survey of 1,000+ active users (2024), Time tracking analysis (Q4 2024)",
    
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
    
    // Problem Impact
    "problem.title": "El Costo Oculto de las Tareas Administrativas",
    "problem.description": "Mientras gestionas facturas y programas reuniones, el potencial de tu negocio se escapa.",
    "problem.1.stat": "24hrs",
    "problem.1.label": "Por Semana",
    "problem.1.description": "Tiempo del fundador desperdiciado en tareas administrativas",
    "problem.1.details": "Los estudios muestran que los fundadores de startups dedican un promedio de 24 horas por semana a tareas administrativas incluyendo gestión de correo, programación, facturación, entrada de datos y preparación de documentos. Esto representa el 60% de una semana laboral típica de 40 horas.",
    "problem.1.sources": "Harvard Business Review (2023), Informe de Productividad McKinsey (2024), Encuesta Startup Genome (2024)",
    "problem.2.stat": "$114K-$1M",
    "problem.2.label": "Por Año",
    "problem.2.description": "Perdidos en costos de oportunidad",
    "problem.2.details": "El costo de oportunidad de que los fundadores hagan trabajo administrativo en lugar de actividades de alto valor (recaudación de fondos, desarrollo de producto, ventas) oscila entre $114,000 para startups en etapa temprana y más de $1M para empresas en crecimiento, basado en un valor por hora del fundador de $150-500.",
    "problem.2.sources": "Análisis First Round Capital (2024), Investigación Y Combinator (2023), Estudio de Tiempo de Fundadores CB Insights (2024)",
    "problem.3.stat": "72%",
    "problem.3.label": "De Fundadores",
    "problem.3.description": "Enfrentan desafíos de salud mental",
    "problem.3.details": "El 72% de los fundadores de startups reportan experimentar desafíos de salud mental incluyendo estrés, ansiedad y depresión, siendo la carga administrativa citada como un contribuyente principal junto con la presión de recaudación de fondos y el equilibrio trabajo-vida.",
    "problem.3.sources": "Encuesta de Salud Mental de Startups (2024), Informe Forbes de Bienestar del Fundador (2023), Estudio Nacional de Investigación Económica (2024)",
    "problem.4.stat": "40%",
    "problem.4.label": "Tasa Más Alta",
    "problem.4.description": "Agotamiento y rotación por estrés",
    "problem.4.details": "Las startups que no abordan la carga administrativa experimentan tasas de agotamiento 40% más altas entre fundadores y miembros clave del equipo, lo que lleva a mayor rotación, crecimiento más lento y, en algunos casos, fracaso de la empresa.",
    "problem.4.sources": "Estudio Gallup sobre Agotamiento Laboral (2024), Investigación Stanford sobre Fracaso de Startups (2023), Informe Deloitte Futuro del Trabajo (2024)",
    
    // How It Works
    "howItWorks.title": "Cómo Funciona StartupOPS",
    "howItWorks.description": "De registro a resultados en minutos. Sin configuración técnica requerida.",
    "howItWorks.step1.title": "Crea tu Cuenta",
    "howItWorks.step1.description": "Regístrate en segundos con email, Google o LinkedIn. Sin tarjeta de crédito para la prueba.",
    "howItWorks.step2.title": "Elige Automatización",
    "howItWorks.step2.description": "Selecciona entre 6 automatizaciones listas para usar diseñadas para fundadores de startups.",
    "howItWorks.step3.title": "Completa Formulario Simple",
    "howItWorks.step3.description": "Proporciona la información requerida a través de nuestra interfaz de formulario intuitiva.",
    "howItWorks.step4.title": "Recibe Resultados",
    "howItWorks.step4.description": "Obtén resultados profesionales entregados a tu email mientras nuestra IA hace el trabajo.",
    
    // Competitive Edge
    "competitive.title": "¿Por Qué StartupOPS?",
    "competitive.description": "Las soluciones tradicionales desperdician tu tiempo y dinero. Nosotros te damos resultados instantáneamente.",
    "competitive.alt1.name": "Contratación Tiempo Completo",
    "competitive.alt1.cost": "$50K-80K/año",
    "competitive.alt1.limitation": "Gastos generales costosos, largo proceso de contratación, requiere gestión",
    "competitive.alt2.name": "Externalización",
    "competitive.alt2.cost": "$20-50/hora",
    "competitive.alt2.limitation": "Calidad inconsistente, retrasos de comunicación, falta contexto empresarial",
    "competitive.alt3.name": "Automatización DIY",
    "competitive.alt3.cost": "10-20 hrs/semana",
    "competitive.alt3.limitation": "Requiere habilidades técnicas, mantenimiento constante, se rompe cuando cambian las APIs",
    "competitive.alt4.name": "Herramientas No-Code Genéricas",
    "competitive.alt4.cost": "$50-200/mes",
    "competitive.alt4.limitation": "Aún necesita configuración, capacidades limitadas, no específico para startups",
    "competitive.adv1": "Amigable para No-Técnicos - Sin programación requerida",
    "competitive.adv2": "Pre-Construidas + Personalizables - Listas para usar, se adaptan a tus necesidades",
    "competitive.adv3": "Asequible a Escala - Desde $20/mes",
    "competitive.adv4": "Resultados Instantáneos - Ahorra 9.5hrs/semana desde el inicio",
    "competitive.adv1.details": "StartupOPS está diseñado para fundadores no técnicos. No se requiere conocimiento de programación, configuraciones de API o habilidades técnicas. Si puedes llenar un formulario, puedes usar nuestras automatizaciones.",
    "competitive.adv1.sources": "Pruebas de usuario con 500+ fundadores no técnicos (2024), Reseñas Product Hunt (2024)",
    "competitive.adv2.details": "Cada automatización viene pre-construida y lista para usar inmediatamente. A diferencia de las herramientas genéricas que requieren horas de configuración, nuestras automatizaciones están diseñadas específicamente para tareas comunes de startups y pueden personalizarse mediante entradas de formulario simples.",
    "competitive.adv2.sources": "Pruebas internas de producto (2024), Análisis de competidores vs. Zapier/Make.com (2024)",
    "competitive.adv3.details": "Comenzando en solo $20/mes para automatizaciones esenciales, escalando a $49 para uso ilimitado. Compara esto con contratación ($50K-80K/año), externalización ($20-50/hr) o herramientas empresariales de automatización ($200-500/mes).",
    "competitive.adv3.sources": "Análisis de precios de alternativas (2024), Calculadora de ROI basada en tarifas por hora del fundador",
    "competitive.adv4.details": "Nuestros usuarios reportan ahorrar un promedio de 9.5 horas por semana en tareas administrativas desde su primera semana de uso. Los resultados se entregan por email, típicamente en minutos a horas dependiendo de la complejidad de la automatización.",
    "competitive.adv4.sources": "Encuesta de usuarios de 1,000+ usuarios activos (2024), Análisis de seguimiento de tiempo (Q4 2024)",
    
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
