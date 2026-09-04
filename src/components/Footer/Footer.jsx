import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Pricing", id: "pricing" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/tanugymmmdu?igsi=MWN5NHZieWtmeXhodQ%3D%3D&utm_source=qr",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/tanu.gym",
      icon: <FaFacebookF />,
    },
  ];

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-brand-lockup">
            <p className="footer-brand-name">TANU GYM</p>
            <span>Luxury <b>·</b> Strength <b>·</b> Discipline</span>
          </div>

          <p>
            Your fitness journey starts here.
          </p>

          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt />
            +91 8950855815
          </p>

          <p>
            <FaEnvelope />
            tanugym555@gmail.com
          </p>

          <p>
            <FaMapMarkerAlt />
             M. M. University Road, Mullana, Ambala, Haryana 133203
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>(c) 2026 TANU GYM. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
