import React from "react";
import "./KidZone.css";

const activities = [
  {
    icon: "🏃",
    title: "Fun Fitness",
    text: "Fun-filled exercises that keep kids active, energetic and healthy.",
  },
  {
    icon: "🤸",
    title: "Kids Training",
    text: "Age-appropriate movements designed to improve strength and flexibility.",
  },
  {
    icon: "⚽",
    title: "Sports Activities",
    text: "Interactive sports and games that make fitness exciting for children.",
  },
  {
    icon: "🧘",
    title: "Mind & Body",
    text: "Activities that help children develop focus, coordination and confidence.",
  },
];

const benefits = [
  "Improves physical fitness",
  "Builds confidence",
  "Develops coordination",
  "Encourages an active lifestyle",
  "Improves flexibility",
  "Makes exercise fun",
];

const KidZone = () => {
  return (
    <section className="kidzone" id="kidzone">
      <div className="kidzone-container">

        {/* Header */}
        <div className="kidzone-header">
          <span className="kidzone-tag">KIDS FITNESS PROGRAM</span>

          <h2>
            Welcome to <span>KIDZone</span>
          </h2>

          <p>
            A fun and energetic space where kids can stay active, build
            confidence and develop healthy habits while having a great time.
          </p>
        </div>

        {/* Main Section */}
        <div className="kidzone-main">

          {/* Left Content */}
          <div className="kidzone-content">

            <div className="kidzone-badge">
              <span>⚡</span>

              <div>
                <strong>Move. Play. Grow.</strong>
                <small>Fitness made fun for kids</small>
              </div>
            </div>

            <h3>
              Fitness should be <span>fun!</span>
            </h3>

            <p className="kidzone-description">
              Our KIDZone program introduces children to fitness through
              exciting games, movement activities and age-appropriate
              exercises. The goal is to help children become stronger,
              healthier and more confident.
            </p>

            {/* Benefits */}
            <div className="kidzone-benefits">
              {benefits.map((benefit, index) => (
                <div className="kid-benefit" key={index}>
                  <span className="benefit-check">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="kidzone-btn">
              Join KIDZone
              <span>→</span>
            </a>
          </div>

          {/* Right Visual */}
          <div className="kidzone-visual">

            <div className="kidzone-circle circle-one"></div>
            <div className="kidzone-circle circle-two"></div>

            <div className="kidzone-card-main">
              <div className="kidzone-emoji">🏋️‍♀️</div>

              <h4>Happy Kids</h4>

              <p>
                Strong body. Active mind. Happy childhood.
              </p>

              <div className="kidzone-stats">
                <div>
                  <strong>100%</strong>
                  <span>Fun</span>
                </div>

                <div>
                  <strong>6+</strong>
                  <span>Age</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Energy</span>
                </div>
              </div>
            </div>

            <div className="floating-kid-card card-top">
              ⭐ <span>Build Confidence</span>
            </div>

            <div className="floating-kid-card card-bottom">
              💪 <span>Stay Active</span>
            </div>

          </div>
        </div>

        {/* Activities */}
        <div className="kidzone-activities">

          <div className="activities-heading">
            <span>WHAT WE DO</span>
            <h3>More than just a workout</h3>
          </div>

          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div className="activity-card" key={index}>

                <div className="activity-icon">
                  {activity.icon}
                </div>

                <h4>{activity.title}</h4>

                <p>{activity.text}</p>

                <div className="activity-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="kidzone-bottom">

          <div>
            <span>READY TO GET STARTED?</span>

            <h3>
              Let your little one discover the joy of fitness.
            </h3>
          </div>

          <a href="#contact" className="kidzone-bottom-btn">
            Get Started →
          </a>

        </div>

      </div>
    </section>
  );
};

export default KidZone;