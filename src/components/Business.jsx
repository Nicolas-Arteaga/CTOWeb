import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ title, content, index }) => (
  <div className="service-flow__item">
    <div className="service-flow__node" aria-hidden="true">
      <span className={`service-flow__glyph service-flow__glyph--${index}`} />
    </div>
    <div className="service-flow__content">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Un solo responsable técnico, <br className="sm:block hidden" /> de la
        idea a producción.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Sin contratar un área de desarrollo interna: analizo, construyo,
        despliego y te acompaño después del lanzamiento. Un solo responsable
        técnico de punta a punta.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <div className="service-flow">
        {features.map((feature, index) => <FeatureCard key={feature.id} {...feature} index={index} />)}
      </div>
    </div>
  </section>
);

export default Business;
