
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Trainers from "./components/Trainers/Trainers";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import KidZone from "./components/KidZone/KidZone";
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

    const refreshAnimations = () => AOS.refreshHard();

    window.addEventListener("load", refreshAnimations);
    window.addEventListener("resize", refreshAnimations);
    window.addEventListener("orientationchange", refreshAnimations);

    AOS.refresh();

    return () => {
      window.removeEventListener("load", refreshAnimations);
      window.removeEventListener("resize", refreshAnimations);
      window.removeEventListener("orientationchange", refreshAnimations);
    };
  }, []);

  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar gymName="TanuGym" />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Gallery />
        <Contact />
        <KidZone />
      </main>
      <Footer />
    </>
  );
}

export default App;
