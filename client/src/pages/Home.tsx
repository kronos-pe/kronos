import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-logo_eb00b5c5.png" 
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
      </motion.nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="space-y-6"
            >
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Tus operaciones
                  <br />
                  se detienen.
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Nosotros las predecimos.
                  </span>
                </h1>
              </div>

              <motion.p 
                className="text-lg text-gray-300 max-w-xl"
                variants={fadeInUp}
              >
                Pérdidas millonarias por fallas inesperadas. Decisiones reactivas en lugar de predictivas. Eficiencia operativa comprometida.
              </motion.p>

              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Downtime no planificado que impacta la producción",
                  "Mantenimiento reactivo en lugar de predictivo",
                  "Ineficiencia operativa y oportunidades perdidas"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="mailto:rodhub09@gmail.com"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 group">
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </Button>
              </motion.a>

              <motion.p 
                className="text-sm text-gray-500"
                variants={fadeInUp}
              >
                Contacta con nosotros para una demo personalizada
              </motion.p>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="relative h-96 lg:h-full"
              style={{ y: scrollY * 0.5 }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-industrial-context_8f0e2f0a.png"
                alt="Industrial Analytics"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">La Solución: KRONOS</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Analítica predictiva de próxima generación que transforma datos en decisiones inteligentes
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { 
                icon: "📊", 
                title: "Predicción de Fallas", 
                desc: "Detecta anomalías antes de que ocurran. Reduce downtime hasta 85% con modelos IA entrenados en datos industriales reales."
              },
              { 
                icon: "⚡", 
                title: "Optimización en Tiempo Real", 
                desc: "Ajusta variables operativas automáticamente. Maximiza eficiencia energética y rendimiento con simulaciones controladas."
              },
              { 
                icon: "🎯", 
                title: "Simulación Inteligente", 
                desc: "Prueba escenarios sin riesgo. Modela caudal, carga, temperatura y más para encontrar la configuración óptima."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="p-8 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/50 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Demo Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              className="relative h-full min-h-screen"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-dashboard-new_19d76289.png"
                alt="KRONOS Dashboard Demo"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>

            {/* Right: Demo Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mira KRONOS en Acción</h2>
                <p className="text-lg text-gray-300">
                  Dashboard intuitivo que convierte datos complejos en insights accionables. Visualiza predicciones, optimizaciones y métricas clave en tiempo real.
                </p>
              </div>

              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: "Predicciones de 7 días", desc: "Planifica con confianza" },
                  { title: "Alertas Inteligentes", desc: "Notificaciones antes del problema" },
                  { title: "Recomendaciones Automáticas", desc: "Acciones sugeridas basadas en IA" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 hover:border-cyan-500/50 transition"
                  >
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full" />
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="mailto:rodhub09@gmail.com"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 group">
                  Probar Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </Button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cuatro pasos simples para transformar tu operación industrial
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="relative mb-6"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-how-it-works-dark-aAhNmHckpUNBKs7XkPPj83.webp"
              alt="How KRONOS Works"
              className="w-full rounded-2xl"
            />
          </motion.div>

          {/* Step Details */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { number: "1", title: "Ingesta", desc: "Conexión a SCADA en tiempo real" },
              { number: "2", title: "Procesamiento", desc: "Modelos IA procesan y analizan patrones" },
              { number: "3", title: "Insights", desc: "Dashboard genera insights accionables" },
              { number: "4", title: "Optimización", desc: "Mejora continua de operaciones" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg group-hover:scale-110 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { metric: "Predicción", label: "Detección temprana de fallas", icon: <BarChart3 className="w-8 h-8" /> },
              { metric: "Optimización", label: "Mejora continua de operaciones", icon: <TrendingUp className="w-8 h-8" /> },
              { metric: "Confiabilidad", label: "Decisiones basadas en datos", icon: <Zap className="w-8 h-8" /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="p-8 rounded-xl border border-white/10 bg-white/5 text-center group hover:border-purple-500/50 transition"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">{item.metric}</h3>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300">
              Expertos en ingeniería, data science y operaciones industriales
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { initial: "R", name: "Rodrigo Urquizo", role: "CEO", color: "from-purple-500 to-purple-600" },
              { initial: "S", name: "Stefano Nuñez", role: "CTO", color: "from-cyan-500 to-cyan-600" }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="text-center group"
                onMouseEnter={() => setHoveredTeamMember(idx)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <motion.div
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-5xl font-bold text-white group-hover:scale-110 transition`}
                  whileHover={{ scale: 1.1 }}
                >
                  {member.initial}
                </motion.div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Brand */}
            <motion.div variants={fadeInUp}>
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663453519234/iPFDnW6gFzgVoApnM2eHbP/kronos-logo_eb00b5c5.png" 
                  alt="KRONOS Logo" 
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-gray-400">
                Transformando la operación industrial con inteligencia predictiva de próxima generación.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">Inicio</a>
                <a href="#demo" className="text-gray-400 hover:text-white transition text-sm block">Demo</a>
                <a href="#team" className="text-gray-400 hover:text-white transition text-sm block">Equipo</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition text-sm block">Contacto</a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp}>
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
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="border-t border-white/10 pt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© 2026 KRONOS. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition text-sm">Privacidad</a>
                <a href="#" className="text-gray-500 hover:text-white transition text-sm">Términos</a>
                <a href="#" className="text-gray-500 hover:text-white transition text-sm">Cookies</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
