"use client"

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'

export const PIXEL_ID = '852759850740700'

// Función para registrar el evento PageView
export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// Función para registrar eventos personalizados
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options)
  }
}

export const MetaPixel = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Dispara el evento PageView en cada cambio de ruta
    pageview()
  }, [pathname])

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      onLoad={() => {
        // Inicializa el píxel una vez que el script se ha cargado
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('init', PIXEL_ID)
        }
      }}
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
  )
}