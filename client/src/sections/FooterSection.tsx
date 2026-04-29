import { useState, type FC } from "react";
import { Box, Typography } from "@mui/material";
import AccessibilityStatement from "../components/AccessibilityStatement";

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
            sx={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6B5FA8, #4A7AA8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.6rem",
              fontWeight: 900,
              color: "#E8E4F8",
              flexShrink: 0,
            }}
          >
            770
          </Box>
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
