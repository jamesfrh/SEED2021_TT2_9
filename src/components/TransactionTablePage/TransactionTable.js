import "ka-table/style.css";

import React, { useState } from 'react';

import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';

const dataArray = Array(10).fill(undefined).map(
  (_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    column5: `column:1 row:${index}`,
    column6: `column:2 row:${index}`,
    column7: `column:3 row:${index}`,
    id: index,
  }),
);

const tablePropsInit = {
  columns: [
    { key: 'column1', title: 'S\N'},
    { key: 'column2', title: 'Payee Id'},
    { key: 'column3', title: 'Date'},
    { key: 'column4', title: 'Amount'},
    { key: 'column5', title: 'eGift'},
    { key: 'column6', title: 'Message'},
    { key: 'column7', title: 'Expenses'},

  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single,
};

const TransactionTable= () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

  return (
    <Table
      {...tableProps}
      dispatch={dispatch}
    />
  );
};

export default TransactionTable;