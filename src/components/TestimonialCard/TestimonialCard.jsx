import "./TestimonialCard.css";
import { FaStar } from "react-icons/fa";

function TestimonialCard({
  image,
  name,
  duration,
  review,
  rating,
  delay = 0,
}) {
  return (
    <article
      className="testimonial-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >

      <div className="stars">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="review">
        "{review}"
      </p>

      <div className="member-info">
        <img src={image} alt={`${name}, a TANU GYM member`} />

        <div>
          <h3>{name}</h3>
          <span>{duration}</span>
        </div>
      </div>

    </article>
  );
}

export default TestimonialCard;
