import "./Contact.css";
import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

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
  email: "info@tanugym.com",
  hours: "Mon - Sat : 6 AM - 10 PM",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=Tanu%20Gym%2C%20M.%20M.%20University%2C%20Mullana%2C%20M.%20M.%20International%20School%20Road%2C%20Mullana%2C%20Haryana%20133203",
};

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
      "Hello TanuGym, I would like to enquire about joining.",
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
              title="TanuGym location on Google Maps"
              src="https://www.google.com/maps?q=Tanu%20Gym%2C%20M.%20M.%20University%2C%20Mullana%2C%20M.%20M.%20International%20School%20Road%2C%20Mullana%2C%20Haryana%20133203&output=embed"
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
          aria-label="Send a WhatsApp enquiry to TanuGym"
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
