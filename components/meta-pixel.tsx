"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Script from 'next/script'

// Función para registrar eventos, exportada para ser usada en otros componentes
export const trackMetaEvent = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
};

export function MetaPixel() {
  const pixelId = '852759850740700'; // Tu ID de Píxel

  useEffect(() => {
    // El evento 'PageView' se dispara en cada cambio de ruta
    if (pixelId) {
      trackMetaEvent('PageView');
    }
  }, [pathname, pixelId]);

  if (!pixelId) {
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];