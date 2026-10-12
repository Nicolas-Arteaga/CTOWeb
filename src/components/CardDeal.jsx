import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Cobrá online <br className="sm:block hidden" /> con un proceso sólido.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Integro la pasarela que tu negocio necesita —Payway/Decidir, Mercado
        Pago— con manejo de errores, reintentos, estados y conciliación.
        Pensado para producción.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
