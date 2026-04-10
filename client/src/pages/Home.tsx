import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight, Zap, TrendingUp, Cpu, BarChart3 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

/**
 * KRONOS Landing Page
 * Style: Palantir-inspired, sharp geometry, high contrast, minimalist.
 */

export default function Home() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const basePath = import.meta.env.BASE_URL || "/";
  
  const emailBody = "Hola equipo KRONOS,%0D%0A%0D%0AMe gustaría solicitar una demostración de la plataforma para mi empresa.%0D%0A%0D%0AQuedo atento/a,%0D%0A[Tu Nombre]";
  const mailtoLink = `mailto:kronos.ind.analytics@gmail.com?subject=Solicitud de Demo de KRONOS&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-[#070707] text-gray-100 font-sans selection:bg-cyan-900 selection:text-white"
         style={{ 
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      {/* Navigation */}
      <nav className="fixed top-[2px] w-full bg-[#070707]/90 backdrop-blur-md border-b border-white/5 z-40 transition-all">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="https://kronos-pe.github.io/kronos/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={`${basePath}images/logo.png`} 
              alt="KRONOS Logo" 
              className="h-9 w-auto"
            />
            <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">Kronos</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#demo" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Demo</a>
            <a href="#team" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Equipo</a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contacto</a>
            <a href={mailtoLink}>
              <Button className="bg-white hover:bg-gray-200 text-black rounded-none px-6 py-5 text-xs uppercase tracking-widest font-bold transition-all border border-transparent">
                Solicitar Demo
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center pt-24 pb-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Problem Statement */}
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-cyan-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">KRONOS</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white uppercase">
                  <span className="block">Fallas y anomalías</span>
                  <span className="block">en tus operaciones</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">Nosotros las predecimos</span>
                </h1>
                <p className="text-base lg:text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l border-white/10 pl-6">
                  Pérdidas económicas por fallas inesperadas. Decisiones reactivas en lugar de predictivas. Eficiencia operativa comprometida.
                </p>
              </div>

              {/* Problem bullets */}
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <div className="flex items-start gap-4">
                  <span className="text-cyan-500">{"//"}</span>
                  <span>Procesamiento de datos provenientes de SCADA</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-purple-500">{"//"}</span>
                  <span>Análisis predictivo para detectar anomalías y anticipar fallas</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-cyan-500">{"//"}</span>
                  <span>Análisis prescriptivo con IA para toma de decisiones estratégicas</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col items-start gap-3">
                <a href={mailtoLink} className="inline-block group">
                  <Button className="bg-transparent hover:bg-white hover:text-black text-white border border-white/20 rounded-none px-6 py-5 text-sm uppercase tracking-widest font-bold transition-all">
                    Solicitar Demo
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Contacta con nosotros para una demo personalizada</p>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-[40vh] lg:h-[65vh] max-h-[550px] flex items-center justify-center w-full">
              {/* Sharp decorative borders */}
              <div className="absolute inset-0 border border-white/5 bg-[#0a0a0a]">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></div>
              </div>
              <img
                src={`${basePath}images/kronos-hero.webp`}
                alt="KRONOS Analytics System"
                className="w-full h-full object-cover z-10 rounded-lg p-1"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 border-t border-white/5 relative bg-[#050505]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-purple-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Transformación</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">LA SOLUCIÓN: KRONOS</h2>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed">
                Analítica predictiva de próxima generación que transforma datos en decisiones inteligentes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
            {/* Benefit 1 */}
            <div className="group p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Zap className="w-8 h-8 text-cyan-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Procesamiento de datos</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Limpia, estructura y procesa datos provenientes de SCADA
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <TrendingUp className="w-8 h-8 text-purple-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Predicción de Fallas</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Detecta anomalías antes de que ocurran. Reduce downtime con modelos de ML entrenados en datos industriales reales.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-10 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Cpu className="w-8 h-8 text-gray-300 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Simulación Inteligente</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Prueba escenarios sin riesgo. Modela caudal, carga, temperatura y más para encontrar la configuración óptima.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-24 border-t border-white/5 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Top: Demo Image full width */}
            <div className="w-full relative group">
              <div className="absolute inset-0 border border-white/10 bg-[#0a0a0a] overflow-hidden -z-10"></div>
              <img
                src={`${basePath}images/kronos-dashboard.png`}
                alt="KRONOS Dashboard Demo"
                className="w-full h-auto max-h-[70vh] object-contain border border-white/5 rounded-lg"
              />
            </div>

            {/* Bottom: Demo Content */}
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center mt-8 gap-12">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-cyan-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Interfaz Integrada</span>
                  <div className="h-px w-8 bg-cyan-500"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">MIRA A KRONOS EN ACCIÓN</h2>
                <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-center">
                  Dashboard intuitivo que convierte datos complejos en insights accionables. Visualiza predicciones y métricas clave en tiempo real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/5 pt-12">
                {[
                  { title: "Predicciones con ventana de tiempo ajustable", desc: "Planifica con confianza" },
                  { title: "Alertas inteligentes", desc: "Notificaciones antes del problema" },
                  { title: "Recomendaciones automáticas", desc: "Acciones sugeridas basadas en IA" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="mb-4 font-mono text-xs text-gray-400 group-hover:text-cyan-400 transition-colors border border-white/10 px-3 py-1 bg-white/[0.02]">0{idx + 1}</div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-200 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href={mailtoLink} className="inline-block group">
                  <Button className="bg-white hover:bg-gray-200 text-black rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all">
                    Probar Demo
                    <ArrowRight className="ml-3 w-4 h-4 text-black group-hover:translate-x-2 transition-transform inline" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20"
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }}>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-purple-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Trazabilidad Operativa</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">CÓMO FUNCIONA</h2>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed mt-4">
                Cuatro pasos simples para transformar tu operación industrial
              </p>
            </div>
          </div>

          <div className="relative mb-12 border border-white/10 bg-black">
            <img
              src={`${basePath}images/kronos-how-it-works.png`}
              alt="How KRONOS Works"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-b border-white/5">
            {[
              { title: "Ingesta", desc: "Conexión a SCADA en tiempo real" },
              { title: "Procesamiento", desc: "Modelos de IA procesan y analizan patrones" },
              { title: "Insights", desc: "Dashboard genera insights accionables" },
              { title: "Optimización", desc: "Mejora continua de operaciones" }
            ].map((step, idx) => (
              <div key={idx} className="p-8 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors last:border-r-0">
                <div className="font-mono text-xs text-purple-500 mb-6 border border-purple-500/30 inline-block px-2 py-1">PASO 0{idx + 1}</div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-white mb-3">{step.title}</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-24 border-t border-white/5">
         <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { metric: "Predicción", label: "Detección temprana de fallas", icon: <BarChart3 className="w-5 h-5" /> },
              { metric: "Optimización", label: "Mejora continua de operaciones", icon: <TrendingUp className="w-5 h-5" /> },
              { metric: "Confiabilidad", label: "Decisiones basadas en datos", icon: <Zap className="w-5 h-5" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-12 border border-white/5 hover:bg-white/[0.03] transition-colors text-center group">
                <div className="w-12 h-12 bg-transparent border border-white/10 rounded-sm flex items-center justify-center mx-auto mb-8 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-widest mb-4 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent uppercase">
                  {item.metric}
                </h3>
                <p className="text-gray-500 text-sm font-light tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 border-t border-white/5 bg-[#050505] relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="text-center mb-20">
             <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-8 bg-gray-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Leadership</span>
                <div className="h-px w-8 bg-gray-500"></div>
              </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">NUESTRO EQUIPO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {[
              { name: "Rodrigo Urquizo", role: "CEO", bg: "border-purple-500/50 hover:border-purple-400" },
              { name: "Stefano Nuñez", role: "CTO", bg: "border-cyan-500/50 hover:border-cyan-400" }
            ].map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer relative flex flex-col items-center text-center"
                onMouseEnter={() => setHoveredTeamMember(idx)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                {/* 
                  AQUÍ CAMBIAS EL TAMAÑO DE LOS CUADRADOS:
                  Por defecto he puesto "w-48 h-48" (aprox 192px).
                  - Más pequeño: "w-40 h-40" o "w-32 h-32".
                  - Más grande: "w-56 h-56" o "w-64 h-64".
                */}
                <div className={`w-48 h-48 border ${member.bg} bg-black/50 mb-6 flex items-center justify-center text-white text-5xl font-light tracking-wider transition-all duration-500 group-hover:bg-white/[0.03]`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg uppercase tracking-widest text-white">{member.name}</h3>
                <p className="text-xs text-gray-400 tracking-[0.2em] font-semibold mt-2">{member.role}</p>
                <div className={`h-[1px] w-0 bg-white mt-4 transition-all duration-500 ${hoveredTeamMember === idx ? 'w-full' : ''}`}></div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="https://kronos-pe.github.io/kronos/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                <img 
                  src={`${basePath}images/logo.png`} 
                  alt="KRONOS Logo" 
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-sm font-light text-gray-500 max-w-sm leading-relaxed">
                Transformando la operación industrial con análisis predictivo y prescriptivo basado en IA.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navegación</h4>
              <div className="space-y-4">
                <a href="/" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Inicio</a>
                <a href="#demo" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Demo</a>
                <a href="#team" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Equipo</a>
                <a href="#contact" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Contacto</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Contacto</h4>
              <div className="space-y-4">
                <a href={mailtoLink} className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors border border-transparent hover:border-white/10 p-2 -ml-2 rounded-sm">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-light">kronos.ind.analytics@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/company/kronos-predictive-analytics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors border border-transparent hover:border-white/10 p-2 -ml-2 rounded-sm">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-light">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600 font-mono tracking-wider">© 2026 KRONOS. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Privacidad</a>
              <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Términos</a>
              <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
