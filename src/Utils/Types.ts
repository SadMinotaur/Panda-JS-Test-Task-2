export interface Column {
  id: number;
  name: string;
  cells: TableCell[];
}

export interface ColumnWithState extends Column {
  sortState: boolean | null;
}
export interface TableCell {
  id: number;
  content: string;
}
export interface TableProp {
  columns: Column[];
}

export interface Table {
  columns: ColumnWithState[];
}
