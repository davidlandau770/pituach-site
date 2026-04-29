import { type FC, useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import NavBar from "../global/components/navBar/NavBar";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import StatsSection from "../sections/StatsSection";
import ProjectsSection from "../sections/ProjectsSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import { PARTICLES } from "../data/portfolioData";

const Portfolio: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Box
      sx={{
        direction: "rtl",
        background: "#090D1A",
        minHeight: "100vh",
        color: "#DCE3F0",
        overflowX: "hidden",
      }}
    >
      <NavBar scrolled={scrolled} />
      {PARTICLES.map((p) => (
        <Box
          key={p.id}
          sx={{
            position: "fixed",
            bottom: "-20px",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(160, 148, 220, 0.9), transparent 70%)",
            boxShadow: `0 0 ${p.size * 2}px rgba(140, 120, 210, 0.5)`,
            animation: `particleRise ${p.dur}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
      <HeroSection onScrollTo={scrollTo} />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </Box>
  );
};

export default Portfolio;
