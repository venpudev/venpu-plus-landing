// ... (otras importaciones)
import { trackMetaEvent } from './meta-pixel'; // 1. Importa la nueva función

export function DemoModal({ children }: { children: React.ReactNode }) {
  // ... (código de useState para el formulario)

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    
    // 2. Llama a la función segura para registrar el evento
    trackMetaEvent('Lead', {
        content_name: 'Submit_Demo_Modal',
        value: 1,
        currency: 'CLP',
    });
    
    alert("¡Gracias! Tu solicitud ha sido enviada.");
  };

  // ... (el resto del componente se mantiene igual)
}