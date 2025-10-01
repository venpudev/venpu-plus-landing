import { Suspense } from 'react'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from '@/components/footer' // <-- 1. IMPORTA EL FOOTER

export const metadata = {
  title: 'Venpu Plus Landing',
  description: 'Transforma tu automotora con IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <GoogleAnalytics />
        <Suspense fallback={<div>Cargando...</div>}>
          {children}
        </Suspense>
        <Analytics />
        <Footer /> {/* <-- 2. AÑADE EL FOOTER AQUÍ */}
      </body>
    </html>
  )
}