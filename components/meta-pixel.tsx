"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export function MetaPixel() {
  const [pixelId, setPixelId] = useState<string | null>('852759850740700'); // Tu ID de Píxel aquí
  const pathname = usePathname();

  useEffect(() => {
    if (!pixelId) return;

    // Cargar y registrar el evento 'PageView' en cada cambio de ruta
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pathname, pixelId]);

  // Este componente no renderiza nada visible, solo maneja los scripts.
  return (
     <Script
      id="fb-pixel"
      strategy="afterInteractive"
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
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}