import React from "react";
import HeroContent from "../components/hero";

const HeroPage = () => {
  return (
    <header className="w-full h-[90vh]">
      <img src="images/hero-img.jpg" alt="hero-image" className="w-full h-full object-cover" />
      
      {/* content section */}
      <HeroContent />
    </header>
  );
};

export default HeroPage;
