import { CSSProperties } from "react";
import { FilterInfoInterface, FilterInterface } from "../../types/filter.types";

export const createFilterConfig = (
  title: string,
  options: FilterInterface[],
  selectedOptions: FilterInterface[],
  popupHorizontal?: "right" | "left",
  color?: CSSProperties["color"],
  oneOf?: boolean
): FilterInfoInterface => ({
  options,
  title,
  selectedOptions,
  popupHorizontal,
  color,
  oneOf,
});
