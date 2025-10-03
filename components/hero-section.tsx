"use client"

// ... (otras importaciones como useState, motion, etc.)
import { event as trackMetaEvent } from './meta-pixel'; // 1. Importa nuestra función segura

export function HeroSection() {
  // ... (código de useState para el video, etc.)
  
  const handleWppClick = (message: string) => {
    // 2. Llama a nuestra función para registrar el evento 'Lead'
    trackMetaEvent('Lead', { content_name: 'Hero_WhatsApp_Click' });
    
    if (typeof window !== "undefined") {
      const phoneNumber = "56966972963";
      const encodedMessage = encodeURIComponent(message);
      const wppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(wppUrl, '_blank');
    }
  };

  // ... (el resto del componente se mantiene igual, asegúrate de que los botones llamen a handleWppClick)
}