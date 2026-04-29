import { type FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Section: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography sx={{ color: "#C0B2FF", fontWeight: 700, fontSize: "0.95rem", mb: 1 }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const Item: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display: "flex", gap: 1.5, mb: 0.7, alignItems: "flex-start" }}>
    <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: "#C0B2FF", flexShrink: 0, mt: "7px" }} />
    <Typography sx={{ color: "#B4C8DC", fontSize: "0.88rem", lineHeight: 1.7 }}>
      {children}
    </Typography>
  </Box>
);

const AccessibilityStatement: FC<Props> = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        background: "rgba(10, 15, 30, 0.97)",
        border: "1px solid rgba(120, 108, 196, 0.25)",
        backdropFilter: "blur(24px)",
        borderRadius: "20px",
        direction: "rtl",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
      },
    }}
  >
    <DialogTitle
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        pb: 1,
        pt: 3,
        px: 3,
      }}
    >
      <Typography
        sx={{
          color: "#C0B2FF",
          fontWeight: 800,
          fontSize: "1.2rem",
          textShadow: "0 0 14px rgba(185, 165, 255, 0.45)",
        }}
      >
        הצהרת נגישות
      </Typography>
      <IconButton
        onClick={onClose}
        aria-label="סגור"
        size="small"
        sx={{ color: "#607898", "&:hover": { color: "#9AAABE" } }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>

    <Divider sx={{ borderColor: "rgba(120, 108, 196, 0.15)", mx: 3 }} />

    <DialogContent sx={{ px: 3, py: 3 }}>
      <Typography sx={{ color: "#8CA0BC", fontSize: "0.82rem", mb: 3 }}>
        עודכן לאחרונה: אפריל 2025
      </Typography>

      <Section title="מחויבות הנגישות שלנו">
        <Typography sx={{ color: "#B4C8DC", fontSize: "0.88rem", lineHeight: 1.8 }}>
          פיתוח 770 מחויבת להנגשת אתר האינטרנט לאנשים עם מוגבלות, בהתאם לחוק
          שוויון זכויות לאנשים עם מוגבלות (תשנ"ח-1998) ותקנות הנגישות לשירות
          (תשע"ג-2013). אנו שואפים לעמוד בדרישות תקן{" "}
          <Box component="span" sx={{ color: "#C0B2FF" }}>
            WCAG 2.1 ברמה AA
          </Box>
          .
        </Typography>
      </Section>

      <Section title="פעולות הנגישות שבוצעו">
        <Item>ניגודיות צבע תקנית בין טקסט לרקע</Item>
        <Item>ניווט מלא באמצעות מקלדת</Item>
        <Item>תוויות ARIA לכל האלמנטים האינטראקטיביים</Item>
        <Item>מבנה כותרות היררכי ועקבי (H1–H3)</Item>
        <Item>תמיכה בהגדלת טקסט עד 200% ללא אובדן תוכן</Item>
        <Item>כיוון RTL מלא לתמיכה בעברית</Item>
        <Item>תגיות תיאור לאלמנטים ויזואליים</Item>
      </Section>

      <Section title="בעיות נגישות ידועות">
        <Typography sx={{ color: "#B4C8DC", fontSize: "0.88rem", lineHeight: 1.8 }}>
          האתר עשוי להכיל חלקים שטרם הונגשו במלואם. אנו עובדים על שיפור מתמיד
          ומתכוונים לבצע בדיקת נגישות מקיפה בהקדם.
        </Typography>
      </Section>

      <Section title="פניות בנושא נגישות">
        <Typography sx={{ color: "#B4C8DC", fontSize: "0.88rem", lineHeight: 1.8 }}>
          נתקלתם בקושי נגישות באתר? נשמח לשמוע ולטפל בהקדם.
        </Typography>
        <Box
          component="a"
          href="mailto:770pituach@gmail.com"
          sx={{
            display: "inline-block",
            mt: 1.5,
            color: "#B0A0FF",
            fontSize: "0.88rem",
            fontWeight: 600,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          770pituach@gmail.com
        </Box>
      </Section>
    </DialogContent>
  </Dialog>
);

export default AccessibilityStatement;
