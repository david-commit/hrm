import React from "react";
import "./table.css";
import { Link } from "react-router-dom";

function Table({ data, columns }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={`${row.id}-${column}`}>
                {column === "name" ? (
                  <Link to={`/department/members/${row.id}`}>
                    {row[column]}
                  </Link>
                ) : (
                  row[column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
