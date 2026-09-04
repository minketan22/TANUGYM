import "./Contact.css";
import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import branchMainImage from "../../assets/images/gallery5.jpg";
import branchSecondImage from "../../assets/images/gallery6.jpg";
import branchMullanaVideo from "../../assets/videos/GymBranchMullana.mp4";

const WHATSAPP_NUMBER = "918950855815"; // WhatsApp expects the number without '+' or spaces

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactDetails = {
  address: "Tanu Gym, M. M. University, Mullana, M. M. International School Road, Mullana, Haryana 133203",
  phone: "+91 8950855815",
  email: "tanugym555@gmail.com",
  hours: "Morning 5 - 9 AM | Evening 4 - 9 PM",
  googleMapsLink:
    "https://www.google.com/maps/place/30%C2%B015'11.5%22N+77%C2%B002'46.4%22E/@30.2532005,77.0436592,770m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.2532005!4d77.0462341?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedLink:
    "https://www.google.com/maps?q=30.2532005,77.0462341&z=17&output=embed",
};

const branches = [
  {
    name: "TANU GYM MULLANA",
    address: contactDetails.address,
    maps: "https://maps.app.goo.gl/iKGsas1QJ1RsmJnx9",
    label: "BRANCH 2",
    phone: contactDetails.phone,
    hours: contactDetails.hours,
    media: {
      type: "video",
      src: branchMullanaVideo,
      alt: "TANU GYM Mullana training floor",
      poster: branchMainImage,
    },
    description: "Our flagship training floor with expert coaching and a focused community.",
  },
  {
    name: "TANU GYM SAHA",
    address: "Contact our team for the latest branch address and availability.",
    maps: "https://www.google.com/maps/place/30%C2%B017'51.4%22N+76%C2%B058'07.4%22E/@30.2976074,76.966137,769m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.2976074!4d76.9687119?hl=en&entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D",
    label: "BRANCH 3",
    phone: contactDetails.phone,
    hours: contactDetails.hours,
    media: {
      type: "video",
      src: branchMullanaVideo,
      alt: "TANU GYM Saha training floor",
      poster: branchSecondImage,
    },
    description: "A convenient TANU GYM space designed to keep your training consistent.",
  },
];

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedForm = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (
      !trimmedForm.name ||
      !trimmedForm.email ||
      !trimmedForm.phone ||
      !trimmedForm.message
    ) {
      setSuccessMessage("");
      setError("Please fill in all fields before sending your enquiry.");
      return;
    }

    const whatsappMessage = [
      "Hello TANU GYM, I would like to enquire about joining.",
      "",
      `Name: ${trimmedForm.name}`,
      `Email: ${trimmedForm.email}`,
      `Phone: ${trimmedForm.phone}`,
      `Message: ${trimmedForm.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setError("");
    setSuccessMessage("Opening WhatsApp with your enquiry...");

    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappUrl;
    }

    setFormData(initialForm);
  };

  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
      aria-labelledby="contact-title"
    >

      <div className="branches" id="branches" aria-labelledby="branches-title">
        <div className="branches-heading">
          <div className="branches-heading-top">
            <span>FIND YOUR TRAINING HOME</span>
            <strong>18 YEARS / 2 LOCATIONS</strong>
          </div>
          <h2 id="branches-title">Your strongest routine<br />starts here.</h2>
          <p>Choose your nearest TANU GYM location and make every session count.</p>
        </div>

        <div className="branch-grid">
        {branches.map((branch, index) => (
          <article className="branch-card" key={branch.name} data-aos="fade-up" data-aos-delay={index * 90}>
            <div className="branch-image-wrap">
              {branch.media.type === "video" ? (
                <video
                  src={branch.media.src}
                  aria-label={branch.media.alt}
                  poster={branch.media.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={branch.media.src} alt={branch.media.alt} />
              )}
              <span className="branch-label">{branch.label}</span>
            </div>
            <div className="branch-content">
              <h3>{branch.name}</h3>
              <p className="branch-description">{branch.description}</p>
              <div className="branch-detail"><FaMapMarkerAlt /><address>{branch.address}</address></div>
              <div className="branch-detail"><FaClock /><p>{branch.hours}</p></div>
              <div className="branch-detail"><FaPhoneAlt /><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></div>
              <div className="branch-actions"><a className="branch-map" href={branch.maps} target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /> View on Google Maps</a><a className="branch-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></div>
            </div>
          </article>
        ))}
        </div>
      </div>

      <div className="section-title" data-aos="fade-up">
        <span>CONTACT US</span>

        <h2 id="contact-title">
          Let's Start Your
          <br />
          Fitness Journey
        </h2>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info" data-aos="fade-up">

          <div className="info-box" data-aos="fade-up" data-aos-delay="0">
            <FaMapMarkerAlt />
            <div>
              <h3>Address</h3>
              <address>{contactDetails.address}</address>
              <a
                href={contactDetails.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-link"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="80">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>{contactDetails.phone}</p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="160">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>{contactDetails.email}</p>
            </div>
          </div>

          <div className="info-box" data-aos="fade-up" data-aos-delay="240">
            <FaClock />
            <div>
              <h3>Working Hours</h3>
              <p>{contactDetails.hours}</p>
            </div>
          </div>

          <div className="map-card" data-aos="fade-up" data-aos-delay="320">
            <iframe
              title="TANU GYM location on Google Maps"
              src={contactDetails.mapEmbedLink}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Right Side */}

        <form
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="120"
          onSubmit={handleSubmit}
          aria-label="Send a WhatsApp enquiry to TANU GYM"
        >
          <label className="sr-only" htmlFor="contact-name">
            Your name
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label className="sr-only" htmlFor="contact-email">
            Your email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label className="sr-only" htmlFor="contact-phone">
            Your phone number
          </label>

          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />

          <label className="sr-only" htmlFor="contact-message">
            Your message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p className="form-message error-message">{error}</p>}
          {successMessage && (
            <p className="form-message success-message">{successMessage}</p>
          )}

          <button type="submit">
            Send on WhatsApp
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
