import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Explore from "../components/Explore";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";
import Document from "../components/Document";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Scam Recovery</title>
      </Helmet>
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
