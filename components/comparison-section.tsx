"use client"

import { motion, Variants } from "framer-motion"
import { ChaosVsOrderInfographic } from "./chaos-vs-order-infographic"

const textFillVariants: Variants = {
  hidden: { backgroundSize: "0% 100%" },
  visible: { backgroundSize: "100% 100%", transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
};

export function ComparisonSection() {
  return (
    // Esta sección puede tener el fondo blanco o gris claro, dependiendo de tu diseño final
    <div className="relative py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué cambiar a Venpu Plus?
        </motion.h2>

        {/* CAMBIO APLICADO AQUÍ */}
        <motion.p 
          className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Deja atrás los métodos tradicionales y abraza la nueva era de la gestión automotriz con IA.
        </motion.p>

        <ChaosVsOrderInfographic />

      </div>
    </div>
  )
}