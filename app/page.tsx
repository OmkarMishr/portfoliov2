import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Marquee from "@/components/Marquee";
import Expertise from "@/components/Expertise";
import TechGrid from "@/components/TechGrid";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Marquee />
        <Expertise />
        <Projects />
        <TechGrid />
        <WhyMe />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
