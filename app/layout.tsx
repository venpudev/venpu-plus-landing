import { Suspense } from 'react'
import './globals.css'
import { GoogleAnalytics } from '@/components/google-analytics'
import { Analytics } from '@vercel/analytics/react' // <-- 1. IMPORTA EL COMPONENTE DE VERCEL

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
        <Suspense fallback={<div>Cargando...</div>}>
          {children}
        </Suspense>
        <GoogleAnalytics />
        <Analytics /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
      </body>
    </html>
  )
}