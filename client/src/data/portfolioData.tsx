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
  "מערכות שמחזיקות",
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
  color: string;
}

export const STATS: StatItem[] = [
  {
    number: 5,
    suffix: "+",
    label: "שנות ניסיון",
    icon: BoltIcon,
    color: "#C4A86A",
  },
  {
    number: 50,
    suffix: "+",
    label: "פרויקטים הושלמו",
    icon: RocketLaunchIcon,
    color: "#7ABDD4",
  },
  {
    number: 100,
    suffix: "%",
    label: "שביעות רצון",
    icon: EmojiEventsIcon,
    color: "#7DC49A",
  },
  {
    number: 24,
    suffix: "/7",
    label: "תמיכה ומענה",
    icon: SupportAgentIcon,
    color: "#BBA0E0",
  },
];

export interface ProjectItem {
  icon: ElementType;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  color: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    icon: LocalShippingIcon,
    title: "מערכת ניהול לוגיסטית",
    description:
      "פלטפורמה מלאה לניהול שרשרת אספקה עם מעקב real-time, דשבורד ניהולי, ואינטגרציה למערכות ERP.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "linear-gradient(135deg, #12152A, #1A2045)",
    color: "#8A9ECC",
  },
  {
    icon: GroupsIcon,
    title: "אפליקציית קהילה חברתית",
    description:
      "אפליקציה לבניית קהילות מקומיות עם צ'אט, ניהול אירועים, ומפת נקודות עניין חיה.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps"],
    gradient: "linear-gradient(135deg, #0D1A28, #162438)",
    color: "#7ABDD4",
  },
  {
    icon: AutoAwesomeIcon,
    title: "פלטפורמת תמלול AI",
    description:
      "כלי לסנכרון ותמלול אוטומטי של שמע וטקסט בעברית, עם עורך חכם ואפשרות לייצוא מהיר.",
    tech: ["React", "Python", "Whisper AI", "FastAPI"],
    gradient: "linear-gradient(135deg, #0F1520, #1A1F35)",
    color: "#BBA0E0",
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
  { id: 1,  left: 7,  delay: -5,  dur: 19, size: 3 },
  { id: 2,  left: 14, delay: -2,  dur: 20, size: 5 },
  { id: 3,  left: 24, delay: -9,  dur: 22, size: 2 },
  { id: 4,  left: 36, delay: -7,  dur: 18, size: 3 },
  { id: 5,  left: 46, delay: -13, dur: 21, size: 2 },
  { id: 6,  left: 55, delay: -11, dur: 22, size: 6 },
  { id: 7,  left: 63, delay: -4,  dur: 19, size: 2 },
  { id: 8,  left: 73, delay: -16, dur: 23, size: 4 },
  { id: 9,  left: 83, delay: -8,  dur: 20, size: 2 },
  { id: 10, left: 92, delay: -15, dur: 21, size: 3 },
];
