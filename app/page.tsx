// app/page.tsx

import { Suspense } from 'react'
import { PageContent } from "@/components/page-content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Ahora TODO está dentro del Suspense, garantizando que el error no volverá a ocurrir */}
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}>
        <PageContent />
      </Suspense>
    </div>
  );
}