// // import "ka-table/style.css";

// // import React, { useEffect, useState } from "react";

// // import { ITableProps, kaReducer, Table } from "ka-table";
// // import { DataType, EditingMode, SortingMode } from "ka-table/enums";
// // import { DispatchFunc } from "ka-table/types";
// // import { kaPropsUtils } from 'ka-table/utils';

// import React, { useEffect, useState } from "react";

// import { kaReducer, Table } from "ka-table";
// import { search } from "ka-table/actionCreators";
// import {
//   DataType,
//   EditingMode,
//   FilteringMode,
//   SortDirection,
//   SortingMode,
// } from "ka-table/enums";
// import { kaPropsUtils } from "ka-table/utils";

// const dataArray = Array(10)
//   .fill(undefined)
//   .map((_, index) => ({
//     column1: `column:1 row:${index}`,
//     column2: `column:2 row:${index}`,
//     column3: `column:3 row:${index}`,
//     column4: `column:4 row:${index}`,
//     column5: `column:1 row:${index}`,
//     column6: `column:2 row:${index}`,
//     column7: `column:3 row:${index}`,
//     id: index,
//   }));

// const tablePropsInit = {
//   columns: [
//     { key: "column1", title: "SN" },
//     { key: "column2", title: "Payee Id" },
//     { key: "column3", title: "Date" },
//     { key: "column4", title: "Amount" },
//     { key: "column5", title: "eGift" },
//     { key: "column6", title: "Message" },
//     { key: "column7", title: "Expenses" },
//   ],
//   data: dataArray,
//   editingMode: EditingMode.Cell,
//   rowKeyField: "id",
//   sortingMode: SortingMode.Single,
// };

// // const TransactionTable = () => {
// // //   console.log("table: ", table);

// // //   const [table, setTable] = useState({});

// // //   useEffect(() => {
// // //     console.log("useeffct2");
// // //     // Call API to fetch user's transactions
// // //     fetchUserTransaction();
// // //   }, []);

// // //   const data = kaPropsUtils.getData(table);

// // //   let data = { ...tablePropsInit, data: table };
// //   return <Table {...tablePropsInit} />;
// // };

// // export default TransactionTable;

// // const dataArray = [
// //   { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
// //   { id: 2, name: 'Billi Bob', score: 55, passed: false, nextTry: new Date(2019, 10, 8, 10) },
// //   { id: 3, name: 'Tom Williams', score: 45, passed: false, nextTry: new Date(2019, 11, 8, 10) },
// //   { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
// //   { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
// //   { id: 6, name: 'Sunny Fox', score: 33, passed: false, nextTry: new Date(2019, 10, 9, 10) },
// // ];

// // const tablePropsInit = {
// //   columns: [
// //     { dataType: DataType.String, key: 'name', title: 'Name', sortDirection: SortDirection.Ascend },
// //     { key: 'score', title: 'Score', dataType: DataType.Number },
// //     {
// //       dataType: DataType.Boolean,
// //       key: 'passed',
// //       title: 'Passed',
// //     },
// //     {
// //       dataType: DataType.Date,
// //       key: 'nextTry',
// //       title: 'Next Try',
// //     },
// //   ],
// //   data: dataArray,
// //   editingMode: EditingMode.Cell,
// //   format: ({ column, value }) => {
// //     if (column.dataType === DataType.Date){
// //       return value && value.toLocaleDateString('en', {month: '2-digit', day: '2-digit', year: 'numeric' });
// //     }
// //   },
// //   rowKeyField: 'id',
// //   filteringMode: FilteringMode.FilterRow,
// //   sortingMode: SortingMode.Single,
// // };

// const TransactionTable = () => {
//   const [tableProps, changeTableProps] = useState(tablePropsInit);
//   const dispatch = (action) => {
//     changeTableProps((prevState) => kaReducer(prevState, action));
//   };
//   console.log("tans")

//   useEffect(() => {
//     console.log("effect")

