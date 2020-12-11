import "ka-table/style.css";

import React from "react";
import { Table } from "ka-table";

const TransactionTable = ({ table }) => {
  return <Table {...table} />;
};

export default TransactionTable;
