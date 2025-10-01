"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"

export function WhatsAppFloat() {
  const phoneNumber = "56966972963"; // CAMBIO: Número actualizado
  const message = encodeURIComponent("¡Hola! Vengo desde la web de Venpu Plus y me gustaría más información.");
  const wppUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={wppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageSquare className="w-8 h-8 text-white" />
    </motion.a>
  )
}