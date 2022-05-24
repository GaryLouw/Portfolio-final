import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
    </div>
  );
}
