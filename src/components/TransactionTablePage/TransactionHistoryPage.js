import React from "react";
import TransactionTable from "./TransactionTable";
import TransactionTableFilter from "./TransactionTableFilter";
import TransactionHistoryHeader from "./TransactionHistoryHeader";

const TransactionHistoryPage = () => {
  return (
    <div>
      <TransactionHistoryHeader />
      <TransactionTableFilter />
      <TransactionTable />
    </div>
  );
};

export default TransactionHistoryPage;
