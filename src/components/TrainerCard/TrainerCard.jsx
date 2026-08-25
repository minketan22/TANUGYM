import "./TrainerCard.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

function TrainerCard({
  image,
  name,
  role,
  experience,
  delay = 0,
}) {
  return (
    <article
      className="trainer-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >

      <img
        src={image}
        alt={`${name}, ${role} at TANU GYM`}
      />

      <h3>{name}</h3>

      <p className="role">{role}</p>

      <p className="experience">
        {experience}
      </p>
      <div className="social-icons" aria-label={`${name} social media profiles`}>
        <FaInstagram aria-hidden="true" />
        <FaFacebookF aria-hidden="true" />
        <FaLinkedinIn aria-hidden="true" />
      </div>

    </article>
  );
}

export default TrainerCard;
