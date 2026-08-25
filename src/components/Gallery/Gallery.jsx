import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";

function Gallery() {

  const images = [
    {
      src: gallery1,
      alt: "TANU GYM gym floor with modern resistance machines",
    },
    {
      src: gallery2,
      alt: "Members training with free weights at TANU GYM",
    },
    {
      src: gallery3,
      alt: "Cardio workout area inside TANU GYM gym",
    },
    {
      src: gallery4,
      alt: "Strength training session led by a coach at TANU GYM",
    },
    {
      src: gallery5,
      alt: "Functional fitness space for group workouts at TANU GYM",
    },
    {
      src: gallery6,
      alt: "Clean and spacious workout environment at TANU GYM gym",
    },
  ];

  return (
    <section
      id="gallery"
      className="gallery"
      data-aos="fade-up"
      aria-labelledby="gallery-title"
    >

      <div className="section-title" data-aos="fade-up">
        <span>OUR GALLERY</span>

        <h2 id="gallery-title">
          Explore
          <br />
          Our Gym
        </h2>
      </div>

      <div className="gallery-container">

        {images.map((image, index) => (

          <div
            className="gallery-card"
            key={image.alt}
            data-aos="zoom-in-up"
            data-aos-delay={index * 70}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;
