import "./Transformations.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";

const stories = [
  { name: "Mehak", goal: "Strength and confidence", image: member1 },
  { name: "Praveen", goal: "Muscle building", image: member2 },
  { name: "Priya", goal: "Healthy, active lifestyle", image: member3 },
];

function Transformations() {
  return (
    <section id="transformations" className="transformations" data-aos="fade-up" aria-labelledby="transformations-title">
      <div className="section-title" data-aos="fade-up">
        <span>SUCCESS STORIES</span>
        <h2 id="transformations-title">Real People.<br />Real Progress.</h2>
        <p className="section-intro">Every journey starts somewhere. See the determination behind the results and find your reason to begin.</p>
      </div>

      <div className="transformation-grid">
        {stories.map((story, index) => (
          <article className="transformation-card" key={story.name} data-aos="fade-up" data-aos-delay={index * 90}>
            <div className="transformation-image">
              <img src={story.image} alt={`${story.name} Before and After transformation`} loading="lazy" decoding="async" />
            </div>
            <div className="transformation-copy"><h3>{story.name}</h3><p>{story.goal}</p></div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Transformations;
