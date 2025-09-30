"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre Venpu Plus para mi automotora.")
    window.open(`https://wa.me/56912345678?text=${message}`, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  )
}
