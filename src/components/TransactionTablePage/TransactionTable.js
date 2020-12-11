import React, { useState } from "react";

import { kaReducer, Table } from "ka-table";
import {
  deleteRow,
  hideLoading,
  showLoading,
  updateData,
  updatePagesCount,
} from "ka-table/actionCreators";
import { ActionType, EditingMode, SortingMode } from "ka-table/enums";
import { getField } from "ka-table/Utils/ColumnUtils";
import serverEmulator from "./serverEmulator";

const DeleteRow = ({ dispatch, rowKeyValue }) => {
  return (
    <img
      src="static/icons/delete.svg"
      className="delete-row-column-button"
      onClick={() => dispatch(deleteRow(rowKeyValue))}
      alt=""
    />
  );
};

const tablePropsInit = {
  columns: [
    { key: "column1", title: "SN" },
    { key: "column2", title: "Payee Id" },
    { key: "column3", title: "Date" },
    { key: "column4", title: "Amount" },
    { key: "column5", title: "eGift" },
    { key: "column6", title: "Message" },
    { key: "column7", title: "Expenses" },
  ],

  editingMode: EditingMode.Cell,
  loading: {
    enabled: true,
    text: "Loading Data..",
  },
  paging: {
    enabled: true,
    pageIndex: 0,
    pageSize: 10,
  },
  sortingMode: SortingMode.SingleRemote,
  rowKeyField: "id",
};

const initGetData = (props, dispatch) => {
  return (action) => {
    // GET FROM API
    serverEmulator.get().then((result) => {
      dispatch(updatePagesCount(result.pagesCount));
      dispatch(updateData(result.data));
      dispatch(hideLoading());
    });
  };
};

const TransactionTable = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    if (action.type === ActionType.DeleteRow) {
      dispatch(showLoading("Deleting Row.."));
      serverEmulator.delete(action.rowKeyValue).then((result) => {
        getData(action);
      });
    } else if (action.type === ActionType.UpdateCellValue) {
      dispatch(showLoading("Updating Data.."));
      const column = tableProps.columns.find((c) => c.key === action.columnKey);
      serverEmulator
        .update(action.rowKeyValue, { [getField(column)]: action.value })
        .then(() => {
          getData(action);
        });
    } else if (action.type === ActionType.UpdatePageIndex) {
      dispatch(showLoading("Loading Data.."));
      getData(action);
    } else if (action.type === ActionType.UpdateSortDirection) {
      dispatch(showLoading("Loading Data.."));
      initGetData(kaReducer(tableProps, action), dispatch)(action);
    }
    changeTableProps((prevState) => kaReducer(prevState, action));
  };
  const getData = initGetData(tableProps, dispatch);

  if (!tableProps.data) {
    getData();
  }

  return (
    <div className="remote-data-demo">
      <Table {...tableProps} dispatch={dispatch} />
    </div>
  );
};

export default TransactionTable;
