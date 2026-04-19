import type { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export type GenericDataType = { id: string; [key: string]: any };

export interface TableInfoInterface<T extends GenericDataType> {
  label: string;
  key: string;
  TDStyle?: CSSProperties;
  renderElement?: (
    data: keyof T,
    setData?: Dispatch<SetStateAction<T | null>>,
  ) => ReactNode;
  truncateTextNumber?: number;
}
