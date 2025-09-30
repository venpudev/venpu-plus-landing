"use client"

import { motion } from "framer-motion"
import { Facebook, MessageSquare, Phone, LayoutDashboard, Megaphone, TrendingUp, UserX, BrainCircuit, Bot, Search, Store } from "lucide-react"
import Image from "next/image"

// --- Componente Principal ---
export function ChaosVsOrderInfographic() {
  return (
    <motion.div
      className="relative max-w-6xl mx-auto my-16 p-6 sm:p-8 bg-gradient-to-br from-white to-slate-100 rounded-3xl shadow-2xl border border-slate-200/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 gap-4 items-center relative">
        
        {/* --- COLUMNA IZQUIERDA: CAOS --- */}
        <div className="flex flex-col items-center gap-6 text-center z-10">
          <h3 className="font-bold text-slate-600 tracking-wider text-sm md:text-base">MÉTODO TRADICIONAL</h3>
          <div className="grid grid-cols-2 gap-4">
            <IconCircle icon={Megaphone} color="orange" />
            <IconCircle icon={Facebook} color="orange" />
            <IconCircle icon={MessageSquare} color="orange" />
            <IconCircle icon={Phone} color="orange" />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <IconCircle icon={UserX} color="orange" size="large" />
            <p className="text-xs font-semibold text-slate-500 mt-2">Gestión Manual</p>
          </div>
        </div>

        {/* --- COLUMNA CENTRAL: NÚCLEO VENPU + IA Y TRÁFICO --- */}
        <div className="flex flex-col items-center justify-center z-10 gap-6">
          <VenpuAIBrain />
          <motion.div 
            className="w-full max-w-[220px] flex flex-col items-center text-center bg-white p-4 rounded-2xl shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h4 className="font-bold text-slate-700 text-sm mb-3">Tráfico</h4>
            <ul className="text-xs text-slate-600 font-medium list-none p-0 m-0 space-y-2 self-start">
                <li className="flex items-center gap-2"><Store className="w-4 h-4 text-blue-500"/> Marketplace</li>
                <li className="flex items-center gap-2"><Megaphone className="w-4 h-4 text-purple-500"/> Campañas ADS</li>
                <li className="flex items-center gap-2"><Search className="w-4 h-4 text-green-500"/> SEO</li>
            </ul>
          </motion.div>
        </div>

        {/* --- COLUMNA DERECHA: FLUJO VENPU PLUS --- */}
        <div className="flex flex-col items-center gap-4 text-center z-10">
           <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <h3 className="font-bold text-green-600 tracking-wider text-sm md:text-base">FLUJO VENPU PLUS</h3>
          </div>
          <div className="space-y-4">
            <BenefitItem icon={Bot} text="Chat Conversacional IA" />
            <BenefitItem icon={TrendingUp} text="Ventas Potenciadas" />
            <BenefitItem icon={LayoutDashboard} text="Control y Métricas" />
          </div>
        </div>
        
        {/* CAMBIO 3: Flechas Curvas con Animación en Bucle (Estilo Vambe) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" viewBox="0 0 1000 500">
          <defs>
            <marker id="arrowhead-green" markerWidth="5" markerHeight="3.5" refX="4.5" refY="1.75" orient="auto"><polygon points="0 0, 5 1.75, 0 3.5" fill="#22c55e" /></marker>
          </defs>
          <motion.path 
            d="M 250 380 Q 350 380, 490 380"
            stroke="#22c55e" fill="none" strokeWidth="2.5" strokeDasharray="6 8"
            markerEnd="url(#arrowhead-green)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -14 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path 
            d="M 500 320 Q 500 200, 500 150"
            stroke="#22c55e" fill="none" strokeWidth="2.5" strokeDasharray="6 8"
            markerEnd="url(#arrowhead-green)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -14 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0.5 }}
          />
          <motion.path 
            d="M 570 120 Q 650 130, 750 130"
            stroke="#22c55e" fill="none" strokeWidth="2.5" strokeDasharray="6 8"
            markerEnd="url(#arrowhead-green)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -14 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
          />
          <motion.path 
            d="M 570 120 Q 650 250, 750 250"
            stroke="#22c55e" fill="none" strokeWidth="2.5" strokeDasharray="6 8"
            markerEnd="url(#arrowhead-green)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -14 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1.5 }}
          />
          <motion.path 
            d="M 570 120 Q 650 370, 750 370"
            stroke="#22c55e" fill="none" strokeWidth="2.5" strokeDasharray="6 8"
            markerEnd="url(#arrowhead-green)"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -14 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 2 }}
          />
        </svg>
      </div>
    </motion.div>
  )
}

// --- Componentes Auxiliares ---
const IconCircle = ({ icon: Icon, color, size = 'normal' }: { icon: any; color: 'orange' | 'green'; size?: 'normal' | 'large' }) => {
    const sizeClasses = size === 'normal' ? 'size-10 sm:size-12' : 'size-20 sm:size-24';
    const iconSizeClasses = size === 'normal' ? 'size-5 sm:size-6' : 'size-10 sm:size-12';
    return (
      <div className={`rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 hover:!scale-110 hover:shadow-xl ${sizeClasses} ${
        color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
      }`}>
        <Icon className={iconSizeClasses} />
      </div>
    )
};

const BenefitItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="size-20 sm:size-24 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 hover:!scale-110 hover:shadow-xl bg-green-100 text-green-600">
      <Icon className="size-10 sm:size-12" />
    </div>
    <p className="text-xs font-semibold text-slate-600">{text}</p>
  </div>
);

const VenpuAIBrain = () => (
  <motion.div 
    className="relative size-32 md:size-40 flex items-center justify-center"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 rounded-full bg-yellow-400/50 animate-glow"></div>
    <div className="absolute -top-3 -left-3 size-10 bg-slate-800 text-yellow-300 rounded-full flex items-center justify-center shadow-lg animate-orbit">
        <BrainCircuit className="w-6 h-6" />
    </div>
    <div className="relative size-24 md:size-32 bg-white rounded-full flex items-center justify-center shadow-inner">
      <Image src="/logo-plus-icon.png" alt="Icono Venpu Plus" width={72} height={72} />
    </div>
  </motion.div>
);