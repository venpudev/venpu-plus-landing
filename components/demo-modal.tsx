"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Building, Mail, Phone } from "lucide-react"
import { useFacebookPixel } from 'react-facebook-pixel'; // 1. IMPORTAR EL HOOK

export function DemoModal({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    plan: "",
  });

  const { track } = useFacebookPixel(); // 2. INICIALIZAR EL HOOK DEL PÍXEL

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Formulario enviado:", formData);
    
    // 3. DISPARAR EL EVENTO 'LEAD' AL ENVIAR EL FORMULARIO
    track('Lead', {
        content_name: 'Submit_Demo_Modal',
        value: 1, // Puedes asignar un valor monetario a este lead si lo deseas
        currency: 'CLP',
    });
    
    alert("¡Gracias! Tu solicitud ha sido enviada.");
  };

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        {/* ... (resto del código del modal sin cambios) ... */}
        {/* Lógica de botones del modal */}
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
                <span className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
            </div>
            <div className="flex gap-2">
                {step > 1 && <Button variant="ghost" onClick={prevStep}>Volver</Button>}
                {step === 1 ? (
                    <Button onClick={nextStep}>Siguiente</Button>
                ) : (
                    <Button onClick={handleSubmit}>Agendar Demo</Button>
                )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}