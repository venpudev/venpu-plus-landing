import { Suspense } from 'react'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics' // <-- 1. IMPORTA EL COMPONENTE

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
        <GoogleAnalytics /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
        <Suspense fallback={<div>Cargando...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}