import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:mb-20 mb-10">
    {stats.map((stat) => (
      <div key={stat.id} className="stat-card">
        <h4 className="font-poppins font-semibold text-[26px] leading-[34px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-[13px] leading-[20px] text-gradient uppercase mt-1">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
