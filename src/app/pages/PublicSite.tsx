import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function PublicSite() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
