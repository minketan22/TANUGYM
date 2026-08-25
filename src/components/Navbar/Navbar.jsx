import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "programs" },
  { name: "Plans", id: "pricing" },
  { name: "Transformations", id: "transformations" },
  { name: "Branches", id: "branches" },
  { name: "Contact", id: "contact" },
];

function Navbar({ gymName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close mobile menu when screen becomes desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* Detect active section while scrolling */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) {
          return;
        }

        if (scrollPosition >= section.offsetTop) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Smooth scroll to section */
  const handleNavClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id "${id}" was not found.`);
      return;
    }

    setActiveSection(id);
    setMenuOpen(false);

    const navbarHeight = 75;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav aria-label="Primary">
        <div className="nav-container">

          {/* Logo */}
          <a
            className="logo"
            href="#home"
            aria-label={`${gymName} home`}
            onClick={(event) => handleNavClick(event, "home")}
          >
            <span className="logo-name">{gymName}</span>
            <span className="logo-tagline">Luxury <b>·</b> Strength <b>·</b> Discipline</span>
          </a>

          {/* Navigation Links */}
          <ul
            id="mobile-navigation"
            className={`nav-links ${menuOpen ? "active" : ""}`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={
                    activeSection === link.id ? "active" : ""
                  }
                  onClick={(event) =>
                    handleNavClick(event, link.id)
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Join Button */}
          <a
            className="join-btn"
            href="#contact"
            onClick={(event) =>
              handleNavClick(event, "contact")
            }
          >
            Join Now
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            className="menu-icon"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;