//     const dataArray = [
//       { id: 1, name: "Mike Wazowski", score: 80, passed: true },
//       {
//         id: 2,
//         name: "Billi Bob",
//         score: 55,
//         passed: false,
//         nextTry: new Date(2019, 10, 8, 10),
//       },
//       {
//         id: 3,
//         name: "Tom Williams",
//         score: 45,
//         passed: false,
//         nextTry: new Date(2019, 11, 8, 10),
//       },
//       { id: 4, name: "Kurt Cobain", score: 75, passed: true },
//       { id: 5, name: "Marshall Bruce", score: 77, passed: true },
//       {
//         id: 6,
//         name: "Sunny Fox",
//         score: 33,
//         passed: false,
//         nextTry: new Date(2019, 10, 9, 10),
//       },
//     ];

//     const tablePropsInit = {
//       columns: [
//         {
//           dataType: DataType.String,
//           key: "name",
//           title: "Name",
//           sortDirection: SortDirection.Ascend,
//         },
//         { key: "score", title: "Score", dataType: DataType.Number },
//         {
//           dataType: DataType.Boolean,
//           key: "passed",
//           title: "Passed",
//         },
//         {
//           dataType: DataType.Date,
//           key: "nextTry",
//           title: "Next Try",
//         },
//       ],
//       data: dataArray,
//       editingMode: EditingMode.Cell,
//       format: ({ column, value }) => {
//         if (column.dataType === DataType.Date) {
//           return (
//             value &&
//             value.toLocaleDateString("en", {
//               month: "2-digit",
//               day: "2-digit",
//               year: "numeric",
//             })
//           );
//         }
//       },
//       rowKeyField: "id",
//       filteringMode: FilteringMode.FilterRow,
//       sortingMode: SortingMode.Single,
//     };

//     changeTableProps(tablePropsInit);
//   });

// //   const data = kaPropsUtils.getData(tableProps);

//   return (
//     <div className="obtain-table-data-demo">
//       <input
//         type="search"
//         defaultValue={tableProps.searchText}
//         onChange={(event) => {
//           dispatch(search(event.currentTarget.value));
//         }}
//         className="top-element"
//       />
//       <Table {...tableProps} dispatch={dispatch} />
//     </div>
//   );
// };

// export default TransactionTable;

import React, { useState } from "react";


import { ITableProps, kaReducer, Table } from "ka-table";
import {
  deleteRow,
  hideLoading,
  showLoading,
  updateData,
  updatePagesCount,
} from "ka-table/actionCreators";
import { ActionType, DataType, EditingMode, SortingMode } from "ka-table/enums";
import { ICellTextProps } from "ka-table/props";
import { DispatchFunc } from "ka-table/types";
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
    // serverEmulator
    //   .get(props.paging, props.columns, action?.pageIndex)
    //   .then((result) => {
    //     dispatch(updatePagesCount(result.pagesCount));
    //     dispatch(updateData(result.data));
    //     dispatch(hideLoading());
    //   });
  };
};

const TransactionTable = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    if (action.type === ActionType.DeleteRow) {
      dispatch(showLoading('Deleting Row..'));
      serverEmulator.delete(action.rowKeyValue).then((result) => {
        getData(action);
      });
    } else if (action.type === ActionType.UpdateCellValue) {
      dispatch(showLoading('Updating Data..'));
      const column = tableProps.columns.find((c) => c.key === action.columnKey);
      serverEmulator.update(action.rowKeyValue, { [getField(column)]: action.value }).then(() => {
        getData(action);
      });
    } else if (action.type === ActionType.UpdatePageIndex) {
      dispatch(showLoading('Loading Data..'));
      getData(action);
    } else if (action.type === ActionType.UpdateSortDirection) {
      dispatch(showLoading('Loading Data..'));
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
      <Table
        {...tableProps}
        // childComponents={{
        //   cell: {
        //     content: (props) => {
        //       if (props.column.key === ":delete") {
        //         return <DeleteRow {...props} />;
        //       }
        //     },
        //   },
        //   noDataRow: {
        //     content: () => "No data",
        //   },
        // }}
        dispatch={dispatch}
      />
    </div>
  );
};

export default TransactionTable;
