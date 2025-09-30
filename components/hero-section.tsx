"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PlayCircle, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full bg-[url('/fondo.png')] bg-cover bg-center" id="hero">
      <div className="absolute inset-0 bg-gray-900/50"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <MessageSquare className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
              <Button size="lg" variant="secondary">
                Solicitar Demo Gratis
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              +500 automotoras confían en nosotros  ●  Sorte 24/7
            </p>
          </motion.div>

          {/* Columna de Video/Imagen */}
          {/* CAMBIO: Se envuelve todo el bloque en una etiqueta <a> */}
          <a 
            href="https://www.youtube.com/watch?v=3-PRw2M48Bg" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Ver video demo de Venpu Plus en YouTube"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group w-full max-w-md aspect-video rounded-xl shadow-2xl overflow-hidden cursor-pointer">
                <Image 
                  src="/placeholder.jpg"
                  alt="Demo de Venpu Plus"
                  fill={true}
                  style={{objectFit: 'cover'}}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  )
}