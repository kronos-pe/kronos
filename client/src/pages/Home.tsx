import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, ArrowRight, Zap, TrendingUp, Cpu, BarChart3 } from "lucide-react";
import { useState } from "react";

/**
 * KRONOS Landing Page
 * Design Philosophy: Minimalist Corporate Dark with Neon Accents
 * - Dark background (#0a0a0a) with purple-cyan gradients
 * - Clean typography hierarchy (Geist bold + Inter regular)
 * - Generous whitespace and asymmetric layouts
 * - Subtle animations and neon glow effects
 */

export default function Home() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <img 
              src="/images/kronos-logo.png" 
              alt="KRONOS Logo" 
              className="h-16 w-auto"
            />
          </a>
          <div className="flex items-center gap-6">
            <a href="#demo" className="text-sm text-gray-300 hover:text-white transition">Demo</a>
            <a href="#team" className="text-sm text-gray-300 hover:text-white transition">Equipo</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">Contacto</a>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Problem Statement */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Tus operaciones</span>
                  <span className="block">se detienen.</span>
                  <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Nosotros las predecimos.
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Pérdidas millonarias por fallas inesperadas. Decisiones reactivas en lugar de predictivas. Eficiencia operativa comprometida.
                </p>
              </div>

              {/* Problem bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-200">Downtime no planificado que impacta la producción</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-200">Mantenimiento reactivo en lugar de predictivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-200">Ineficiencia operativa y oportunidades perdidas</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a href="mailto:rodhub09@gmail.com" className="inline-block">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg rounded-lg group">
                    Solicitar Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </Button>
                </a>
                <p className="text-sm text-gray-400 mt-3">Contacta con nosotros para una demo personalizada</p>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-hero-bg-cgbfWNomZ6xUVYWgLvAfzM.webp"
                alt="KRONOS Analytics Dashboard"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">La Solución: KRONOS</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Analítica predictiva de próxima generación que transforma datos en decisiones inteligentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="group p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition bg-white/5 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Predicción de Fallas</h3>
              <p className="text-gray-300">
                Detecta anomalías antes de que ocurran. Reduce downtime hasta 85% con modelos IA entrenados en datos industriales reales.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition bg-white/5 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Optimización en Tiempo Real</h3>
              <p className="text-gray-300">
                Ajusta variables operativas automáticamente. Maximiza eficiencia energética y rendimiento con simulaciones controladas.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition bg-white/5 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Simulación Inteligente</h3>
              <p className="text-gray-300">
                Prueba escenarios sin riesgo. Modela caudal, carga, temperatura y más para encontrar la configuración óptima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Demo Image */}
            <div className="relative h-full min-h-screen">
              <img
                src="/images/kronos-dashboard.png"
                alt="KRONOS Dashboard Demo"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            {/* Right: Demo Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mira KRONOS en Acción</h2>
                <p className="text-xl text-gray-300">
                  Dashboard intuitivo que convierte datos complejos en insights accionables. Visualiza predicciones, optimizaciones y métricas clave en tiempo real.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  <div>
                    <p className="font-semibold">Predicciones de 7 días</p>
                    <p className="text-sm text-gray-400">Planifica con confianza</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                  <div>
                    <p className="font-semibold">Alertas Inteligentes</p>
                    <p className="text-sm text-gray-400">Notificaciones antes del problema</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  <div>
                    <p className="font-semibold">Recomendaciones Automáticas</p>
                    <p className="text-sm text-gray-400">Acciones sugeridas basadas en IA</p>
                  </div>
                </div>
              </div>

            <a href="mailto:rodhub09@gmail.com" className="inline-block">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-6 text-lg rounded-lg group">
                Probar Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cuatro pasos simples para transformar tu operación industrial
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/kronos-how-it-works.webp"
              alt="How KRONOS Works"
              className="w-full rounded-2xl"
            />
          </div>

          {/* Step Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
            {[
              { number: "1", title: "Ingesta", desc: "Conexión a SCADA en tiempo real" },
              { number: "2", title: "Procesamiento", desc: "Modelos IA procesan y analizan patrones" },
              { number: "3", title: "Insights", desc: "Dashboard genera insights accionables" },
              { number: "4", title: "Optimización", desc: "Mejora continua de operaciones" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "Predicción", label: "Detección temprana de fallas", icon: <BarChart3 className="w-8 h-8" /> },
              { metric: "Optimización", label: "Mejora continua de operaciones", icon: <TrendingUp className="w-8 h-8" /> },
              { metric: "Confiabilidad", label: "Decisiones basadas en datos", icon: <Zap className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-white/5 text-center group hover:border-purple-500/50 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.metric}
                </p>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expertos en ingeniería, data science y operaciones industriales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Rodrigo Urquizo", role: "CEO", bg: "from-purple-600 to-purple-400", desc: "Liderando la transformación industrial" },
              { name: "Stefano Nuñez", role: "CTO", bg: "from-cyan-600 to-cyan-400", desc: "Experto en tecnología predictiva" }
            ].map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredTeamMember(idx)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className={`w-full aspect-square bg-gradient-to-br ${member.bg} rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-purple-400 font-semibold">{member.role}</p>
                {hoveredTeamMember === idx && (
                  <p className="text-sm text-gray-300 mt-2">{member.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-16 border-t border-white/10 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
                <img 
                  src="/images/kronos-logo.png" 
                  alt="KRONOS Logo" 
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-gray-400">
                Transformando la operación industrial con inteligencia predictiva de próxima generación.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">Inicio</a>
                <a href="#demo" className="text-gray-400 hover:text-white transition text-sm block">Demo</a>
                <a href="#team" className="text-gray-400 hover:text-white transition text-sm block">Equipo</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition text-sm block">Contacto</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="space-y-3">
                <a href="mailto:rodhub09@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">rodhub09@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/company/kronos-predictive-analytics" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2026 KRONOS. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacidad</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Términos</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
