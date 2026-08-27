import "./TrainerCard.css";
import { FaTrophy } from "react-icons/fa";

function TrainerCard({
  number,
  name,
  role,
  experience,
  description,
  delay = 0,
}) {
  return (
    <article
      className="trainer-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="trainer-card-header">
        <span className="trainer-number">{number}</span>
        <FaTrophy aria-hidden="true" />
      </div>

      <h3>{name}</h3>
      <p className="experience">{experience}</p>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
    </article>
  );
}

export default TrainerCard;
