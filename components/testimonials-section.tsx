"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, TrendingUp, Clock, CheckCircle } from "lucide-react"

const testimonials = [
  {
    quote: "El ROI fue inmediato. En el primer mes recuperamos la inversión y seguimos creciendo mes a mes.",
    name: "Carlos Mendoza",
    company: "RG Motorsport, Concepción, Chile",
    image: "/placeholder-user.jpg",
    metrics: [
      { icon: TrendingUp, value: "+156", label: "leads mensuales", color: "green" },
      { icon: Clock, value: "<30s", label: "Tiempo de respuesta", color: "blue" },
      { icon: CheckCircle, value: "22", label: "ventas cerradas", color: "purple" },
    ]
  },
  {
    quote: "La plataforma es increíblemente intuitiva. Unificar todo el stock y publicarlo con un clic es un cambio radical para nuestra operación.",
    name: "Ana González",
    company: "BuyCars Chile",
    image: "/placeholder-user.jpg",
    metrics: [
      { icon: Clock, value: "90%", label: "Menos tiempo operativo", color: "blue" },
      { icon: TrendingUp, value: "+200%", label: "Alcance de publicaciones", color: "green" },
      { icon: CheckCircle, value: "15", label: "Ventas extra el primer mes", color: "purple" },
    ]
  },
  {
    quote: "El soporte es de primer nivel y las métricas predictivas nos han dado una ventaja competitiva que no teníamos.",
    name: "Julio Infante",
    company: "Julio Infante Automotriz",
    image: "/placeholder-user.jpg",
    metrics: [
      { icon: TrendingUp, value: "3x", label: "ROI en campañas", color: "green" },
      { icon: Clock, value: "24/7", label: "Soporte efectivo", color: "blue" },
      { icon: CheckCircle, value: "100%", label: "Satisfacción del cliente", color: "purple" },
    ]
  }
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTestimonial = testimonials[activeIndex];

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4">
                 <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                 >
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Casos de éxito reales</h2>
                    <p className="mt-4 text-lg text-slate-600">Más de 200 automotoras en Chile ya confían en Venpu Plus para hacer crecer su negocio.</p>
                 </motion.div>

                 <motion.div 
                    className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-8 sm:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                 >
                    {/* Contenedor animado que cambia con el estado */}
                    <motion.div
                        key={activeIndex} // Esta 'key' fuerza la re-animación al cambiar de testimonio
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        {/* Columna Izquierda: Cita y Persona */}
                        <div className="flex flex-col">
                            <span className="text-9xl font-serif text-slate-200 leading-[0.5] -ml-4">“</span>
                            <p className="text-2xl font-medium text-slate-700 mt-2">{activeTestimonial.quote}</p>
                            <div className="mt-8 flex items-center gap-4">
                                <Image src={activeTestimonial.image} alt={activeTestimonial.name} width={64} height={64} className="rounded-full" />
                                <div>
                                    <p className="font-bold text-slate-800">{activeTestimonial.name}</p>
                                    <p className="text-sm text-slate-500">{activeTestimonial.company}</p>
                                    <div className="flex mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Columna Derecha: Métricas */}
                        <div className="space-y-4">
                            {activeTestimonial.metrics.map((metric, index) => (
                                <MetricCard key={index} icon={metric.icon} value={metric.value} label={metric.label} color={metric.color} />
                            ))}
                        </div>
                    </motion.div>
                 </motion.div>
                 
                 {/* Selector de Clientes */}
                 <div className="flex justify-center gap-4 mt-8">
                    {testimonials.map((testimonial, index) => (
                        <button key={index} onClick={() => setActiveIndex(index)} className="transition-transform hover:scale-110">
                            <Image 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                width={64} 
                                height={64} 
                                className={`rounded-full border-4 transition-all duration-300 ${activeIndex === index ? 'border-yellow-400' : 'border-slate-200 hover:border-slate-400'}`} 
                            />
                        </button>
                    ))}
                 </div>
            </div>
        </section>
    )
}

const MetricCard = ({ icon: Icon, value, label, color }: { icon: React.ElementType, value: string, label: string, color: string }) => {
    const colors: { [key: string]: string } = {
        green: "bg-green-100/70 text-green-700",
        blue: "bg-blue-100/70 text-blue-700",
        purple: "bg-purple-100/70 text-purple-700"
    };
    return (
        <div className={`rounded-2xl p-4 flex items-center gap-4 ${colors[color]}`}>
            <Icon className="w-7 h-7" />
            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm">{label}</p>
            </div>
        </div>
    )
};