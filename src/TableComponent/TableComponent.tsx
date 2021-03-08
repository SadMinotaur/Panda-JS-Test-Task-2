import React, { useState } from "react";
import { Table, TableCell, TableProp } from "../utils/Types";
import St from "./styles";

export const TableComponent: React.FC<{ table: TableProp }> = ({ table }) => {
  const [state, setState] = useState<Table>({
    ...table,
    columns: table.columns.map((c) => ({ ...c, sortState: null })),
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setOffset(0);
    setState({
      columns: table.columns.map((v) => ({
        ...v,
        cells: v.cells.filter((v) => v.content.includes(value)),
        sortState: null,
      })),
    });
  };

  const sortArr = (a: TableCell, b: TableCell, state: boolean | null) => {
    const nameA = a.content.toUpperCase();
    const nameB = b.content.toUpperCase();
    if (nameA < nameB) {
      return state !== null ? (state ? -1 : 1) : 0;
    }
    if (nameA > nameB) {
      return state !== null ? (state ? 1 : -1) : 0;
    }
    return 0;
  };

  const columnOnClick = (id: number) => () => {
    setState({
      columns: state.columns.map((v) =>
        id === v.id
          ? {
              ...v,
              sortState: !v.sortState,
            }
          : v
      ),
    });
  };

  const buttons = () => {
    let items = [];
    for (let i = 0; i < table.columns[0].cells.length / 50; i++) {
      items.push(i);
    }
    return items;
  };

  return (
    <>
      <St.FilterDiv>
        <p>Filter elements: </p>
        <St.FilterInput value={inputValue} onChange={filter} />
      </St.FilterDiv>
      <St.Table>
        {state?.columns.map(({ id, name, cells, sortState }) => (
          <St.Column key={name + id}>
            <St.ColumnName onClick={columnOnClick(id)} key={name + id}>
              {name}
            </St.ColumnName>
            {cells
              .slice(offset, offset + 50)
              .sort((a, b) => sortArr(a, b, sortState))
              .map((v) => (
                <St.Cell key={name + id + v.id}>{v.content}</St.Cell>
              ))}
          </St.Column>
        ))}
      </St.Table>
      <St.Footer>
        {buttons().map((v: number) => (
          <St.Page key={v} onClick={() => setOffset(v * 50)}>
            {v + 1}
          </St.Page>
        ))}
      </St.Footer>
    </>
  );
};
