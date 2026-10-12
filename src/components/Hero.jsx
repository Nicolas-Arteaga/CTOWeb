import styles from "../style";
import GetStarted from "./GetStarted";
import HeroBubbles from "./HeroBubbles";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="hero-label animate__animated animate__lightSpeedInLeft">
          <p className={styles.paragraph}>
            <span className="text-white">CTO Web</span> — Chief Technology{" "}
            <span className="text-white">Officer</span> Web
          </p>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[64px] text-[48px] text-white ss:leading-[78px] leading-[58px] w-full mt-6 tracking-[-0.03em]">
          Tu producto web
          <span className="text-gradient block">listo para operar.</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          Desarrollo de productos web, pagos online y despliegue. Llevo tu
          producto de la idea a producción y acompaño su evolución.
        </p>
        <div className="mt-7">
          <GetStarted />
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <HeroBubbles />
      </div>
    </section>
  );
};

export default Hero;
