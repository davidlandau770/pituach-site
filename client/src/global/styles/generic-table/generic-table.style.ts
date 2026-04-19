import type { CSSProperties, MouseEventHandler } from "react";

export const GENERIC_TABLE_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "auto",
  width: "100%",
};

const getRowBgColor = (
  rowColor: CSSProperties["color"],
  index: number,
  altRowColor?: CSSProperties["color"],
) => {
  return index % 2 !== 1 && altRowColor ? altRowColor : rowColor;
};

export const getRowStyle = (
  index: number,
  altRowColor?: CSSProperties["color"],
  onRowClick?: MouseEventHandler<HTMLElement>,
  rowStyle?: CSSProperties,
): CSSProperties => {
  const ROW_COLOR: CSSProperties["backgroundColor"] =
    rowStyle && rowStyle.backgroundColor ? rowStyle.backgroundColor : "inherit";

  return {
    backgroundColor: getRowBgColor(ROW_COLOR, index, altRowColor),
    cursor: onRowClick ? "pointer" : "default",
    ...rowStyle,
  };
};

export const HEADER_TABLE_STYLE: CSSProperties = {
  textAlign: "center",
  fontSize: "0.95em",
  fontWeight: "bold",
};
