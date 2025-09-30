import { Suspense } from 'react' // <-- 1. IMPORTA SUSPENSE
import './globals.css'
// ... (otras importaciones como fuentes, etc.)

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
        {/* 2. ENVUELVE A 'children' CON SUSPENSE */}
        <Suspense fallback={<div>Cargando...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
