import type { CSSProperties } from "react";

export interface FilterInterface {
  label: string;
  key: string;
  value: string | string[];
}

export interface FilterInfoInterface {
  options: FilterInterface[];
  selectedOptions: FilterInterface[];
  title: string;
  popupHorizontal?: "right" | "left";
  color: CSSProperties["color"];
  oneOf?: boolean;
}
