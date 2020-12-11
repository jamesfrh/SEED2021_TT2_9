import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionTableFilter from "./TransactionTableFilter";
import TransactionHistoryHeader from "./TransactionHistoryHeader";

function TransactionHistoryPage (){
  const [table, setTable] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    // Call API to fetch user's name
    fetchUserName();
  },[]);

  const fetchUserName = () => {
    let data = "Team 19";
    setName(data);
  };

  return (
    <div>
      <TransactionHistoryHeader name={name} />
      {/* <TransactionTableFilter /> */}
      <TransactionTable/>
    </div>
  );
};

export default TransactionHistoryPage;
