import { type FC } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "../hooks/useInView";

interface Props {
  badge: string;
  title: string;
  subtitle: string;
}

const SectionHeader: FC<Props> = ({ badge, title, subtitle }) => {
  const { ref, inView } = useInView(0.2);

  return (
    <Box ref={ref} sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          display: "inline-flex",
          px: 2.5,
          py: 1,
          borderRadius: "50px",
          border: "1px solid rgba(120, 108, 196, 0.28)",
          background: "rgba(100, 88, 180, 0.07)",
          mb: 3,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}
      >
        <Typography sx={{ color: "#A49AC8", fontSize: "0.82rem", fontWeight: 600, letterSpacing: 1 }}>
          {badge}
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.9rem", md: "2.7rem" },
          fontWeight: 800,
          color: "#DCE3F0",
          mb: 2,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.1s",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#6B7A94",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          maxWidth: 560,
          mx: "auto",
          lineHeight: 1.8,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.2s",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
