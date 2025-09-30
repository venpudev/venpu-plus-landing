"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section className="bg-slate-900" id="contacto">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <motion.div 
          className="relative max-w-4xl mx-auto bg-gradient-to-br from-blue-900/80 to-slate-900 rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Efecto de luz de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-radial-gradient from-blue-500/30 to-transparent blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              ¿Listo para <span className="text-yellow-300">transformar</span> tu automotora?
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo Venpu Plus puede revolucionar tu negocio automotriz.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.button 
                className="w-full sm:w-auto bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg
                           transition-all duration-300 hover:bg-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/30 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                // Este botón debería abrir el 'demo-modal.tsx' que ya existe en tu proyecto.
                // onClick={() => { /* Lógica para abrir el modal */ }}
              >
                Solicita tu Demo Gratuita
              </motion.button>
              
              <motion.a 
                href="https://wa.me/56912345678" // Reemplaza con tu número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-lg
                           border border-white/20 transition-all duration-300 hover:bg-white/20 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Hablar con un experto</span>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}