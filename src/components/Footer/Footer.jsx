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
    { name: "Instagram", url: "", icon: <FaInstagram /> },
    { name: "Facebook", url: "", icon: <FaFacebookF /> },
    { name: "LinkedIn", url: "", icon: <FaLinkedinIn /> },
    { name: "YouTube", url: "", icon: <FaYoutube /> },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <p className="footer-brand-name">TanuGym</p>

          <p>
            Train Smarter.
            <br />
            Become Stronger.
          </p>

          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url || "#"}
                aria-label={link.name}
                target={link.url ? "_blank" : undefined}
                rel={link.url ? "noreferrer" : undefined}
                onClick={(event) => {
                  if (!link.url) {
                    event.preventDefault();
                  }
                }}
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
            info@tanugym.com
          </p>

          <p>
            <FaMapMarkerAlt />
             M. M. University Road, Mullana, Ambala, Haryana 133203
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>(c) 2026 TanuGym. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
