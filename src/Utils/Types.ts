export type Column = { id: number; name: string };

export type TableCell = { id: number; columnId: number; content: string };

export interface Table {
  columns: Column[];
  cells: TableCell[];
}
