import { type FC, useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { SKILLS } from "../data/portfolioData";

const SkillBar: FC<{
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}> = ({ name, level, color, delay, inView }) => (
  <Box sx={{ mb: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography sx={{ color: "#C4D0E4", fontSize: "0.88rem", fontWeight: 600 }}>
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
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
            animation: inView ? `shimmer 1.5s ease ${delay}ms 1` : "none",
          },
        }}
      />
    </Box>
  </Box>
);

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        background: "rgba(14, 19, 35, 0.4)",
        borderTop: "1px solid rgba(100, 90, 155, 0.08)",
        borderBottom: "1px solid rgba(100, 90, 155, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

          {/* Text column */}
          <Grid
            item xs={12} md={6}
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
              <Typography sx={{ color: "#9A90C8", fontSize: "0.82rem", fontWeight: 600, letterSpacing: 1 }}>
                עלינו
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.7rem" },
                fontWeight: 800,
                color: "#DCE3F0",
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

            <Typography sx={{ color: "#4E5E78", lineHeight: 1.9, mb: 3, fontSize: "0.97rem" }}>
              פיתוח 770 היא בית תוכנה שמאמין שקוד טוב הוא קוד שמשרת את הלקוח. אנחנו
              לא בונים "עוד אתר" — אנחנו בונים כלים שמשנים את האופן שבו עסקים עובדים.
            </Typography>

            <Typography sx={{ color: "#4E5E78", lineHeight: 1.9, mb: 4, fontSize: "0.97rem" }}>
              עם יותר מ-5 שנות ניסיון בפיתוח Full-Stack, טיפלנו בכל דבר מאפליקציות
              סטארטאפ קטנות ועד מערכות ארגוניות מורכבות. כל פרויקט מקבל את מלוא
              תשומת הלב שלנו.
            </Typography>

            {[
              { icon: "⚡", text: "ביצועים מהירים — עומד בעומסים של מאות משתמשים במקביל" },
              { icon: "🔒", text: "אבטחה ברמה הגבוהה ביותר בכל שלב בפיתוח" },
              { icon: "📱", text: "תמיד רספונסיבי — מנייד ועד דסקטופ בצורה מושלמת" },
              { icon: "🤝", text: "ליווי אישי מלא — לא נעלמים אחרי הלאונץ'" },
            ].map((item, i) => (
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
                    fontSize: "0.95rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography sx={{ color: "#7A88A0", fontSize: "0.92rem" }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Skills column */}
          <Grid
            item xs={12} md={6}
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
              <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#D4DCEC", mb: 4 }}>
                ⚙️ מחסנית הטכנולוגיה שלנו
              </Typography>
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
