import "./Trainers.css";

import TrainerCard from "../TrainerCard/TrainerCard";

function Trainers() {
  const trainers = [
    {
      name: "Kartik Singh",
      role: "Head Trainer",
      experience: "15+ Years Experience",
      description:
        "Leads members through structured strength and conditioning programs with a focus on safe, measurable progress.",
    },
    {
      name: "Prince",
      role: "Floor Trainer",
      experience: "10+ Years Experience",
      description:
        "Keeps every session focused and effective, helping members build confidence with correct form and consistent effort.",
    },
    {
      name: "Ujjwal Pandey",
      role: "Trainer",
      experience: "6+ Years Experience",
      description:
        "Supports members with practical training guidance for strength, conditioning, and sustainable fitness habits.",
    },
    {
      name: "Harsh",
      role: "Receptionist",
      experience: "5+ Years Experience",
      description:
        "Welcomes every member, coordinates the daily gym experience, and keeps your training journey running smoothly.",
    },
    {
      name: "Krishan",
      role: "Head Trainer · Saha Branch",
      experience: "15+ Years Experience",
      description:
        "Guides the Saha branch with disciplined coaching, personalized support, and a clear focus on long-term results.",
    },
  ];

  return (
    <section
      id="trainers"
      className="trainers"
      data-aos="fade-up"
      aria-labelledby="trainers-title"
    >
      <div className="section-title" data-aos="fade-up">
        <span>OUR TRAINERS</span>

        <h2 id="trainers-title">
          Train With <em>Experienced</em> Fitness
          <br />
          Professionals
        </h2>
        <p>
          Every trainer at TANU GYM brings practical experience and focused
          guidance to help members train safely, effectively, and confidently.
        </p>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={trainer.name}
            number={String(index + 1).padStart(2, "0")}
            name={trainer.name}
            role={trainer.role}
            experience={trainer.experience}
            description={trainer.description}
            delay={index * 90}
          />
        ))}
      </div>
    </section>
  );
}

export default Trainers;
