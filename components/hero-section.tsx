"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { PlayCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = "3-PRw2M48Bg";
  const phoneNumber = "56966972963"; // NÚMERO DE WHATSAPP ACTUALIZADO

  const demoMessage = encodeURIComponent("¡Hola! Vengo desde la web de Venpu Plus y me gustaría solicitar una demo para mi automotora. ¿Podrían indicarme los próximos pasos? ¡Gracias!");
  const expertMessage = encodeURIComponent("¡Hola! Vengo desde la web de Venpu Plus y me gustaría hablar con un experto para resolver algunas dudas sobre los planes y la plataforma. ¡Quedo atento!");

  const demoWppUrl = `https://wa.me/${phoneNumber}?text=${demoMessage}`;
  const expertWppUrl = `https://wa.me/${phoneNumber}?text=${expertMessage}`;

  return (
    <section className="relative w-full bg-[url('/fondo.png')] bg-cover bg-center" id="hero">
      <div className="absolute inset-0 bg-gray-900/60"></div>
      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white leading-tight">
              La nueva era para tu automotora: <br />
              <span className="text-yellow-400">Venpu Plus con IA</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0">
              Publica tu stock, centraliza leads de todos los canales y aumenta tus cierres con IA.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* CAMBIO: Botón de Demo ahora en amarillo */}
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold" asChild>
                <a href={demoWppUrl} target="_blank" rel="noopener noreferrer">Solicitar Demo</a>
              </Button>
              {/* CAMBIO: Botón de Crear Cuenta con estilo secundario (blanco) */}
              <Button size="lg" variant="secondary" asChild>
                <a href="#">Crear Cuenta y prueba por 30 días</a>
              </Button>
            </div>
            
            <div className="mt-6 flex justify-center md:justify-start">
                 <a href={expertWppUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    O habla con un experto
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-300">
              +200 automotoras confían en nosotros ● Soporte 24/7
            </p>
          </motion.div>

          {/* CÓDIGO DEL VIDEO RESTAURADO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-video rounded-xl shadow-2xl overflow-hidden">
              {playVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                  title="Video Corporativo Venpu"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div 
                  className="relative group w-full h-full cursor-pointer"
                  onClick={() => setPlayVideo(true)}
                >
                  <Image 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Previsualización del video de Venpu Plus"
                    fill={true}
                    style={{objectFit: 'cover'}}
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}