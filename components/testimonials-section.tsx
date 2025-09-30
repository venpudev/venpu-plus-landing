"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

// Datos de testimonios (puedes reemplazarlos con datos reales)
const testimonials = [
  {
    quote: "Venpu Plus transformó nuestra gestión de leads. La IA nos ahorra horas al día y hemos aumentado las ventas en un 40%.",
    name: "Julio Infante",
    company: "Julio Infante Automotriz",
    image: "/placeholder-user.jpg", // Reemplaza con la ruta a la imagen real
    metric: "+40% en Ventas"
  },
  {
    quote: "La plataforma es increíblemente intuitiva. Unificar todo el stock y publicarlo con un clic es un cambio radical para nuestra operación.",
    name: "Ana González",
    company: "BuyCars Chile",
    image: "/placeholder-user.jpg", // Reemplaza con la ruta a la imagen real
    metric: "90% Menos Tiempo"
  },
  {
    quote: "El soporte es de primer nivel y las métricas predictivas nos han dado una ventaja competitiva que no teníamos.",
    name: "Carlos Rojas",
    company: "Automotive Consulting",
    image: "/placeholder-user.jpg", // Reemplaza con la ruta a la imagen real
    metric: "ROI x3 en 6 meses"
  }
];

export function TestimonialsSection() {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="container mx-auto px-4">
                 <motion.h2 
                    className="text-center text-4xl sm:text-5xl font-bold text-slate-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                 >
                    Lo que dicen nuestros clientes
                 </motion.h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            company={testimonial.company}
                            image={testimonial.image}
                            metric={testimonial.metric}
                            delay={index * 0.1}
                        />
                    ))}
                 </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({ quote, name, company, image, metric, delay }: { quote: string, name: string, company: string, image: string, metric: string, delay: number }) => (
    <motion.div 
        className="bg-slate-50 border border-slate-200 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: delay, duration: 0.5 }}
    >
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
        </div>
        <p className="text-slate-600 italic flex-grow">"{quote}"</p>
        <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={image} alt={name} width={48} height={48} className="rounded-full" />
                <div>
                    <p className="font-bold text-slate-800">{name}</p>
                    <p className="text-sm text-slate-500">{company}</p>
                </div>
            </div>
            <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                {metric}
            </div>
        </div>
    </motion.div>
);