"use client"

import { motion, Variants } from "framer-motion" // <-- CORRECCIÓN 1
import { ChaosVsOrderInfographic } from "./chaos-vs-order-infographic"

const textFillVariants: Variants = { // <-- CORRECCIÓN 2
  hidden: { backgroundSize: "0% 100%" },
  visible: { backgroundSize: "100% 100%", transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
};

export function ComparisonSection() {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Fondo Degradado Animado */}
      <motion.div
        className="absolute inset-0 bg-vambe-gradient-blue bg-200% animate-background-pan opacity-90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Título Principal Animado */}
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 
                     bg-gradient-to-r from-white to-gray-200 text-fill-transparent 
                     bg-clip-text text-stroke-2 text-stroke-white-200 leading-tight"
          variants={textFillVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          ¿Por qué cambiar a Venpu Plus?
        </motion.h2>

        {/* Subtítulo Animado */}
        <motion.p 
          className="mt-4 text-xl text-white/80 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Deja atrás los métodos tradicionales y abraza la nueva era de la gestión automotriz con IA.
        </motion.p>

        {/* Aquí integramos nuestro diagrama de flujo */}
        <ChaosVsOrderInfographic />

      </div>
    </div>
  )
}