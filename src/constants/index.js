import {
  people01,
  people02,
  people03,
  instagram,
  linkedin,
  send,
  shield,
  star,
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
  { id: "clients", title: "Stack" },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Desarrollo full-stack",
    content:
      "Sitios, e-commerce y aplicaciones a medida con .NET, Angular, React y NestJS. Arquitectura por capas y código mantenible.",
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
    title: "CI/CD e infraestructura",
    content:
      "Despliegue automático en cada cambio, entornos dev y prod, Docker y contenedores. Tu aplicación siempre online.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Entregas cortas y feedback constante. Sabés en qué punto está el proyecto en todo momento, sin sorpresas al final.",
    name: "Metodología ágil",
    title: "cómo entrego",
    img: star,
  },
  {
    id: "feedback-2",
    content:
      "No entrego una demo: entrego algo desplegado, monitoreado y documentado, corriendo en un dominio real.",
    name: "Todo va a producción",
    title: "el estándar",
    img: shield,
  },
  {
    id: "feedback-3",
    content:
      "La web no termina el día que sale. Sigo cuando algo falla, cuando hay que sumar una feature o cuando cambia el negocio.",
    name: "Soporte post-lanzamiento",
    title: "después de entregar",
    img: send,
  },
];

export const stats = [
  { id: "stats-1", value: "End-to-end", title: "de la idea a producción" },
  { id: "stats-2", value: "Pagos", title: "Payway · Mercado Pago" },
  { id: "stats-3", value: "CI/CD", title: "deploy automático dev/prod" },
];

export const footerLinks = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo full-stack", link: "#features" },
      { name: "Integración de pagos", link: "#features" },
      { name: "CI/CD e infraestructura", link: "#features" },
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
