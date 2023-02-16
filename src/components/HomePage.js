import "../Style/HomePageStyles.css";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import Header from "./Header.";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";

export default function HomePage() {
   return (
      <>
         <Header />
         <HeroSection />
         <HighlightsSection />
         <AboutSection />
         <Footer />
      </>
   );
}
