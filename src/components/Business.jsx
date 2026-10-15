import { features } from "../constants";
import styles, { layout } from "../style";

const ServiceIcon = ({ step }) => {
  const common = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

  if (step === 1) return <svg {...common}><rect x="7" y="7" width="34" height="34" rx="3" /><path d="M7 14h34M13 10.5h.1M17 10.5h.1M21 10.5h.1M14 21h7v6h-7zM27 21h7v6h-7zM14 32h7M27 32h7" /></svg>;
  if (step === 2) return <svg {...common}><rect x="5" y="10" width="31" height="23" rx="3" /><path d="M5 18h31M11 25h10" /><rect x="28" y="27" width="14" height="13" rx="2" /><path d="M31.5 27v-3a3.5 3.5 0 0 1 7 0v3M35 32v3" /></svg>;
  if (step === 3) return <svg {...common}><path d="M14 37H10a7 7 0 1 1 2-13 11 11 0 0 1 21-4 8 8 0 1 1 3 17h-4" /><path d="M24 39V19M17 26l7-7 7 7" /></svg>;
  return <svg {...common}><circle cx="24" cy="24" r="3" /><circle cx="24" cy="8" r="2.5" /><circle cx="37.5" cy="16" r="2.5" /><circle cx="37.5" cy="32" r="2.5" /><circle cx="24" cy="40" r="2.5" /><circle cx="10.5" cy="32" r="2.5" /><circle cx="10.5" cy="16" r="2.5" /><path d="M24 21V10.5M26.6 22.5l8.7-5M26.6 25.5l8.7 5M24 27v10.5M21.4 25.5l-8.7 5M21.4 22.5l-8.7-5" /></svg>;
};

const FeatureCard = ({ title, content, step, index }) => (
  <div className={`service-flow__item service-flow__item--${index + 1}`}>
    <div className="service-flow__node" aria-hidden="true">
      <span className="service-flow__glyph" />
    </div>
    <div className="service-flow__content">
      <div className="service-flow__card-heading">
        <span className="service-flow__step">{step}</span>
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[22px]">
          {title}
        </h4>
      </div>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
      <span className="service-flow__icon"><ServiceIcon step={step} /></span>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} service-heading`}>
        Un solo <br /> responsable <br /> técnico,
        <span>de la idea a producción.</span>
      </h2>
      <div className="service-heading-rule" aria-hidden="true" />
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Un responsable técnico que lidera y ejecuta el camino completo:
        arquitectura, desarrollo, pagos, despliegue y automatización.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <div className="service-flow">
        <svg className="service-flow__path" viewBox="0 0 560 640" preserveAspectRatio="none" aria-hidden="true">
          <path d="M66 575 C5 525 105 470 98 428 C91 384 25 365 126 288 C194 235 76 192 172 102" />
          <path className="service-flow__path-pulse" d="M66 575 C5 525 105 470 98 428 C91 384 25 365 126 288 C194 235 76 192 172 102" />
        </svg>
        <svg className="service-flow__mobile-path" viewBox="0 0 320 760" preserveAspectRatio="none" aria-hidden="true">
          <path d="M39 92 C71 170 10 230 39 286 C70 370 11 422 39 474 C72 560 8 614 39 662" />
          <path className="service-flow__mobile-pulse" d="M39 92 C71 170 10 230 39 286 C70 370 11 422 39 474 C72 560 8 614 39 662" />
        </svg>
        {[...features].reverse().map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} step={features.length - index} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Business;
