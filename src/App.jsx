import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Experience from "./components/Experience";
import Explore from "./components/Explore";
import About from "./components/About";

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
      </main>
    </>
  );
}
