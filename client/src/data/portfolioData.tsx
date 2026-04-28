import type { ElementType } from "react";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BoltIcon from "@mui/icons-material/Bolt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const TYPEWRITER_PHRASES = [
  "אתרים שמרשימים",
  "אפליקציות שעובדות",
  "קוד שחי ונושם",
  "חוויות שלא נשכחות",
  "פתרונות שמדרגים",
];

export interface ServiceItem {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: WebIcon,
    title: "פיתוח Front-End",
    description:
      "ממשקי משתמש חיים שכיף להשתמש בהם. מהיר, נגיש, ומרשים בכל מסך ובכל מכשיר.",
    features: [
      "React & TypeScript",
      "אנימציות חלקות",
      "עיצוב רספונסיבי",
      "UX/UI מוקפד",
    ],
    color: "#8578C4",
    gradient: "linear-gradient(135deg, #6B5FA0, #4A5D9A)",
  },
  {
    icon: StorageIcon,
    title: "פיתוח Back-End",
    description:
      "תשתית שורדת עומסים. APIs חזקים ומסדי נתונים יציבים שלא נופלים תחת לחץ.",
    features: [
      "Node.js & Express",
      "PostgreSQL & Redis",
      "REST & WebSockets",
      "Microservices",
    ],
    color: "#5BA3C0",
    gradient: "linear-gradient(135deg, #3D7FA8, #2E6080)",
  },
  {
    icon: SmartphoneIcon,
    title: "אפליקציות מובייל",
    description:
      "חוויה נייטיב על iOS ו-Android. קוד אחד, שתי פלטפורמות, תוצאה שמדהימה.",
    features: [
      "React Native",
      "Expo Framework",
      "Push Notifications",
      "App Store Deploy",
    ],
    color: "#C48A78",
    gradient: "linear-gradient(135deg, #9E5E48, #7E4888)",
  },
];

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  icon: ElementType;
}

export const STATS: StatItem[] = [
  { number: 5, suffix: "+", label: "שנות ניסיון", icon: BoltIcon },
  { number: 50, suffix: "+", label: "פרויקטים הושלמו", icon: RocketLaunchIcon },
  { number: 100, suffix: "%", label: "שביעות רצון", icon: EmojiEventsIcon },
  { number: 24, suffix: "/7", label: "תמיכה ומענה", icon: SupportAgentIcon },
];

export interface ProjectItem {
  icon: ElementType;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    icon: LocalShippingIcon,
    title: "מערכת ניהול לוגיסטית",
    description:
      "פלטפורמה מלאה לניהול שרשרת אספקה עם מעקב real-time, דשבורד ניהולי, ואינטגרציה למערכות ERP.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "linear-gradient(135deg, #12152A, #1A2045)",
  },
  {
    icon: GroupsIcon,
    title: "אפליקציית קהילה חברתית",
    description:
      "אפליקציה לבניית קהילות מקומיות עם צ'אט, ניהול אירועים, ומפת נקודות עניין חיה.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps"],
    gradient: "linear-gradient(135deg, #0D1A28, #162438)",
  },
  {
    icon: AutoAwesomeIcon,
    title: "פלטפורמת תמלול AI",
    description:
      "כלי לסנכרון ותמלול אוטומטי של שמע וטקסט בעברית, עם עורך חכם ואפשרות לייצוא מהיר.",
    tech: ["React", "Python", "Whisper AI", "FastAPI"],
    gradient: "linear-gradient(135deg, #0F1520, #1A1F35)",
  },
];

export const SKILLS = [
  { name: "React / TypeScript", level: 95, color: "#82B8CC" },
  { name: "Node.js / Express", level: 90, color: "#7EAF8A" },
  { name: "PostgreSQL / MongoDB", level: 85, color: "#C4A86A" },
  { name: "React Native", level: 80, color: "#A49AC8" },
  { name: "DevOps / Docker", level: 75, color: "#C08888" },
];

export const PARTICLES = [
  { id: 2, left: 18, delay: 8, dur: 23, size: 2 },
  { id: 4, left: 32, delay: 6, dur: 21, size: 1 },
  { id: 7, left: 53, delay: 3, dur: 22, size: 1 },
  { id: 11, left: 81, delay: 11, dur: 23, size: 2 },
  { id: 15, left: 43, delay: 10, dur: 17, size: 3 },
  { id: 19, left: 35, delay: 15, dur: 16, size: 1 },
];
