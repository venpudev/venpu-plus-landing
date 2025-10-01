"use client"

import { motion, Variants } from "framer-motion"
import { LayoutDashboard, ShoppingCart, TrendingUp, FileText, Globe, Zap, Check } from "lucide-react"

const features = [
  { icon: LayoutDashboard, title: "CRM Automotoras", points: ["Gestión de inventario y leads", "Filtro de clientes con IA", "Comunicación centralizada"] },
  { icon: ShoppingCart, title: "Marketplace", points: ["Publicación automática en portales", "Stock siempre sincronizado", "Ahorro de tiempo masivo"] },
  { icon: Zap, title: "AutoLead", points: ["Calificación de leads automática", "Probabilidad de compra por IA", "Optimización de la inversión"] },
  { icon: FileText, title: "Informes", points: ["Analytics predictivos de ventas", "Seguimiento de ROI en tiempo real", "Reportes de rendimiento por canal"] },
  { icon: Globe, title: "Sitios Web Premium", points: ["Landing pages de alta conversión", "SEO automático para posicionamiento", "Diseño 100% adaptable a móviles"] },
  { icon: TrendingUp, title: "Marketing", points: ["Campañas automatizadas y optimizadas", "Integración con Facebook y Google Ads", "Segmentación inteligente de audiencias"] },
];

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Desde la gestión de inventario hasta el cierre de ventas, Venpu Plus automatiza todo tu proceso comercial.
          </p>
        </motion.div>

        <motion.div 
          className="flex gap-8 pb-8 -mx-4 px-4 overflow-x-auto snap-x snap-mandatory"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              icon={feature.icon} 
              title={feature.title} 
              points={feature.points} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon: Icon, title, points, index }: {icon: React.ElementType, title: string, points: string[], index: number}) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-[320px] bg-white rounded-2xl shadow-lg border border-slate-200/80 p-8 snap-center
                 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="bg-yellow-100 text-yellow-600 rounded-lg p-3">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <ul className="space-y-3 text-slate-500 flex-grow">
        {points.map(point => (
          <li key={point} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}