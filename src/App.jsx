import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Explore from "./components/Explore";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TestimonialCard from "./components/TestimonialCard";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Features />
        <Experience />
        <Explore />
        <About />
        <Services />
        <Testimonials />
      </main>
    </>
  );
}
