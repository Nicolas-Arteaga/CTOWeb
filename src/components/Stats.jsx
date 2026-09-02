import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[32px] text-[24px] xs:leading-[42px] leading-[32px] text-white whitespace-nowrap">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[15px] text-[12px] xs:leading-[22px] leading-[18px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
