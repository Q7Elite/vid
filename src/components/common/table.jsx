import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = ({ onSort, sortColumn, columns, data }) => {
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        sortColumn={sortColumn}
        columns={columns}
      ></TableHeader>
      <TableBody columns={columns} data={data}></TableBody>
    </table>
  );
};

export default Table;
