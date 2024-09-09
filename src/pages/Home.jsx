import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Explore from "../components/Explore";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";
import Document from "../components/Document";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Experience />
      <Explore />
      <About />
      <Document />
      <Services />
      <Testimonials />
      <Consultation />
    </>
  );
}
