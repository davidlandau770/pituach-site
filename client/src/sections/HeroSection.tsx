import { type FC } from "react";
import { Box, Typography, Button, Chip, Container } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TypewriterText from "../components/TypewriterText";
import { PARTICLES } from "../data/portfolioData";

interface Props {
  onScrollTo: (id: string) => void;
}

const HeroSection: FC<Props> = ({ onScrollTo }) => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        pt: 12,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(100, 90, 160, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 90, 160, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
          animation: "gridBreathe 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {PARTICLES.map((p) => (
        <Box
          key={p.id}
          sx={{
            position: "absolute",
            bottom: "-20px",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(180, 168, 220, 0.05)",
            animation: `particleRise ${p.dur}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          top: "6%",
          right: "6%",
          width: { xs: 240, md: 460 },
          height: { xs: 240, md: 460 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 78, 190, 0.17), transparent 72%)",
          filter: "blur(70px)",
          animation: "orbMove1 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "4%",
          width: { xs: 180, md: 400 },
          height: { xs: 180, md: 400 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(50, 130, 180, 0.14), transparent 72%)",
          filter: "blur(70px)",
          animation: "orbMove2 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "38%",
          left: "38%",
          width: { xs: 120, md: 300 },
          height: { xs: 120, md: 300 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180, 110, 80, 0.1), transparent 70%)",
          filter: "blur(55px)",
          animation: "orbMove3 15s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "70%",
          right: "20%",
          width: { xs: 140, md: 320 },
          height: { xs: 140, md: 320 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(120, 80, 200, 0.1), transparent 70%)",
          filter: "blur(60px)",
          animation: "orbMove4 25s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2.5,
            py: 0.9,
            borderRadius: "50px",
            border: "1px solid rgba(120, 108, 190, 0.25)",
            background: "rgba(90, 78, 165, 0.07)",
            mb: 6,
            backdropFilter: "blur(12px)",
            animation: "fadeInUp 0.8s ease both",
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#5AA880",
              animation: "pulse 2.2s ease-in-out infinite",
              boxShadow: "0 0 8px rgba(90, 168, 128, 0.6)",
            }}
          />
          <Typography
            sx={{
              color: "#9A90C8",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: 0.5,
            }}
          >
            זמינים לפרויקטים חדשים
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3.4rem",
              md: "4.6rem",
              lg: "5.6rem",
            },
            fontWeight: 900,
            lineHeight: 1,
            mb: 3,
            background:
              "linear-gradient(135deg, #F0EEF8 0%, #C8C2E8 30%, #8D84C8 60%, #5BA3C0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            animation:
              "gradientShift 7s ease infinite, fadeInUp 0.9s ease 0.1s both",
            letterSpacing: "-0.02em",
          }}
        >
          פיתוח 770
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md: "2.1rem" },
            fontWeight: 700,
            mb: 4,
            minHeight: { xs: "2.2rem", md: "3rem" },
            animation: "fadeInUp 0.9s ease 0.2s both",
          }}
        >
          <Box component="span" sx={{ color: "#B8C4D8" }}>
            אנחנו בונים{" "}
          </Box>
          <TypewriterText />
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.95rem", md: "1.08rem" },
            color: "#4E5E78",
            maxWidth: 560,
            mx: "auto",
            mb: 6,
            lineHeight: 1.85,
            animation: "fadeInUp 0.9s ease 0.3s both",
          }}
        >
          מפיתוח אתרים ועד אפליקציות מורכבות — אנחנו מביאים את הרעיונות שלך
          לחיים עם טכנולוגיה מתקדמת וחוויית משתמש שלא נשכחת.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 8,
            animation: "fadeInUp 0.9s ease 0.4s both",
          }}
        >
          <Button
            onClick={() => onScrollTo("contact")}
            startIcon={<RocketLaunchIcon />}
            sx={{
              gap: 2,
              px: { xs: 4, md: 5.5 },
              py: { xs: 1.4, md: 1.8 },
              borderRadius: "50px",
              background: "linear-gradient(135deg, #6B5FA8, #4A7AA8)",
              color: "#E8E4F8",
              fontWeight: 700,
              fontSize: { xs: "0.95rem", md: "1rem" },
              textTransform: "none",
              boxShadow: "0 4px 22px rgba(100, 80, 170, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 32px rgba(100, 80, 170, 0.45)",
              },
            }}
          >
            בואו נדבר
          </Button>
          <Button
            onClick={() => onScrollTo("projects")}
            sx={{
              px: { xs: 4, md: 5.5 },
              py: { xs: 1.4, md: 1.8 },
              borderRadius: "50px",
              border: "1px solid rgba(120, 108, 190, 0.3)",
              color: "#9A90C8",
              fontWeight: 700,
              fontSize: { xs: "0.95rem", md: "1rem" },
              textTransform: "none",
              background: "rgba(90, 80, 160, 0.05)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(90, 80, 160, 0.12)",
                borderColor: "rgba(120, 108, 190, 0.5)",
                transform: "translateY(-4px)",
              },
            }}
          >
            הפרויקטים שלנו ↓
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeInUp 0.9s ease 0.5s both",
          }}
        >
          {[
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "React Native",
            "Docker",
          ].map((tech, i) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                background: "rgba(14, 20, 36, 0.75)",
                border: "1px solid rgba(100, 90, 155, 0.2)",
                color: "#7A88A0",
                fontSize: "0.78rem",
                backdropFilter: "blur(10px)",
                animation: `float ${3.2 + i * 0.4}s ease-in-out ${i * 0.25}s infinite`,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "rgba(120, 108, 190, 0.45)",
                  color: "#A49AC8",
                },
              }}
            />
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.3,
          animation: "fadeInUp 1s ease 1.2s both",
        }}
      >
        <Box
          sx={{
            width: 1.5,
            height: 42,
            background: "linear-gradient(to bottom, #8578C4, transparent)",
            animation: "scrollBounce 1.6s ease-in-out infinite",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
