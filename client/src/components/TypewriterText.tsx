import { type FC, useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { TYPEWRITER_PHRASES } from "../data/portfolioData";

const TypewriterText: FC = () => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIdx];
    const tick = () => {
      if (!deleting) {
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
          timer.current = setTimeout(tick, 105);
        } else {
          timer.current = setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (text.length > 0) {
          setText(phrase.slice(0, text.length - 1));
          timer.current = setTimeout(tick, 55);
        } else {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    };
    timer.current = setTimeout(tick, 80);
    return () => clearTimeout(timer.current);
  }, [text, phraseIdx, deleting]);

  return (
    <Box component="span">
      <Box
        component="span"
        sx={{
          background: "linear-gradient(90deg, #9A8FD8, #5BACC4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {text}
      </Box>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          width: "2px",
          height: "0.82em",
          background: "#8578C4",
          ml: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 0.85s step-end infinite",
        }}
      />
    </Box>
  );
};

export default TypewriterText;
