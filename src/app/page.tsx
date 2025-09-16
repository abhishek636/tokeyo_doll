import Hero from "./components/Hero";
import SwiperGallery from "./components/SwiperGallery";
import AtTokyo from "./components/AtTokyo";
import Webelieve from "./components/Webelieve";
export default function Home() {
  return (
    <div>
      <main>
       <Hero />
       <SwiperGallery />
       <AtTokyo />
       <Webelieve />
      </main>
      
    </div>
  );
}
