import "./About.css";
import aboutImage from "../../assets/images/about.png";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";

function About() {

  const features = [
    "Certified Trainers",
    "Modern Equipment",
    "Personalized Workout Plans",
    "Nutrition Guidance",
  ];

  return (
    
    <section
      id="about"
      className="about"
      data-aos="fade-up"
      aria-labelledby="about-title"
    >

      <div className="about-image">
        <img
          src={aboutImage}
          alt="Personal trainer guiding members through a strength workout at TANU GYM"
        />
      </div>

      <div className="about-content" data-aos="fade-up">

        <span className="about-subtitle"> 
          WHY CHOOSE TANU GYM
        </span>

        <h2 id="about-title">
          Train Smarter,
          <br />
          Become Stronger
        </h2>

        <p>
          TANU GYM was built to make serious fitness welcoming and practical
          for the Mullana community. From a first workout to a complete
          transformation, our team pairs expert coaching with a consistent,
          supportive environment.
        </p>

        <p>
          Our vision is simple: help every member train with purpose, feel
          stronger and build habits that last. With two branches, we are
          growing a local fitness community without losing personal attention.
        </p>

        <div className="feature-list">

          {features.map((feature) => (
            <div className="feature" key={feature}>
              <FaCheckCircle className="check-icon" />
              <span>{feature}</span>
            </div>
          ))}

        </div>

        <Button
          text="Meet the TANU GYM Team"
          variant="primary"
          href="#trainers"
        />

      </div>

    </section>
  );
}

export default About;
