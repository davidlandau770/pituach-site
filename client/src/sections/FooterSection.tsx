import { type FC } from "react";
import { Box, Typography } from "@mui/material";

const FooterSection: FC = () => (
  <Box
    sx={{
      py: 3,
      px: { xs: 3, md: 6 },
      borderTop: "1px solid rgba(100, 90, 155, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
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
        }}
      >
        770
      </Box>
      <Typography sx={{ color: "#2E3A50", fontSize: "0.82rem" }}>
        © כל הזכויות שמורות — 2025
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
      <Typography sx={{ color: "#2E3A50", fontSize: "0.82rem" }}>
        נבנה על ידי פיתוח 770
      </Typography>
    </Box>
  </Box>
);

export default FooterSection;
