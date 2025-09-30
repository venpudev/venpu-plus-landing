// tailwind.config.ts
import type { Config } from 'tailwindcss'
import textFillStroke from 'tailwindcss-text-fill-stroke'; // <-- IMPORTA EL PLUGIN AQUÍ

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // ... (tus keyframes existentes: glow, orbit, ping-slow)
        "glow": {
          "0%, 100%": { boxShadow: '0 0 20px -5px rgba(251, 191, 36, 0.4)' },
          "50%": { boxShadow: '0 0 30px 0px rgba(251, 191, 36, 0.6)' },
        },
        "orbit": {
          "0%": { transform: 'rotate(0deg) translateX(55px) rotate(0deg)' },
          "100%": { transform: 'rotate(360deg) translateX(55px) rotate(-360deg)' },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: 'scale(1.5)',
            opacity: '0'
          }
        },
        // Nuevo keyframe para el fondo degradado animado (estilo Vambe)
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // Keyframe para la animación de relleno de texto
        "text-fill": {
          "0%": { "background-size": "0% 100%" },
          "100%": { "background-size": "100% 100%" },
        },
      },
      animation: {
        // ... (tus animaciones existentes)
        "glow": "glow 3s ease-in-out infinite",
        "orbit": "orbit 8s linear infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        // Nuevas animaciones
        "background-pan": "background-pan 10s ease infinite",
        "text-fill": "text-fill 1s ease-out forwards", // Para un llenado único al cargar
      },
      backgroundImage: {
        // Nuevos degradados personalizados
        "vambe-gradient-blue": "linear-gradient(90deg, #6b21a8, #3b82f6, #60a5fa, #8b5cf6)", // Morado a azul claro
        "vambe-gradient-yellow": "linear-gradient(90deg, #f97316, #fcd34d, #fde047, #f97316)", // Naranja a amarillo
      },
      backgroundSize: {
        "200%": "200% 100%", // Para la animación de fondo
      },
    },
  },
  plugins: [textFillStroke], // <-- AÑADE EL PLUGIN AQUÍ
}
export default config