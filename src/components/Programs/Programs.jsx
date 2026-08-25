import "./Programs.css";
import { FaDumbbell, FaRunning, FaChild, FaHeartbeat, FaUserCheck, FaFire } from "react-icons/fa";

function Programs() {
  const programs = [
    {
      icon: <FaDumbbell />,
      title: "Strength Training",
      description:
        "Build muscle, increase strength and improve your overall fitness.",
    },
    {
      icon: <FaRunning />,
      title: "Cardio",
      description:
        "Boost endurance and burn calories with high-energy workouts.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Functional Training",
      description:
        "Move better, build stability and train for real-world strength.",
    },
    {
      icon: <FaUserCheck />,
      title: "Personal Training",
      description:
        "One-to-one coaching, accountability and a plan built around you.",
    },
    {
      icon: <FaFire />,
      title: "Weight Loss / Muscle Building",
      description:
        "Goal-focused training and nutrition guidance for measurable progress.",
    },
    {
      icon: <FaChild />,
      title: "Kids Fitness / Karate",
      description:
        "Active, confidence-building sessions for children, where applicable.",
    },
  ];

  return (
    <section
      id="programs"
      className="programs"
      data-aos="fade-up"
      aria-labelledby="programs-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>OUR PROGRAMS</span>

        <h2 id="programs-title">
          Build the Perfect Workout
          <br />
          For Your Goals
        </h2>
      </div>

      <div className="program-container">
        {programs.map((program, index) => (
          <article
            className="program-card"
            key={program.title}
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <div className="program-icon">{program.icon}</div>

            <h3>{program.title}</h3>

            <p>{program.description}</p>

            <a className="learn-btn" href="#contact">
              Learn More -&gt;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;
