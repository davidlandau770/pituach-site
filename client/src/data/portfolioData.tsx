import type { ElementType } from "react";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import BoltIcon from "@mui/icons-material/Bolt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
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
      "ממשקי משתמש חיים, מהירים ונוחים לשימוש — כאלה שכיף להישאר בהם. חוויה חלקה, נגישה ומרשימה בכל מסך ובכל מכשיר.",
    features: [
      "React & TypeScript",
      "אנימציות חלקות ומדויקות",
      "עיצוב רספונסיבי לכל מסך",
      "UX/UI מוקפד ומודרני",
    ],
    color: "#8578C4",
    gradient: "linear-gradient(135deg, #6B5FA0, #4A5D9A)",
  },
  {
    icon: StorageIcon,
    title: "פיתוח Back-End",
    description:
      "תשתית שורדת עומסים. APIs חזקים, מסדי נתונים יציבים ואבטחה מובנית — שלא נופלים תחת לחץ.",
    features: [
      "Node.js & Express",
      "PostgreSQL",
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
      "אפליקציות נייטיב שנראות, מרגישות ומשיגות ביצועים ברמה מקצועית. קוד אחד, תוצאה שמדהימה.",
    features: [
      "React Native",
      "Expo Framework",
      "WebView",
      "העלאה ל־Google Play",
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
    number: 2,
    suffix: "+",
    label: "שנות ניסיון",
    icon: BoltIcon,
    color: "#C4A86A",
  },
  {
    number: 3,
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
    suffix: 'ש\'',
    label: "תמיכה וזמינות",
    icon: HeadsetMicIcon,
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
  link?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    icon: LocalShippingIcon,
    title: "מערכת ניהול הפלגות",
    description:
      "מערכת לניהול מסלולים והפלגות לחברת ספינות משא — שיוך הזמנות למסלולים עם סינון חכם לפי יעדים וקיבולת, אינטגרציה ל-DB חיצוני ומפה חיה של מיקומי הספינות.",
    tech: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    gradient: "linear-gradient(135deg, #12152A, #1A2045)",
    color: "#8A9ECC",
  },
  {
    icon: SmartphoneIcon,
    title: "אפליקציית קהילה חברתית",
    description:
      "אפליקציה לקריאה ועריכת תוכן תורני — ניווט מלא, רענון במשיכה ושיתוף תוכן.",
    tech: ["React Native", "Expo", "WebView"],
    gradient: "linear-gradient(135deg, #0D1A28, #162438)",
    color: "#7ABDD4",
    link: "https://play.google.com/store/apps/details?id=il.co.chabadpedia.app",
  },
  {
    icon: AutoAwesomeIcon,
    title: "משחק טריוויה",
    description:
      "משחק חידות עם בחירת רמת קושי, שאלות ברצף, מעקב זמן פתרון והצגת שיא אישי.",
    tech: ["Node.js", "MongoDB", "Supabase"],
    gradient: "linear-gradient(135deg, #0F1520, #1A1F35)",
    color: "#BBA0E0",
  },
];

export const SKILLS = [
  { name: "פיתוח Front-End — React & TypeScript", level: 90, color: "#82B8CC" },
  { name: "פיתוח Back-End — Node.js & Express", level: 82, color: "#7EAF8A" },
  { name: "מסדי נתונים ותשתיות", level: 78, color: "#C4A86A" },
  { name: "אפליקציות מובייל — React Native", level: 72, color: "#A49AC8" },
  { name: "DevOps ופריסה לענן", level: 65, color: "#C08888" },
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
