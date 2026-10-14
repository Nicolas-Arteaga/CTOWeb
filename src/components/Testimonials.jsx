import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import constellation from "../assets/process-constellation.png";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Un proceso <br className="sm:block hidden" /> de punta a punta
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Transparente, iterativo y enfocado en que el proyecto llegue a
          producción y se mantenga en el tiempo.
        </p>
      </div>
    </div>

    <div className="process-flow relative z-[1]">
      <div className="process-flow__constellation" style={{ backgroundImage: `url(${constellation})` }} aria-hidden="true" />
      <svg className="process-flow__path" viewBox="0 0 1200 450" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-24 387 C98 433 169 427 284 390 S442 358 542 403 S737 439 842 387 S1043 344 1224 380" />
        <path className="process-flow__pulse" d="M-24 387 C98 433 169 427 284 390 S442 358 542 403 S737 439 842 387 S1043 344 1224 380" />
        <rect className="process-flow__spark process-flow__spark--one" x="275" y="381" width="18" height="18" rx="1" transform="rotate(45 284 390)" />
        <rect className="process-flow__spark process-flow__spark--two" x="833" y="378" width="18" height="18" rx="1" transform="rotate(45 842 387)" />
      </svg>
      {feedback.map((card, index) => <FeedbackCard key={card.id} {...card} index={index} />)}
    </div>
  </section>
);

export default Testimonials;
