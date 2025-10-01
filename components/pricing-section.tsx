"use client"
import { motion } from "framer-motion"
import { Check, ShieldCheck, Clock, Award, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const phoneNumber = "56966972963"; // Número de WhatsApp centralizado

const plans = [
    {
        planName: "Plan Pyme",
        subtitle: "Para comenzar",
        price: "$79.990",
        priceDetails: "/ mes",
        initialPayment: "$99.000",
        features: [
            "Sitio web catálogo profesional",
            "Stock replicado en Venpu, web y Mercado Libre",
            "Panel con IA integrada para filtrar leads",
            "Soporte técnico incluido",
            "Métricas básicas de rendimiento",
            "Integración WhatsApp Business"
        ],
        ctaText: "Quiero empezar con Pyme",
        isRecommended: false,
        wppMessage: "¡Hola! Me interesa el Plan Pyme y me gustaría empezar."
    },
    {
        planName: "Plan Empresa",
        subtitle: "Para crecer",
        price: "$149.000",
        priceDetails: "x 6 meses",
        priceAfter: ", luego a $199.000 / mes",
        initialPayment: "$99.000",
        features: [
            "Todo lo del Plan Pyme",
            "Campañas Ads con hasta 10 publicaciones",
            "Difusión en canales asociados a Venpu",
            "Analytics avanzados con predicciones",
            "Automatización de seguimiento de leads",
            "Integración con CRM existente",
            "Soporte prioritario 24/7"
        ],
        ctaText: "Quiero crecer con Empresa",
        isRecommended: true,
        wppMessage: "¡Hola! Me interesa la oferta del Plan Empresa y quiero empezar."
    },
    {
        planName: "Plan Corporativo",
        subtitle: "Para concesionarios grandes",
        price: "Personalizado",
        priceDetails: null,
        priceAfter: null,
        initialPayment: null,
        features: [
            "Todo lo del Plan Empresa",
            "Automatizaciones avanzadas personalizadas",
            "Campañas Ads ilimitadas",
            "Control Panel avanzado + integración IA",
            "API personalizada para integraciones",
            "Consultor dedicado y Onboarding",
            "SLA garantizado"
        ],
        ctaText: "Solicitar propuesta Corporativa",
        isRecommended: false,
        wppMessage: "¡Hola! Me gustaría solicitar una propuesta para el Plan Corporativo de Venpu Plus."
    }
];

export function PricingSection() {
    return (
        <section className="py-20 sm:py-28 bg-slate-50" id="planes">
             <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* CAMBIO 2: Se añade la volanta/cintillo sobre el titular */}
                    <p className="font-bold text-yellow-500 uppercase tracking-wider mb-2">Precios Transparentes</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12">Planes simples para tu crecimiento</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <PricingCard 
                            key={plan.planName}
                            {...plan}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                    <FeatureHighlight icon={Award} text="Garantía de satisfacción" />
                    <FeatureHighlight icon={Clock} text="Soporte 24/7" />
                    <FeatureHighlight icon={ShieldCheck} text="Sin contratos de permanencia" />
                </div>
                <p className="text-center text-slate-500 mt-8">
                    ¿Necesitas algo diferente? <a href="#contacto" className="font-semibold text-yellow-600 hover:underline">Contáctanos para un plan personalizado</a>
                </p>
             </div>
        </section>
    )
}

const PricingCard = (props: (typeof plans)[0] & { delay: number }) => {
    const basePlanFeature = props.features.find(f => f.toLowerCase().includes("todo lo del plan"));
    const additionalFeatures = props.features.filter(f => !f.toLowerCase().includes("todo lo del plan"));
    const wppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(props.wppMessage)}`;

    return (
        <motion.div 
            className={`relative w-full bg-white rounded-2xl shadow-lg flex flex-col ${props.isRecommended ? 'border-yellow-400 border-4 shadow-yellow-400/20 -translate-y-4' : 'border-slate-200 border'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: props.delay, duration: 0.7 }}
        >
            {props.isRecommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 font-bold text-sm px-4 py-1 rounded-full">MÁS POPULAR</div>}
            <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-800 text-center">{props.planName}</h3>
                <p className="text-center text-sm text-slate-500">{props.subtitle}</p>
                
                <div className="text-center mt-6 min-h-[100px] flex flex-col justify-center">
                    {props.price !== "Personalizado" ? (
                        <>
                            {props.planName === "Plan Empresa" && <span className="text-sm font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-md mb-2 self-center">OFERTA</span>}
                            <div className="flex items-baseline justify-center gap-2">
                                <span className="text-5xl font-extrabold text-slate-900">{props.price}</span>
                                {props.priceDetails && <span className="text-lg text-slate-500">{props.priceDetails}</span>}
                            </div>
                            {props.priceAfter && <p className="text-sm text-slate-500">{props.priceAfter}</p>}
                            {props.initialPayment && <p className="text-sm text-slate-500 mt-1">+ Pago inicial: {props.initialPayment}</p>}
                        </>
                    ) : (
                        <span className="text-4xl font-extrabold text-slate-900">{props.price}</span>
                    )}
                </div>
                
                <div className="mt-8 border-t pt-8 flex-grow">
                    {basePlanFeature && (
                        <div className="bg-slate-100 p-3 rounded-lg mb-6">
                            <div className="flex items-center gap-3">
                                <PlusCircle className="w-5 h-5 text-slate-600 shrink-0" />
                                <span className="text-slate-800 font-bold">{basePlanFeature}</span>
                            </div>
                        </div>
                    )}

                    {additionalFeatures.length > 0 && props.planName !== 'Plan Pyme' && <p className="text-xs uppercase font-bold text-slate-400 mb-4">MÁS LOS BENEFICIOS:</p>}
                    <ul className="space-y-4">
                        {additionalFeatures.map(feature => (
                            <li key={feature} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                <span className="text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CAMBIO 1: El botón ahora es un enlace a WhatsApp */}
                <Button className={`mt-8 w-full font-bold py-3 rounded-lg text-lg transition-colors ${props.isRecommended ? 'bg-slate-800 text-white hover:bg-slate-900' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`} asChild>
                    <a href={wppUrl} target="_blank" rel="noopener noreferrer">
                        {props.ctaText}
                    </a>
                </Button>
            </div>
        </motion.div>
    );
};

const FeatureHighlight = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <div className="flex items-center justify-center gap-3">
        <Icon className="w-6 h-6 text-green-500" />
        <span className="font-semibold text-slate-700">{text}</span>
    </div>
);