"use client"

import { useState } from 'react' // Asegúrate de que useState esté importado
import { event as trackMetaEvent } from './meta-pixel';

export function DemoModal({ children }: { children: React.ReactNode }) {
  // CORRECCIÓN: Definir el estado para el formulario
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    plan: "",
  });

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData); // Ahora 'formData' está definido
    
    trackMetaEvent('Lead', {
        content_name: 'Submit_Demo_Modal',
        value: 1,
        currency: 'CLP',
    });
    
    alert("¡Gracias! Tu solicitud ha sido enviada.");
  };

  // ... (el resto de tu componente se mantiene igual, incluyendo el return con el formulario)
}