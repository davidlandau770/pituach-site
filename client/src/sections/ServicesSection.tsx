import { type FC, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import type { ElementType } from "react";
import SectionHeader from "../components/SectionHeader";
import { SERVICES } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const sectionMask =
  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)";

const ServiceCard: FC<{
  service: (typeof SERVICES)[number];
  delay: number;
}> = ({ service, delay }) => {
  const { ref, inView } = useInView(0.18);
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon as ElementType<SvgIconProps>;

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderRadius: "18px",
        p: { xs: 3, md: 4 },
        background: "rgba(14, 20, 38, 0.85)",
        border: `1px solid ${hovered ? service.color + "45" : "rgba(100, 90, 155, 0.14)"}`,
        backdropFilter: "blur(20px)",
        height: "100%",
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-7px)"
            : "translateY(0)"
          : "translateY(40px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
        boxShadow: hovered
          ? `0 18px 50px rgba(0,0,0,0.35), 0 0 0 1px ${service.color}22`
          : "0 4px 18px rgba(0,0,0,0.25)",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "14px",
          background: service.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          boxShadow: `0 3px 16px ${service.color}25`,
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.1) rotate(4deg)" : "scale(1)",
        }}
      >
        <Icon sx={{ fontSize: "1.6rem", color: "rgba(255,255,255,0.9)" }} />
      </Box>

      <Typography
        sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#D4DCEC", mb: 1.5 }}
      >
        {service.title}
      </Typography>

      <Typography
        sx={{ color: "#5C6A80", lineHeight: 1.8, mb: 3, fontSize: "0.93rem" }}
      >
        {service.description}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.1 }}>
        {service.features.map((feature) => (
          <Box
            key={feature}
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: service.color,
                flexShrink: 0,
                boxShadow: `0 0 5px ${service.color}70`,
              }}
            />
            <Typography sx={{ color: "#7A88A0", fontSize: "0.85rem" }}>
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ServicesSection: FC = () => (
  <Box
    id="services"
    sx={{
      py: { xs: 5, md: 16 },
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(100, 90, 160, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(100, 90, 160, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "55px 55px",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        animation: "gridBreathe 10s ease-in-out infinite",
        pointerEvents: "none",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: "15%",
        right: "10%",
        width: { xs: 200, md: 360 },
        height: { xs: 300, md: 520 },
        background:
          "radial-gradient(ellipse 55% 100% at 70% 30%, rgba(133, 100, 210, 0.16), transparent 75%)",
        filter: "blur(28px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        pointerEvents: "none",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: "15%",
        left: "12%",
        width: { xs: 180, md: 320 },
        height: { xs: 240, md: 420 },
        background:
          "radial-gradient(ellipse 55% 100% at 30% 70%, rgba(50, 130, 180, 0.13), transparent 75%)",
        filter: "blur(24px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        pointerEvents: "none",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: "20%",
        left: "-5%",
        width: { xs: 260, md: 460 },
        height: { xs: 260, md: 460 },
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(95, 78, 190, 0.09), transparent 70%)",
        filter: "blur(80px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        animation: "orbMove1 22s ease-in-out infinite",
        pointerEvents: "none",
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <SectionHeader
        badge="מה אנחנו עושים"
        title="שירותים שנותנים ערך אמיתי"
        subtitle="מפיתוח ממשק משתמש ועד תשתיות מורכבות — יש לנו את הכלים והניסיון."
      />
      <Grid container spacing={3}>
        {SERVICES.map((service, i) => (
          <Grid item xs={12} md={4} key={i}>
            <ServiceCard service={service} delay={i * 130} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ServicesSection;
