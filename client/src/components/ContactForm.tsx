import { useState, type FC, type ChangeEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Container,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SectionHeader from "./SectionHeader";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const fieldSx = (focused: string | null, name: string) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "11px",
    background: "rgba(12, 18, 34, 0.65)",
    backdropFilter: "blur(10px)",
    color: "#D4DCEC",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor:
        focused === name
          ? "rgba(120, 108, 190, 0.6)"
          : "rgba(100, 90, 155, 0.16)",
      transition: "all 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "rgba(110, 100, 175, 0.35)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7266B0 !important",
      // boxShadow: "0 0 0 3px rgba(110, 95, 175, 0.1)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#3D4A60",
    // left: "auto",
    right: 30,
    transformOrigin: "top right",
    "&.Mui-focused": { color: "#9A90C8" },
    "&.MuiInputLabel-shrink": {
      transform: "translate(0, -9px) scale(0.75)",
      right: 15,
    },
  },
  "& .MuiOutlinedInput-notchedOutline legend": {
    textAlign: "right",
  },
  // "& .MuiOutlinedInput-input": {
  // color: "#D4DCEC",
  // direction: "rtl",
  // textAlign: "right",
  // },
  // "& .MuiInputBase-inputMultiline": {
  // color: "#D4DCEC",
  // direction: "rtl",
  // textAlign: "right",
  // },
});

interface ContactItem {
  Icon: typeof EmailOutlinedIcon;
  // label: string;
  label: string;
  color: string;
  href?: string;
}

const contactInfo: ContactItem[] = [
  {
    Icon: EmailOutlinedIcon,
    // label: "מייל",
    label: "770pituach@gmail.com",
    color: "#8578C4",
    href: "mailto:770pituach@gmail.com",
  },
  {
    Icon: WhatsAppIcon,
    // label: "וואצאפ",
    label: "זמין בהודעה",
    color: "#25D366",
    href: "https://wa.me/18566778770/?text=*פיתוח%20770*%0Aשלום%20וברכה,%20רציתי%20לדעת:%20",
  },
  {
    Icon: AccessTimeIcon,
    // label: "זמן תגובה",
    label: "זמינות גבוהה",
    color: "#C48A78",
  },
];

const ContactForm: FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box
      id="contact"
      sx={{ py: { xs: 5, md: 16 }, position: "relative", overflow: "hidden" }}
    >
      {/* Section background with smooth fades */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(90, 70, 160, 0.07), transparent 80%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(100, 90, 160, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 90, 160, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent 5%, black 15%, black 85%, transparent 95%)",
          animation: "gridBreathe 12s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Spotlights — masked to prevent bleeding at section edges */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 240, md: 420 },
          height: { xs: 300, md: 500 },
          background:
            "radial-gradient(ellipse 55% 90% at 50% 30%, rgba(130, 100, 220, 0.14), transparent 80%)",
          filter: "blur(25px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: { xs: 240, md: 440 },
          height: { xs: 240, md: 440 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(95, 78, 190, 0.09), transparent 70%)",
          filter: "blur(70px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          animation: "orbMove4 28s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: { xs: 220, md: 420 },
          height: { xs: 220, md: 420 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(50, 130, 180, 0.08), transparent 70%)",
          filter: "blur(70px)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
          animation: "orbMove2 32s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          badge="צור קשר"
          title="יאללה, בואו נעשה משהו גדול"
          subtitle="מוכנים להתחיל? השאירו פרטים ונחזור אליכם בהקדם."
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            borderRadius: "22px",
            p: { xs: 3, md: 5 },
            background: "rgba(14, 20, 38, 0.65)",
            border: "1px solid rgba(100, 90, 155, 0.14)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 16px 50px rgba(0,0,0,0.28)",
          }}
        >
          {/* Contact info strip */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {contactInfo.map(({ Icon, label, color, href }) => {
              const content = (
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 0.6 }}
                  >
                    <Icon
                      sx={{
                        fontSize: "1.4rem",
                        color,
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{ color: "#3D4A60", fontSize: "0.72rem", mb: 0.2 }}
                  >
                    {label}
                  </Typography>
                </Box>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        "& .MuiSvgIcon-root": { transform: "scale(1.15)" },
                      },
                    }}
                  >
                    {content}
                  </Box>
                </a>
              ) : (
                <Box key={label}>{content}</Box>
              );
            })}
          </Box>

          <Box
            sx={{
              height: 1,
              background: "rgba(100, 90, 155, 0.1)",
              mb: 4,
              borderRadius: "1px",
            }}
          />

          {status === "success" && (
            <Alert
              icon={<CheckCircleOutlineIcon sx={{ color: "#5AA880" }} />}
              severity="success"
              sx={{
                mb: 3,
                background: "rgba(80, 160, 120, 0.08)",
                border: "1px solid rgba(80, 160, 120, 0.22)",
                color: "#5AA880",
                borderRadius: "11px",
                "& .MuiAlert-icon": { color: "#5AA880" },
              }}
            >
              ההודעה נשלחה! נחזור אליך תוך 24 שעות.
            </Alert>
          )}

          {status === "error" && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                background: "rgba(180, 80, 80, 0.08)",
                border: "1px solid rgba(180, 80, 80, 0.22)",
                color: "#C08080",
                borderRadius: "11px",
                "& .MuiAlert-icon": { color: "#C08080" },
              }}
            >
              שגיאה בשליחה — נסה שוב.
            </Alert>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                name="name"
                label="השם שלך"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                required
                fullWidth
                sx={fieldSx(focused, "name")}
              />
              <TextField
                name="email"
                label="כתובת מייל"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
                fullWidth
                sx={fieldSx(focused, "email")}
              />
            </Box>

            <TextField
              name="message"
              label="ספר לנו על הפרויקט שלך"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              required
              multiline
              rows={5}
              fullWidth
              sx={fieldSx(focused, "message")}
            />

            <Button
              type="submit"
              disabled={status === "loading"}
              endIcon={
                status !== "loading" ? (
                  <SendIcon sx={{ transform: "scaleX(-1)", p: "1px" }} />
                ) : undefined
              }
              sx={{
                py: 1.7,
                borderRadius: "11px",
                background:
                  status === "loading"
                    ? "rgba(100, 88, 170, 0.35)"
                    : "linear-gradient(135deg, #6B5FA8, #4A7AA8)",
                color: "#E8E4F8",
                fontWeight: 700,
                fontSize: "0.97rem",
                textTransform: "none",
                gap: 1.5,
                boxShadow: "0 4px 18px rgba(90, 78, 165, 0.28)",
                transition: "all 0.3s ease",
                "&:hover:not(:disabled)": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 9px 28px rgba(90, 78, 165, 0.42)",
                },
                "&:disabled": { color: "rgba(220, 210, 240, 0.45)" },
              }}
            >
              {status === "loading" ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={17} sx={{ color: "#E8E4F8" }} />
                  שולח...
                </Box>
              ) : (
                "שגר הודעה"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
