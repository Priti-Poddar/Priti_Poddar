import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TornEdge } from "./components/TornEdge";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-[#F5F0E8]">
        <BackgroundEffects />
        <Navbar />
        <main>
          <Hero />
          <TornEdge colorTop={"#F5F0E8"} colorBottom={"#B94040"} flip={false} />
          <About />
          <Marquee />
          <Skills />
          <TornEdge colorTop={"#F5F0E8"} colorBottom={"#EDE8DC"} flip={false} />
          <Projects />
          <TornEdge colorTop={"#B94040"} colorBottom={"#EDE8DC"} flip={true} />
          <Research />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
