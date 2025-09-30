"use client"

import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button" // <--- BOTÓN IMPORTADO COMENTADO
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const linkClasses = "relative text-gray-800 font-bold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-yellow-400 border-b border-yellow-500"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <a href="/" className="flex items-center">
              <Image 
                src="/logo-plus.png" 
                alt="Venpu Plus Logo" 
                width={160} 
                height={40} 
                priority
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className={linkClasses}>Beneficios</a>
            <a href="#casos" className={linkClasses}>Casos de Éxito</a>
            <a href="#planes" className={linkClasses}>Planes</a>
            {/* <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Demo Gratis
            </Button> */} {/* <--- BOTÓN COMENTADO */}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-yellow-500 pt-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#beneficios" className="text-gray-800 hover:text-black font-bold transition-colors">Beneficios</a>
              <a href="#casos" className="text-gray-800 hover:text-black font-bold transition-colors">Casos de Éxito</a>
              <a href="#planes" className="text-gray-800 hover:text-black font-bold transition-colors">Planes</a>
              <div className="flex flex-col space-y-2 pt-2">
                {/* <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Demo Gratis
                </Button> */} {/* <--- BOTÓN COMENTADO */}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}