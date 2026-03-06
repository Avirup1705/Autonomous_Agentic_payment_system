import React, { useState } from "react";
import Squares from "../components/Squares";
import LandingNav from "../components/LandingNav";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import LandingFooter from "../components/LandingFooter";
import "../components/Landing.css";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`landing-page ${isMenuOpen ? "menu-open" : ""}`} style={{ scrollBehavior: "smooth" }}>
      {/* Grid Background */}
      <div className="grid-background">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="#1a3a1a"
          hoverFillColor="#0d2a0d"
        />
      </div>

      <LandingNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
