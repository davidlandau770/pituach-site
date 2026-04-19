export interface ColumnInterface {
  key: string;
  label: string;
}

export interface ColumnInfoInterface {
  options: ColumnInterface[];
  selectedOptions: ColumnInterface[];
  title: string;
  maxOptions?: number;
}
