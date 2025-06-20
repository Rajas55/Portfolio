import React from "react";
import { Header } from "./components/Header";
import { Popup } from "./components/Popup";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { SkillsSection } from "./components/SkillsSection";
import { Statistics } from "./components/Statistics";
import { Projects } from "./components/Projects";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
// import { BlogPreview } from "./components/BlogPreview";
// import { Testimonials } from "./components/Testimonials";
// import { Newsletter } from "./components/Newsletter";
import { Extracurricular } from "./components/Extracurricular";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThreeBackground } from "./components/ThreeBackground";
import { ScrollProgress } from "./components/ScrollProgress";
import { FloatingContact } from "./components/FloatingContact";
import { BackToTop } from "./components/BackToTop";
import { CookieConsent } from "./components/CookieConsent";
import { LoadingScreen } from "./components/LoadingScreen";
import { CursorSpotlight } from "./components/CursorSpotlight";
import { KeyboardNavigation } from "./components/KeyboardNavigation";
import { ContextMenu } from "./components/ContextMenu";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { GradientGlow } from "./components/GradientGlow";
export function App() {
  return <div className="bg-black min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <ThreeBackground />
      <ParallaxBackground />
      <GradientGlow />
      <CursorSpotlight />
      <KeyboardNavigation />
      <ContextMenu />
      <Header />
      <Popup/>
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Statistics />
        <Projects />
        <ProfessionalExperience />
        {/* <BlogPreview />
        <Testimonials />
        <Newsletter /> */}
        {/* <Extracurricular /> */}
      <Contact />
      </main>
      <Footer />
      <FloatingContact />
      <BackToTop />
      <CookieConsent />
    </div>;
}