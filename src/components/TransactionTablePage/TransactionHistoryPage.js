import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionTableFilter from "./TransactionTableFilter";
import TransactionHistoryHeader from "./TransactionHistoryHeader";
import { EditingMode, SortingMode } from "ka-table/enums";

function TransactionHistoryPage (){
  const [table, setTable] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useeffct")

    // Call API to fetch user's name
    fetchUserName();
    // Call API to fetch user's transactions
    fetchUserTransaction();
  },[]);

  const fetchUserName = () => {
    let data = "Team 19";

    console.log("beofre", name);
    setName(data);
    console.log("after", name);

  };

  const fetchUserTransaction = () => {
    let dataArray = Array(10)
      .fill(undefined)
      .map((_, index) => ({
        column1: `column:1 row:${index}`,
        column2: `column:2 row:${index}`,
        column3: `column:3 row:${index}`,
        column4: `column:4 row:${index}`,
        column5: `column:1 row:${index}`,
        column6: `column:2 row:${index}`,
        column7: `column:3 row:${index}`,
        id: index,
      }));

    console.log("data", dataArray);

    let tablePropsInit = {
      columns: [
        { key: "column1", title: "SN" },
        { key: "column2", title: "Payee Id" },
        { key: "column3", title: "Date" },
        { key: "column4", title: "Amount" },
        { key: "column5", title: "eGift" },
        { key: "column6", title: "Message" },
        { key: "column7", title: "Expenses" },
      ],
      data: dataArray,
      editingMode: EditingMode.Cell,
      rowKeyField: "id",
      sortingMode: SortingMode.Single,
    };

    console.log("data", tablePropsInit);

    setTable(tablePropsInit);
    console.log("tanle", table)
  };

  console.log("table -> ", table)
  console.log("name -> ", name)



  return (
    <div>
      <TransactionHistoryHeader name={name} />
      <TransactionTableFilter />
      <TransactionTable/>
    </div>
  );
};

export default TransactionHistoryPage;
