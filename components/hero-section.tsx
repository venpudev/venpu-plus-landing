"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { PlayCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFacebookPixel } from 'react-facebook-pixel'

export function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoId = "3-PRw2M48Bg";
  const phoneNumber = "56966972963";
  const { track } = useFacebookPixel();

  const handleWppClick = (message: string) => {
    track('Lead', { content_name: 'Hero_WhatsApp_Click' });
    
    // CORRECCIÓN: Nos aseguramos de que window solo se llame en el cliente
    if (typeof window !== "undefined") {
      const encodedMessage = encodeURIComponent(message);
      const wppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(wppUrl, '_blank');
    }
  };

  const demoMessage = "¡Hola! Vengo desde la web de Venpu Plus y me gustaría solicitar una demo...";
  const expertMessage = "¡Hola! Vengo desde la web de Venpu Plus y me gustaría hablar con un experto...";

  // El resto del componente se mantiene igual...
  return (
    <section>
        {/* ... */}
        <Button size="lg" className="bg-yellow-400..." onClick={() => handleWppClick(demoMessage)}>
            Solicitar Demo
        </Button>
        <Button size="lg" className="bg-green-500..." onClick={() => handleWppClick(expertMessage)}>
            <MessageSquare className="w-5 h-5 mr-2" />
            Hablar por WhatsApp
        </Button>
        {/* ... */}
    </section>
  )
}