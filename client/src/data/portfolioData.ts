export const TYPEWRITER_PHRASES = [
  "אתרים שמרשימים",
  "אפליקציות שעובדות",
  "קוד שחי ונושם",
  "חוויות שלא נשכחות",
  "פתרונות שמדרגים",
];

export const SERVICES = [
  {
    icon: "⚛️",
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
    icon: "⚙️",
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
    icon: "📱",
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

export const STATS = [
  { number: 5, suffix: "+", label: "שנות ניסיון", icon: "⚡" },
  { number: 50, suffix: "+", label: "פרויקטים הושלמו", icon: "🚀" },
  { number: 100, suffix: "%", label: "שביעות רצון", icon: "🎯" },
  { number: 24, suffix: "/7", label: "תמיכה ומענה", icon: "💬" },
];

export const PROJECTS = [
  {
    icon: "📦",
    title: "מערכת ניהול לוגיסטית",
    description:
      "פלטפורמה מלאה לניהול שרשרת אספקה עם מעקב real-time, דשבורד ניהולי, ואינטגרציה למערכות ERP.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    gradient: "linear-gradient(135deg, #12152A, #1A2045)",
  },
  {
    icon: "👥",
    title: "אפליקציית קהילה חברתית",
    description:
      "אפליקציה לבניית קהילות מקומיות עם צ'אט, ניהול אירועים, ומפת נקודות עניין חיה.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps"],
    gradient: "linear-gradient(135deg, #0D1A28, #162438)",
  },
  {
    icon: "🤖",
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

// Deterministic particles — no Math.random() to keep renders stable
export const PARTICLES = [
  // { id: 0, left: 5, delay: 0, dur: 20, size: 2 },
  // { id: 1, left: 11, delay: 4, dur: 16, size: 1 },
  { id: 2, left: 18, delay: 8, dur: 23, size: 2 },
  // { id: 3, left: 25, delay: 1, dur: 18, size: 3 },
  { id: 4, left: 32, delay: 6, dur: 21, size: 1 },
  // { id: 5, left: 39, delay: 2, dur: 17, size: 2 },
  // { id: 6, left: 46, delay: 9, dur: 19, size: 3 },
  { id: 7, left: 53, delay: 3, dur: 22, size: 1 },
  // { id: 8, left: 60, delay: 7, dur: 16, size: 2 },
  // { id: 9, left: 67, delay: 1, dur: 20, size: 3 },
  // { id: 10, left: 74, delay: 5, dur: 18, size: 1 },
  { id: 11, left: 81, delay: 11, dur: 23, size: 2 },
  // { id: 12, left: 87, delay: 2, dur: 15, size: 3 },
  // { id: 13, left: 93, delay: 6, dur: 19, size: 1 },
  // { id: 14, left: 22, delay: 13, dur: 21, size: 2 },
  { id: 15, left: 43, delay: 10, dur: 17, size: 3 },
  // { id: 16, left: 58, delay: 14, dur: 22, size: 1 },
  // { id: 17, left: 76, delay: 0, dur: 18, size: 2 },
  // { id: 18, left: 89, delay: 8, dur: 20, size: 3 },
  { id: 19, left: 35, delay: 15, dur: 16, size: 1 },
];
