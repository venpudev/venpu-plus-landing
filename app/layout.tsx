import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Venpu Plus - La nueva era para tu automotora con IA",
  description:
    "Publica tu stock, centraliza leads de todos los canales y aumenta tus cierres con IA. La evolución de AutoLead para automotoras en Chile.",
  keywords: "CRM automotriz, leads automotoras, IA automotriz, stock vehicular, marketing automotriz, Chile",
  openGraph: {
    title: "Venpu Plus - La nueva era para tu automotora con IA",
    description: "Publica tu stock, centraliza leads de todos los canales y aumenta tus cierres con IA.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
