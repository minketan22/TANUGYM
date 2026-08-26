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

      <div className="about-visual" data-aos="fade-right">
        <div className="about-image">
          <div className="about-image-glow" aria-hidden="true" />
          <img
            src={aboutImage}
            alt="TANU GYM owner standing inside the gym"
          />
          <div className="owner-badge">
            <strong>18</strong>
            <span>YEARS OF<br />TRUST</span>
          </div>
          <div className="owner-caption">
            <span className="owner-caption-dot" aria-hidden="true" />
            <span>Built by experience</span>
          </div>
        </div>
      </div>

      <div className="about-content" data-aos="fade-up">

        <span className="about-subtitle">THE TANU GYM STORY</span>

        <h2 id="about-title">
          18 years of
          <br />
          making strength personal.
        </h2>

        <p>
          What started as a passion for better training has grown into a
          trusted fitness home for the Mullana community. TANU GYM is led by
          an owner who understands that real progress comes from showing up,
          training with purpose and feeling supported every step of the way.
        </p>

        <p>
          Today, our two branches bring expert coaching, modern equipment and
          a welcoming atmosphere together. Whether you are starting fresh or
          chasing your next personal best, your journey has a place here.
        </p>

        <div className="feature-list">

          {features.map((feature) => (
            <div className="feature" key={feature}>
              <FaCheckCircle className="check-icon" />
              <span>{feature}</span>
            </div>
          ))}

        </div>

        <div className="about-proof" aria-label="TANU GYM experience highlights">
          <div><strong>18+</strong><span>Years established</span></div>
          <div><strong>2</strong><span>Training locations</span></div>
          <div><strong>1</strong><span>Strong community</span></div>
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
