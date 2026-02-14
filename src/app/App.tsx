import { Hero } from "@/app/components/Hero";
import { Portfolio } from "@/app/components/Portfolio";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ perspective: "2000px" }}>
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
