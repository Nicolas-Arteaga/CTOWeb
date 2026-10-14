import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 process-techs`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] min-w-[90px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[110px] w-[64px] h-[56px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
