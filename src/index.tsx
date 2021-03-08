import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TableComponent } from "./TableComponent/TableComponent";

function array(num: number): number[] {
  let items = [];
  for (let i = 0; i < num; i++) {
    items.push(i);
  }
  return items;
}

ReactDOM.render(
  <React.StrictMode>
    <TableComponent
      table={{
        columns: array(6).map((v) => ({
          id: v,
          name: "test" + v,
          cells: array(100).map((val) => ({ id: val, content: "test" + val })),
        })),
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
