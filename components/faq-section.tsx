"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Asegúrate de tener este componente en tu UI library

const faqItems = [
    {
        question: "¿Necesito conocimientos técnicos para usar Venpu Plus?",
        answer: "No, en absoluto. Nuestra plataforma está diseñada para ser extremadamente intuitiva y fácil de usar. Además, nuestro plan de onboarding te guiará paso a paso para que saques el máximo provecho desde el primer día."
    },
    {
        question: "¿Cómo funciona la integración con MercadoLibre y otros portales?",
        answer: "Nos conectamos directamente a través de la API oficial de cada portal. Esto significa que cuando actualizas un vehículo en Venpu (precio, fotos, descripción), se actualiza automáticamente en todos los canales, ahorrándote horas de trabajo manual."
    },
    {
        question: "¿La IA realmente contacta a los clientes por sí sola?",
        answer: "Sí. Nuestro Chat Conversacional con IA puede iniciar conversaciones, calificar el interés del comprador, responder preguntas frecuentes e incluso agendar una visita. Todo esto, mientras tú y tu equipo se enfocan en cerrar la venta."
    },
    {
        question: "¿Qué tipo de soporte ofrecen?",
        answer: "Ofrecemos soporte prioritario 24/7 a través de WhatsApp y email para nuestros clientes del Plan Empresa y Corporativo. Nuestro equipo está compuesto por expertos en el rubro automotriz que entienden tu negocio."
    },
    {
        question: "¿Existen contratos de permanencia mínima?",
        answer: "No. Creemos en la flexibilidad y en el valor de nuestra plataforma. Puedes cancelar tu suscripción en cualquier momento, sin penalizaciones."
    }
];

export function FaqSection() {
    return (
        <section className="py-20 sm:py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.h2 
                    className="text-center text-4xl sm:text-5xl font-bold text-slate-900 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Preguntas Frecuentes
                </motion.h2>
                
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <AccordionItem value={`item-${index}`} className="border-b border-slate-200">
                                <AccordionTrigger className="text-lg text-left font-semibold py-6 hover:no-underline text-slate-800">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}