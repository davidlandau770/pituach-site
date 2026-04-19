import type { SxProps } from "@mui/material";

export const VIEW_TILE_ICONS: SxProps = {
  p: "4px",
  color: "#ccc",
  border: "1px solid #aaa",
  borderRadius: "6px",
  transition: "all 0.4s ease-in-out",
  margin: "0 2px",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#333",
    border: "1px solid #ccc",
  },
};
