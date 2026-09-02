import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        De un sistema viejo <br className="sm:block hidden" /> a una web
        moderna.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Migración de sistemas legacy (ERP tipo Navision, planillas, software a
        medida) a aplicaciones web actuales, sin frenar la operación. Arquitectura
        por capas, multi-tenant y despliegue continuo.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mr-4`} label="Escribime" />
      </div>
    </div>
  </section>
);

export default Billing;
