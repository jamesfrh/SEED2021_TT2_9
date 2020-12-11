import { IPagingProps } from "ka-table/Components/Paging/Paging";
import { getPageData, getPagesCount } from "ka-table/Utils/PagingUtils";

let dataArray = Array(100)
  .fill(undefined)
  .map((_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }));

//   { key: "column1", title: "SN" },
//     { key: "column2", title: "Payee Id" },
//     { key: "column3", title: "Date" },
//     { key: "column4", title: "Amount" },
//     { key: "column5", title: "eGift" },
//     { key: "column6", title: "Message" },
//     { key: "column7", title: "Expenses" },

const get = (paging) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let res = resData.map((value, index) => {
        return {
          column1: `${index}`,
          column2: `${value["payeeID"]}`,
          column3: `${value["dateTime"]}`,
          column4: `${value["amount"]}`,
          column5: `${value["eGift"]}`,
          column6: `${value["message"]}`,
          column7: `${value["expensesCat"]}`,
          id: index,
        };
      });
      resolve(
        // {
        //   data: getPageData(resData, { ...paging, pagesCount: undefined }),
        //   pagesCount: getPagesCount(resData, {
        //     ...paging,
        //     pagesCount: undefined,
        //   }),
        // }
        {
          data: getPageData(res, { ...paging, pagesCount: undefined }),
          pagesCount: getPagesCount(res, {
            ...paging,
            pagesCount: undefined,
          }),
        }
      );
    }, 1000);
  });
};

const resData = [
  {
    eGift: true,
    dateTime: "2020-09-02T10:21:33.457Z",
    custID: 9,
    expensesCat: "Food",
    amount: 859.25,
    message: "Thanks. :)",
    payeeID: 4,
  },
  {
    eGift: false,
    dateTime: "2020-07-05T05:16:26.062Z",
    custID: 25,
    expensesCat: "Food",
    amount: 630.1,
    message: "",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-12-11T05:20:47.780Z",
    custID: 7,
    expensesCat: "Transport",
    amount: 0.01,
    message: "msg",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-12-11T05:48:35.390Z",
    custID: 7,
    expensesCat: "Transport",
    amount: 0.01,
    message: "msg",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-08-16T01:09:11.190Z",
    custID: 25,
    expensesCat: "Entertainment",
    amount: 581.43,
    message: "Thanks. :)",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-06-06T03:11:59.690Z",
    custID: 10,
    expensesCat: "Food",
    amount: 519.26,
    message: "Thanks. :)",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-08-27T20:16:56.728Z",
    custID: 22,
    expensesCat: "Insurance",
    amount: 130.07,
    message: "Thanks. :)",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-12-11T05:43:18.680Z",
    custID: 7,
    expensesCat: "Transport",
    amount: 0.01,
    message: "msg",
    payeeID: 9,
  },
  {
    eGift: false,
    dateTime: "2020-05-05T17:03:08.932Z",
    custID: 23,
    expensesCat: "Transport",
    amount: 511.49,
    message: "",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-11-21T05:56:19.444Z",
    custID: 9,
    expensesCat: "Transport",
    amount: 221.4,
    message: "Thanks. :)",
    payeeID: 13,
  },
  {
    eGift: false,
    dateTime: "2020-04-09T15:35:26.855Z",
    custID: 22,
    expensesCat: "Transport",
    amount: 181.49,
    message: "",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-12-11T05:22:53.113Z",
    custID: 7,
    expensesCat: "Transport",
    amount: 0.01,
    message: "msg",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2019-12-14T12:27:01.750Z",
    custID: 9,
    expensesCat: "Food",
    amount: 472.33,
    message: "Thanks. :)",
    payeeID: 1,
  },
  {
    eGift: true,
    dateTime: "2020-06-27T01:02:58.171Z",
    custID: 9,
    expensesCat: "Food",
    amount: 514.98,
    message: "Thanks. :)",
    payeeID: 11,
  },
  {
    eGift: true,
    dateTime: "2020-04-17T15:54:28.853Z",
    custID: 20,
    expensesCat: "Transport",
    amount: 468.69,
    message: "Thanks. :)",
    payeeID: 9,
  },
  {
    eGift: false,
    dateTime: "2020-06-29T14:25:40.862Z",
    custID: 25,
    expensesCat: "Shopping",
    amount: 120.53,
    message: "",
    payeeID: 9,
  },
  {
    eGift: true,
    dateTime: "2020-05-06T00:12:44.701Z",
    custID: 9,
    expensesCat: "Shopping",
    amount: 214.69,
    message: "Thanks. :)",
    payeeID: 16,
  },
];

const update = (id, data, paging) => {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id === id) {
      dataArray[i] = { ...dataArray[i], ...data };
    }
  }
  return get(paging);
};

const deleteRow = (id, paging) => {
  dataArray = dataArray.filter((d) => d.id !== id);
  return get(paging);
};

export default {
  delete: deleteRow,
  get,
  update,
};
