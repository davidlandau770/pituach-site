import { type FC, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import { SERVICES } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const ServiceCard: FC<{ service: (typeof SERVICES)[number]; delay: number }> = ({
  service,
  delay,
}) => {
  const { ref, inView } = useInView(0.18);
  const [hovered, setHovered] = useState(false);

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
          ? hovered ? "translateY(-7px)" : "translateY(0)"
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
          fontSize: "1.7rem",
          mb: 3,
          boxShadow: `0 3px 16px ${service.color}25`,
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.1) rotate(4deg)" : "scale(1)",
        }}
      >
        {service.icon}
      </Box>

      <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#D4DCEC", mb: 1.5 }}>
        {service.title}
      </Typography>

      <Typography sx={{ color: "#5C6A80", lineHeight: 1.8, mb: 3, fontSize: "0.93rem" }}>
        {service.description}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.1 }}>
        {service.features.map((feature) => (
          <Box key={feature} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
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
            <Typography sx={{ color: "#7A88A0", fontSize: "0.85rem" }}>{feature}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ServicesSection: FC = () => (
  <Box id="services" sx={{ py: { xs: 10, md: 16 } }}>
    <Container maxWidth="lg">
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
