
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import KidZone from "./components/KidZone/KidZone";
import Trainers from "./components/Trainers/Trainers";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Transformations from "./components/Transformations/Transformations";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import SeoManager from "./components/SEO/SeoManager";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      disable: prefersReducedMotion,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar gymName="TANU GYM" />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Programs />
        <KidZone />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Transformations />
        <Gallery />
        <Contact />
       
      </main>
      <Footer />
    </>
  );
}

export default App;
