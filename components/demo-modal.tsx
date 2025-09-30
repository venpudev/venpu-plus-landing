"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock } from "lucide-react"
import { useState } from "react"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    timeSlot: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Demo requested:", formData)
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", company: "", timeSlot: "" })
    onClose()
  }

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-poppins flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-primary" />
            Solicitar Demo Gratuita
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="demo-name">Nombre completo *</Label>
            <Input
              id="demo-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-email">Email *</Label>
            <Input
              id="demo-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@automotora.cl"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-phone">Teléfono *</Label>
            <Input
              id="demo-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+56 9 1234 5678"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-company">Automotora</Label>
            <Input
              id="demo-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Nombre de tu automotora"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-time">Horario preferido</Label>
            <Select value={formData.timeSlot} onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un horario" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {slot}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">¿Qué incluye la demo?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Demostración personalizada de 30 minutos</li>
              <li>• Análisis de tu situación actual</li>
              <li>• Propuesta de implementación</li>
              <li>• Respuesta a todas tus preguntas</li>
            </ul>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Agendar Demo
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
