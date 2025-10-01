"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { PlayCircle, MessageSquare, User, Building, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// --- Componente del Modal para la Demo ---
function DemoModal({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    plan: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    alert("¡Gracias! Tu solicitud ha sido enviada.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Bienvenido 👋</DialogTitle>
          <DialogDescription className="text-center">
            Estás a pocos pasos de agendar tu demo.
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative overflow-x-hidden h-[300px] pt-4">
          <AnimatePresence>
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">¿Cuál es tu nombre?</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="name" placeholder="Ej. Juan Pérez" className="pl-9" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">¿Cuál es el nombre de tu empresa?</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="company" placeholder="Ej. Automotora Chile" className="pl-9" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute w-full space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="email">¿Cuál es tu correo electrónico?</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="email" type="email" placeholder="Ej. info@automotora.cl" className="pl-9" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">¿Cuál es tu número de WhatsApp?</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="phone" type="tel" placeholder="Ej. +56912345678" className="pl-9" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full transition-colors ${step === 1 ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
                <span className={`w-2 h-2 rounded-full transition-colors ${step === 2 ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
            </div>
            <div className="flex gap-2">
                {step > 1 && <Button variant="ghost" onClick={prevStep}>Volver</Button>}
                {step === 1 ? (
                    <Button onClick={nextStep}>Siguiente</Button>
                ) : (
                    <Button onClick={handleSubmit}>Agendar Demo</Button>
                )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


// --- Componente Principal: HeroSection ---
export function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = "3-PRw2M48Bg";
  const phoneNumber = "56966972963";

  const expertMessage = encodeURIComponent("¡Hola! Vengo desde la web de Venpu Plus y me gustaría hablar con un experto.");
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
              <DemoModal>
                <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold">
                  Solicitar Demo
                </Button>
              </DemoModal>
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-bold" asChild>
                <a href={expertWppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Hablar con un experto
                </a>
              </Button>
            </div>
            
            <div className="mt-6 flex justify-center md:justify-start">
                 <Button size="sm" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:text-white" asChild>
                    <a href="#">Crear Cuenta y prueba por 30 días</a>
                </Button>
            </div>

            <p className="mt-8 text-sm text-gray-300">
              +200 automotoras confían en nosotros ● Soporte 24/7
            </p>
          </motion.div>

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