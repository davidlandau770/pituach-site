import { type FC, useState } from "react";
import { Box, Typography, Container, Grid, Chip } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";

const ProjectCard: FC<{ project: (typeof PROJECTS)[number]; delay: number }> = ({
  project,
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
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(110, 98, 180, 0.3)" : "rgba(100, 90, 155, 0.1)"}`,
        background: "rgba(14, 20, 38, 0.88)",
        backdropFilter: "blur(20px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-9px)" : "translateY(0)"
          : "translateY(40px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
        boxShadow: hovered
          ? "0 22px 55px rgba(0,0,0,0.4)"
          : "0 4px 18px rgba(0,0,0,0.25)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Visual header */}
      <Box
        sx={{
          height: 180,
          background: project.gradient,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {hovered && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1.5px",
              background: "linear-gradient(90deg, transparent, rgba(160, 140, 220, 0.5), transparent)",
              animation: "scanLine 1.8s linear infinite",
            }}
          />
        )}

        <Box
          sx={{
            width: 68,
            height: 68,
            borderRadius: "18px",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.1rem",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.1) rotate(4deg)" : "scale(1)",
            zIndex: 1,
          }}
        >
          {project.icon}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#D4DCEC", mb: 1.5 }}>
          {project.title}
        </Typography>
        <Typography sx={{ color: "#5C6A80", fontSize: "0.88rem", lineHeight: 1.75, mb: 2.5, flex: 1 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
          {project.tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                background: "rgba(100, 90, 160, 0.1)",
                border: "1px solid rgba(110, 100, 170, 0.2)",
                color: "#9A90C8",
                fontSize: "0.7rem",
                height: 23,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const ProjectsSection: FC = () => (
  <Box id="projects" sx={{ py: { xs: 10, md: 16 } }}>
    <Container maxWidth="lg">
      <SectionHeader
        badge="הפרויקטים שלנו"
        title="עבודות שמדברות בעד עצמן"
        subtitle="כל פרויקט הוא סיפור של אתגר, פתרון חכם, ותוצאה שמגאה."
      />
      <Grid container spacing={3}>
        {PROJECTS.map((project, i) => (
          <Grid item xs={12} md={4} key={i}>
            <ProjectCard project={project} delay={i * 130} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ProjectsSection;
