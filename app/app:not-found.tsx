// app/not-found.tsx

import { Suspense } from 'react'
import Link from 'next/link'

function NotFoundContent() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-slate-800">404</h1>
      <p className="mt-4 text-xl text-slate-600">Página No Encontrada</p>
      <Link href="/" className="mt-6 inline-block bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg">
        Volver al Inicio
      </Link>
    </div>
  )
}

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Suspense fallback={<div>Cargando...</div>}>
        <NotFoundContent />
      </Suspense>
    </div>
  );
}