import "./Hero.css";
import heroImage from "../../assets/images/hero.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section id="home" className="hero" data-aos="fade-up" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker">Your fitness journey starts here</p>

        <h1 id="hero-title">
          Transform Your Body <br />
          Transform Your <span>Life</span>
        </h1>

        <p>
          Join India's fastest growing fitness community with
          certified trainers and world-class equipment.
        </p>

        <div className="hero-buttons">
          <Button text="Get Started" variant="primary" href="#contact" />
          <Button
            text="Explore Programs"
            variant="secondary"
            href="#programs"
          />
        </div>
      </div>

      <div className="hero-visual" data-aos="fade-left">
        <div className="hero-image">
          <div className="hero-image-glow" aria-hidden="true" />
          <img
            src={heroImage}
            alt="TANU GYM members training with modern strength and cardio equipment"
          />
          <div className="hero-image-topline">
            <span className="hero-live-dot" aria-hidden="true" />
            TRAIN WITH PURPOSE
          </div>
          <div className="hero-image-badge">
            <strong>18</strong>
            <span>YEARS<br />STRONG</span>
          </div>
          <div className="hero-image-caption">
            <span>Built for your next level</span>
            <span aria-hidden="true">&#8599;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
