import { type FC, useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DevicesIcon from "@mui/icons-material/Devices";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsIcon from "@mui/icons-material/Settings";
import { SKILLS } from "../data/portfolioData";

const sectionMask =
  "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)";

const SkillBar: FC<{
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}> = ({ name, level, color, delay, inView }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography
        sx={{ color, fontSize: "0.88rem", fontWeight: 600, opacity: 0.9 }}
      >
        {name}
      </Typography>
      <Typography sx={{ color, fontSize: "0.88rem", fontWeight: 700 }}>
        {level}%
      </Typography>
    </Box>
    <Box
      sx={{
        height: 5,
        borderRadius: "100px",
        background: "rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          borderRadius: "100px",
          background: `linear-gradient(90deg, ${color}55, ${color})`,
          width: inView ? `${level}%` : "0%",
          transition: `width 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
          boxShadow: `0 0 10px ${color}40`,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            animation: inView ? `shimmer 1.5s ease ${delay}ms 1` : "none",
          },
        }}
      />
    </Box>
  </Box>
);

const features = [
  {
    Icon: BoltIcon,
    text: "ביצועים מהירים — עומד בעומסים של מאות משתמשים במקביל",
    color: "#A49AC8",
  },
  {
    Icon: LockOutlinedIcon,
    text: "אבטחה ברמה הגבוהה ביותר בכל שלב בפיתוח",
    color: "#5BA3C0",
  },
  {
    Icon: DevicesIcon,
    text: "תמיד רספונסיבי — מנייד ועד דסקטופ בצורה מושלמת",
    color: "#7EAF8A",
  },
  {
    Icon: HandshakeIcon,
    text: "ליווי אישי מלא — לא נעלמים אחרי הלאונץ'",
    color: "#C48A78",
  },
];

const AboutSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 4, md: 11 },
        background: "rgba(14, 19, 35, 0.4)",
        maskImage: sectionMask,
        WebkitMaskImage: sectionMask,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: "8%",
          width: { xs: 180, md: 320 },
          height: { xs: 260, md: 460 },
          background:
            "radial-gradient(ellipse 50% 90% at 20% 30%, rgba(95, 78, 190, 0.16), transparent 80%)",
          filter: "blur(25px)",
          maskImage: sectionMask,
          WebkitMaskImage: sectionMask,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "18%",
          right: "10%",
          width: { xs: 160, md: 280 },
          height: { xs: 220, md: 380 },
          background:
            "radial-gradient(ellipse 50% 80% at 80% 70%, rgba(50, 130, 180, 0.13), transparent 80%)",
          filter: "blur(22px)",
          maskImage: sectionMask,
          WebkitMaskImage: sectionMask,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-5%",
          width: { xs: 260, md: 500 },
          height: { xs: 260, md: 500 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 78, 190, 0.08), transparent 70%)",
          filter: "blur(90px)",
          maskImage: sectionMask,
          WebkitMaskImage: sectionMask,
          animation: "orbMove1 30s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: "-8%",
          width: { xs: 220, md: 440 },
          height: { xs: 220, md: 440 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(50, 130, 180, 0.07), transparent 70%)",
          filter: "blur(80px)",
          maskImage: sectionMask,
          WebkitMaskImage: sectionMask,
          animation: "orbMove2 36s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(36px)",
              transition: "all 0.9s ease",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                px: 2.5,
                py: 1,
                borderRadius: "50px",
                border: "1px solid rgba(120, 108, 190, 0.25)",
                background: "rgba(90, 78, 160, 0.07)",
                mb: 3,
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
                עלינו
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.7rem" },
                fontWeight: 800,
                background: "linear-gradient(135deg, #F0ECE4 0%, #D0C8E8 55%, #A8C0D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              מפתחים שאוהבים
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: "linear-gradient(135deg, #9A8FD8, #5BACC4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                את מה שהם עושים
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#B8CCE0",
                lineHeight: 1.9,
                mb: 3,
                fontSize: "0.97rem",
              }}
            >
              פיתוח 770 היא בית תוכנה שמאמין שקוד טוב הוא קוד שמשרת את הלקוח.
              אנחנו לא בונים "עוד אתר" — אנחנו בונים כלים שמשנים את האופן שבו
              עסקים עובדים.
            </Typography>

            <Typography
              sx={{
                color: "#B8CCE0",
                lineHeight: 1.9,
                mb: 4,
                fontSize: "0.97rem",
              }}
            >
              עם יותר מ-5 שנות ניסיון בפיתוח Full-Stack, טיפלנו בכל דבר
              מאפליקציות סטארטאפ קטנות ועד מערכות ארגוניות מורכבות. כל פרויקט
              מקבל את מלוא תשומת הלב שלנו.
            </Typography>

            {features.map(({ Icon, text, color }, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(18px)",
                  transition: `all 0.6s ease ${0.3 + i * 0.09}s`,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "9px",
                    background: "rgba(100, 90, 160, 0.09)",
                    border: "1px solid rgba(110, 100, 170, 0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: "1.1rem", color }} />
                </Box>
                <Typography sx={{ color, fontSize: "0.92rem", opacity: 0.88 }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-36px)",
              transition: "all 0.9s ease 0.2s",
            }}
          >
            <Box
              sx={{
                borderRadius: "22px",
                p: { xs: 3, md: 4 },
                background: "rgba(14, 20, 38, 0.65)",
                border: "1px solid rgba(100, 90, 155, 0.14)",
                backdropFilter: "blur(20px)",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}
              >
                <SettingsIcon sx={{ fontSize: "1.1rem", color: "#9A90C8" }} />
                <Typography
                  sx={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#D4DCEC",
                  }}
                >
                  מחסנית הטכנולוגיה שלנו
                </Typography>
              </Box>
              {SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={i * 100}
                  inView={inView}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
