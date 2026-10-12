import {
  people01,
  people02,
  people03,
  instagram,
  linkedin,
  send,
  shield,
  star,
  n8n,
  dotnet,
  angular,
  react,
  nestjs,
  postgresql,
  docker,
} from "../assets";

export const WHATSAPP =
  "https://wa.me/542665279358?text=" +
  encodeURIComponent("Hola, quiero consultar por un proyecto.");
export const INSTAGRAM = "https://www.instagram.com/cto.web/";
export const LINKEDIN = "https://www.linkedin.com/in/nicolasarteagadev";
export const PORTFOLIO = "https://hesher.vercel.app";

export const navLinks = [
  { id: "home", title: "Inicio" },
  { id: "features", title: "Servicios" },
  { id: "product", title: "Cómo trabajo" },
  { id: "clients", title: "Tecnologías" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Desarrollo de productos web",
    content:
      "Aplicaciones, e-commerce y sitios a medida con .NET, Angular, React y NestJS. Arquitectura por capas y código mantenible.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Integración de pagos",
    content:
      "Payway/Decidir y Mercado Pago en producción: checkout, cuotas, detección de tarjeta por BIN, manejo de errores y conciliación.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Despliegue y operación",
    content:
      "Despliegues ordenados, entornos de desarrollo y producción, Docker y contenedores para operar cambios con claridad.",
  },
  {
    id: "feature-4",
    icon: n8n,
    title: "Automatización con n8n",
    content:
      "Ingesta de emails, procesamiento de documentos (OCR), integraciones entre sistemas y flujos a medida que te ahorran trabajo manual.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Definimos prioridades, entrego avances cortos y revisamos el rumbo durante el proyecto.",
    name: "Trabajo por etapas",
    title: "cómo entrego",
    img: star,
  },
  {
    id: "feedback-2",
    content:
      "Entrego una solución desplegada, documentada y lista para usar en un dominio real.",
    name: "Listo para usar",
    title: "el estándar",
    img: shield,
  },
  {
    id: "feedback-3",
    content:
      "Acompaño la evolución del producto después del lanzamiento, cuando aparecen ajustes o nuevas necesidades.",
    name: "Acompañamiento posterior",
    title: "después de entregar",
    img: send,
  },
];

export const stats = [
  { id: "stats-1", value: "Desarrollo web", title: "front · back · deploy" },
  { id: "stats-2", value: "Pagos online", title: "Payway · Mercado Pago" },
  { id: "stats-3", value: "Despliegue", title: "CI/CD y operación" },
];

export const footerLinks = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo de productos web", link: "#features" },
      { name: "Pagos online", link: "#features" },
      { name: "Despliegue y operación", link: "#features" },
      { name: "Migración de sistemas", link: "#product" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { name: "WhatsApp", link: WHATSAPP },
      { name: "Instagram", link: INSTAGRAM },
      { name: "LinkedIn", link: LINKEDIN },
    ],
  },
  {
    title: "Más",
    links: [{ name: "Portfolio", link: PORTFOLIO }],
  },
];

export const socialMedia = [
  { id: "social-media-1", icon: instagram, link: INSTAGRAM },
  { id: "social-media-2", icon: linkedin, link: LINKEDIN },
];

export const clients = [
  { id: "client-1", logo: dotnet },
  { id: "client-2", logo: angular },
  { id: "client-3", logo: react },
  { id: "client-4", logo: nestjs },
  { id: "client-5", logo: postgresql },
  { id: "client-6", logo: docker },
];

export { people01, people02, people03 };
