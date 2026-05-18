import { useState, type FC } from "react";
import { Box, Typography } from "@mui/material";
import AccessibilityStatement from "../components/AccessibilityStatement";
import logo from "../assets/לוגו.png";

const FooterSection: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          py: { xs: 2.5, md: 3 },
          px: { xs: 3, md: 6 },
          borderTop: "1px solid rgba(100, 90, 155, 0.1)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: 1.5, md: 1 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            component="img"
            src={logo}
            alt="לוגו פיתוח 770"
            sx={{ height: 32, width: "auto", flexShrink: 0 }}
          />
          <Typography sx={{ color: "#607898", fontSize: "0.82rem" }}>
            נבנה על ידי פיתוח 770
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 2.5 } }}>
          <Box
            component="button"
            onClick={() => setOpen(true)}
            aria-label="פתח הצהרת נגישות"
            sx={{
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 0,
              color: "#7A8BA8",
              fontSize: "0.82rem",
              fontFamily: "inherit",
              transition: "color 0.25s ease",
              "&:hover": { color: "#C0B2FF" },
            }}
          >
            הצהרת נגישות
          </Box>
          <Typography sx={{ color: "#607898", fontSize: "0.82rem" }}>
            © כל הזכויות שמורות — 2025
          </Typography>
        </Box>
      </Box>

      <AccessibilityStatement open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default FooterSection;
