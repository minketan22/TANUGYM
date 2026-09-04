import "./Gallery.css";

import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import gallery6 from "../../assets/images/gallery6.jpg";
import galleryVideo1 from "../../assets/videos/Gallery1.mp4";
import galleryVideo2 from "../../assets/videos/Gallery2.mp4";
import galleryVideo3 from "../../assets/videos/gallery3.mp4";
import galleryVideo4 from "../../assets/videos/gallery4.mp4";
import branchSahaVideo from "../../assets/videos/GymBranchSaha.mp4";

function Gallery() {

  const media = [
    {
      type: "image",
      src: gallery1,
      alt: "TANU GYM gym floor with modern resistance machines",
    },
    {
      type: "image",
      src: gallery2,
      alt: "Members training with free weights at TANU GYM",
    },
    {
      type: "image",
      src: gallery3,
      alt: "Cardio workout area inside TANU GYM gym",
    },
    {
      type: "image",
      src: gallery4,
      alt: "Strength training session led by a coach at TANU GYM",
    },
    {
      type: "image",
      src: gallery5,
      alt: "Functional fitness space for group workouts at TANU GYM",
    },
    {
      type: "image",
      src: gallery6,
      alt: "Clean and spacious workout environment at TANU GYM gym",
    },
    {
      type: "video",
      src: galleryVideo1,
      alt: "Training session at TANU GYM",
    },
    {
      type: "video",
      src: galleryVideo2,
      alt: "Strength workout at TANU GYM",
    },
    {
      type: "video",
      src: galleryVideo3,
      alt: "Cardio training at TANU GYM",
    },
    {
      type: "video",
      src: galleryVideo4,
      alt: "Group workout at TANU GYM",
    },
    {
      type: "video",
      src: branchSahaVideo,
      alt: "TANU GYM Saha training floor",
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

        {media.map((item, index) => (

          <div
            className="gallery-card"
            key={item.alt}
            data-aos="fade-up"
            data-aos-delay={index * 70}
            data-aos-duration="700"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                aria-label={item.alt}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;
