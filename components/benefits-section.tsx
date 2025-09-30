"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, ShoppingCart, TrendingUp, FileText, Globe, Zap } from "lucide-react"

const benefits = [
  { icon: LayoutDashboard, title: "CRM Automotoras", description: "Gestión completa de inventario, leads y clientes con IA integrada." },
  { icon: ShoppingCart, title: "Marketplace", description: "Publica automáticamente en MercadoLibre, Yapo y más plataformas." },
  { icon: Zap, title: "AutoLead", description: "IA que filtra y califica leads automáticamente por probabilidad de compra." },
  { icon: FileText, title: "Informes", description: "Analytics avanzados con predicciones de ventas y ROI en tiempo real." },
  { icon: Globe, title: "Sitios Web Premium", description: "Landing pages optimizadas para conversión con SEO automático." },
  { icon: TrendingUp, title: "Marketing", description: "Campañas automatizadas en Facebook, Instagram y Google Ads." },
];

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="beneficios">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Todo lo que necesitas en una sola plataforma
        </motion.h2>

        <motion.p 
          className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Desde la gestión de inventario hasta el cierre de ventas, Venpu Plus automatiza todo tu proceso comercial.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={benefit.title}
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Sub-componente para las tarjetas de beneficios (rediseñado)
const BenefitCard = ({ icon: Icon, title, description, delay }: {icon: React.ElementType, title: string, description: string, delay: number}) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center 
                 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: delay, duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mb-5">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 flex-grow">{description}</p>
      <a href="#" className="mt-4 text-slate-800 font-bold flex items-center group">
        Ver más 
        <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </motion.div>
  )
}