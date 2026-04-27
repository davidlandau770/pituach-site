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
      boxShadow: "0 0 0 3px rgba(110, 95, 175, 0.1)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#3D4A60",
    "&.Mui-focused": { color: "#9A90C8" },
  },
  "& .MuiOutlinedInput-input": { color: "#D4DCEC" },
  "& .MuiInputBase-inputMultiline": { color: "#D4DCEC" },
});

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
      await new Promise((res) => setTimeout(res, 1200));
      // await axios.post('/api/contact', form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="md">
        <SectionHeader
          badge="צור קשר"
          title="יאללה, בואו נעשה משהו גדול"
          subtitle="מוכנים להתחיל? השאירו פרטים ונחזור אליכם תוך 24 שעות."
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
            {[
              { icon: "📧", label: "מייל", value: "770pituach@gmail.com" },
              { icon: "📞", label: "טלפון", value: "זמין לשיחה" },
              { icon: "⏰", label: "זמן תגובה", value: "עד 24 שעות" },
            ].map((item) => (
              <Box key={item.label} sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: "1.3rem", mb: 0.4 }}>
                  {item.icon}
                </Typography>
                <Typography
                  sx={{ color: "#3D4A60", fontSize: "0.72rem", mb: 0.2 }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    color: "#7A88A0",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}
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
              ✅ ההודעה נשלחה! נחזור אליך תוך 24 שעות.
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
                "🚀 שגר הודעה"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
