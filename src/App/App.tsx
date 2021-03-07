import React, { useState } from "react";
import { Table } from "../Utils/Types";

function App() {
  const [state, setState] = useState<Table>({
    columns: [{ id: 1, name: "test" }],
    cells: [],
  });

  return (
    <>
      <header>Table Creator</header>
      <table>
        <tr>
          {state?.columns.map(({ id, name }) => (
            <th key={id}>{name}</th>
          ))}
        </tr>
        <tr>
          {state?.cells.map(({ id, content }) => (
            <td key={id}>{content}</td>
          ))}
        </tr>
      </table>
      <footer></footer>
    </>
  );
}

export default App;
