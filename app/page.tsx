// app/page.tsx

import { Suspense } from 'react'
import { PageContent } from "@/components/page-content";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Cargando...</div>}>
        <PageContent />
      </Suspense>
    </div>
  );
}