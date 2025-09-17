import Hero from "./components/Hero";
import SwiperGallery from "./components/SwiperGallery";
import AtTokyo from "./components/AtTokyo";
import Webelieve from "./components/Webelieve";
import HowItWorks from "./components/HowItWork/HowItWork";
import ModulesSection from "./components/ModulesSection";
import UnderDevelopmentSlider from "./components/UnderDevelopmentSection";
import AICharacterSection from "./components/AICharacterSection";
import FaqSection from "./components/FaqSection";
import TokyoIntelligenceSection from "./components/TokyoIntelligenceSection";

export default function Home() {
  return (
    <div>
      <main>
       <Hero />
       <SwiperGallery />
       <AtTokyo />
       <TokyoIntelligenceSection />
       <HowItWorks />
       <Webelieve />
       <section className="bg-black sm:py-20 py-16" id="modules">
        <ModulesSection />
       <UnderDevelopmentSlider />
       </section>
       <AICharacterSection />
       <FaqSection />
      </main>
      
    </div>
  );
}
