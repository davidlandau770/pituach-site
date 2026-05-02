import { type FC, useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import type { SvgIconProps } from "@mui/material";
import type { ElementType } from "react";
import { STATS } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const sectionMask = "linear-gradient(to bottom, transparent 0%, black 8%, black 96%, transparent 100%)";

const StatItem: FC<{ stat: (typeof STATS)[number]; delay: number }> = ({ stat, delay }) => {
  const { ref, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const count = useCountUp(stat.number, 2000, started);
  const Icon = stat.icon as ElementType<SvgIconProps>;

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [inView, delay]);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        p: { xs: 3, md: 4 },
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1.5 }}>
        <Icon
          sx={{
            fontSize: "2rem",
            color: stat.color,
            filter: `drop-shadow(0 0 8px ${stat.color}70)`,
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "2.6rem", md: "3.4rem" },
          fontWeight: 900,
          color: stat.color,
          textShadow: `0 0 18px ${stat.color}60`,
          lineHeight: 1,
          mb: 1,
        }}
      >
        {count}
        {stat.suffix}
      </Typography>
      <Typography sx={{ color: stat.color, fontSize: "0.9rem", fontWeight: 500, opacity: 0.72 }}>
        {stat.label}
      </Typography>
    </Box>
  );
};

const StatsSection: FC = () => (
  <Box
    sx={{
      pt: { xs: 3, md: 9 },
      pb: { xs: 1, md: 9 },
      background: "linear-gradient(135deg, rgba(90, 78, 160, 0.06), rgba(50, 120, 170, 0.04))",
      maskImage: sectionMask,
      WebkitMaskImage: sectionMask,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: 280, md: 520 },
        height: { xs: 200, md: 360 },
        background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(120, 90, 210, 0.14), transparent 75%)",
        filter: "blur(30px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        pointerEvents: "none",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: { xs: 100, md: 200 },
        height: { xs: 160, md: 280 },
        background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(50, 130, 180, 0.14), transparent 80%)",
        filter: "blur(20px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        pointerEvents: "none",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: "20%",
        right: "5%",
        width: { xs: 100, md: 200 },
        height: { xs: 160, md: 280 },
        background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(130, 100, 200, 0.12), transparent 80%)",
        filter: "blur(20px)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        pointerEvents: "none",
      }}
    />

    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Grid container>
        {STATS.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <StatItem stat={stat} delay={i * 170} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default StatsSection;
