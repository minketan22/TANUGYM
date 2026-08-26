import "./Testimonials.css";

import TestimonialCard from "../TestimonialCard/TestimonialCard";

import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";

function Testimonials() {
  const testimonials = [
    {
      image: member1,
      name: "Mehak Sharma",
      duration: "Member for 2 Years",
      review:
        "Joining TANU GYM completely changed my lifestyle. The trainers are supportive and the environment is motivating.",
      rating: 5,
    },
    {
      image: member2,
      name: "Praveen Singh",
      duration: "Member for 1 Year",
      review:
        "The equipment is modern and the workout plans helped me achieve my fitness goals faster than I expected.",
      rating: 5,
    },
    {
      image: member3,
      name: "Priya Verma",
      duration: "Member for 3 Years",
      review:
        "Excellent trainers, great atmosphere, and outstanding facilities. I highly recommend this gym.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials"
      data-aos="fade-up"
      aria-labelledby="testimonials-title"
    >

      <div className="section-title" data-aos="fade-up">
        <span>TESTIMONIALS</span>

        <h2 id="testimonials-title">
          What Our
          <br />
          Members Say
        </h2>
      </div>

      <div className="testimonials-container">

        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            image={testimonial.image}
            name={testimonial.name}
            duration={testimonial.duration}
            review={testimonial.review}
            rating={testimonial.rating}
            delay={index * 90}
          />
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
