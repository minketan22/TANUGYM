import "./Stats.css";
import {
  FaUsers,
  FaDumbbell,
  FaAward,
  FaClock,
} from "react-icons/fa";
function Stats() {

  const stats = [
    {
         icon: <FaUsers />,
      number: "500+",
      title: "Happy Members",
    },
    {
         icon: <FaDumbbell />,
      number: "20+",
      title: "Expert Trainers",
    },
    {
         icon: <FaAward />,
      number: "15+",
      title: "Years Experience",
    },
    {
         icon: <FaClock />,
      number: "24/7",
      title: "Support",
    },
  ];
    return (
    <section className="stats" data-aos="fade-up" aria-label="TANU GYM statistics">
      <div className="stats-container">

        {stats.map((stat, index) => (
          <article
            className="stat-card"
            key={stat.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
  <div className="stat-icon">
    {stat.icon}
  </div>

  <p className="stat-number">{stat.number}</p>

  <p>{stat.title}</p>
</article>
        ))}

      </div>
    </section>
  );
}

export default Stats;
