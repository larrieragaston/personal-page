import React from "react";
import AboutSection from "./sections/AboutSection"
import KnowledgeSection from "./sections/KnowledgeSection"
import ExperienceSection from "./sections/ExperienceSection"
import StudiesSection from "./sections/StudiesSection"
import ContactSection from "./sections/ContactSection"

export default function ContentSection() {
  return (
    <div className="sections" id="about">
      <AboutSection />
      <KnowledgeSection />
      <ExperienceSection />
      <StudiesSection />
      <ContactSection />
    </div>
  );
}