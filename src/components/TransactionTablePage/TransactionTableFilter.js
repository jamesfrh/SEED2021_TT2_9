import React from "react";

const filter = () => {
  console.log("Filter suceess");
}

const TransactionTableFilter = () => (
  <button onClick={filter}>Filter</button>
);

export default TransactionTableFilter;
