import { type FC, useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { STATS } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

const StatItem: FC<{ stat: (typeof STATS)[number]; delay: number }> = ({ stat, delay }) => {
  const { ref, inView } = useInView(0.3);
  const [started, setStarted] = useState(false);
  const count = useCountUp(stat.number, 2000, started);

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
      <Typography sx={{ fontSize: "2rem", mb: 1 }}>{stat.icon}</Typography>
      <Typography
        sx={{
          fontSize: { xs: "2.6rem", md: "3.4rem" },
          fontWeight: 900,
          background: "linear-gradient(135deg, #A49AC8, #7DC3DC)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          mb: 1,
        }}
      >
        {count}
        {stat.suffix}
      </Typography>
      <Typography sx={{ color: "#7A88A0", fontSize: "0.9rem", fontWeight: 500 }}>
        {stat.label}
      </Typography>
    </Box>
  );
};

const StatsSection: FC = () => (
  <Box
    sx={{
      py: { xs: 8, md: 11 },
      background: "linear-gradient(135deg, rgba(90, 78, 160, 0.06), rgba(50, 120, 170, 0.04))",
      borderTop: "1px solid rgba(100, 90, 155, 0.08)",
      borderBottom: "1px solid rgba(100, 90, 155, 0.08)",
    }}
  >
    <Container maxWidth="lg">
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
