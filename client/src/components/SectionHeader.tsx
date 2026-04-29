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
        <Typography
          sx={{
            background: "linear-gradient(90deg, #F0C050, #E07840)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: 1,
            filter: "drop-shadow(0 0 6px rgba(240, 192, 80, 0.4))",
          }}
        >
          {badge}
        </Typography>
      </Box>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.9rem", md: "2.7rem" },
          fontWeight: 800,
          background: "linear-gradient(135deg, #F0ECE4 0%, #D0C8E8 55%, #A8C0D4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          mb: 2,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          background: "linear-gradient(120deg, #A8C4DC 0%, #C4B0F8 45%, #7EC8DC 100%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: inView ? "gradientShift 8s ease infinite" : "none",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          maxWidth: 560,
          mx: "auto",
          lineHeight: 1.8,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
