import { Box, Typography, Button } from "@mui/material";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function NavBar({ scrolled }: { scrolled?: boolean }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        px: { xs: 2, md: 6 },
        py: scrolled ? 1.5 : 2.5,
        background: scrolled ? "rgba(9, 13, 26, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: "1px solid",
        borderBottomColor: scrolled ? "rgba(100, 90, 155, 0.12)" : "transparent",
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #6B5FA8, #4A7AA8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.72rem",
            fontWeight: 900,
            color: "#E8E4F8",
            boxShadow: "0 0 14px rgba(100, 85, 170, 0.3)",
            letterSpacing: "-0.5px",
            flexShrink: 0,
          }}
        >
          770
        </Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #C8C4E4, #8578C4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          פיתוח 770
        </Typography>
      </Box>

      {/* Nav Links */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {[
          { label: "שירותים", id: "services" },
          { label: "פרויקטים", id: "projects" },
          { label: "אודות", id: "about" },
        ].map((link) => (
          <Box
            key={link.id}
            onClick={() => scrollTo(link.id)}
            sx={{
              color: "#A4B8CC",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 500,
              position: "relative",
              transition: "color 0.3s ease",
              "&:hover": { color: "#C0B2FF" },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -3,
                right: 0,
                width: 0,
                height: "1.5px",
                background: "linear-gradient(90deg, #8578C4, #5BA3C0)",
                transition: "width 0.3s ease",
              },
              "&:hover::after": { width: "100%" },
            }}
          >
            {link.label}
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Button
        onClick={() => scrollTo("contact")}
        sx={{
          px: { xs: 2.5, md: 3.2 },
          py: 0.9,
          borderRadius: "50px",
          background: "linear-gradient(135deg, #2E9A74, #1E8A9A)",
          color: "#E8F8F0",
          fontWeight: 700,
          fontSize: "0.85rem",
          textTransform: "none",
          boxShadow: "0 3px 14px rgba(46, 154, 116, 0.28)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 7px 22px rgba(46, 154, 116, 0.42)",
          },
        }}
      >
        צרו קשר
      </Button>
    </Box>
  );
}
