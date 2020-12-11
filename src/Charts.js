import React, { Component } from 'react'
//import Highcharts from 'highcharts'
//import HighchartsReact from 'highcharts-react-official'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);


class Charts extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    let data = [{"eGift":true,"dateTime":"2020-09-02T10:21:33.457Z","custID":9,"expensesCat":"Food","amount":859.25,"message":"Thanks. :)","payeeID":4},
    {"eGift":false,"dateTime":"2020-07-05T05:16:26.062Z","custID":25,"expensesCat":"Food","amount":630.1,"message":"","payeeID":9},
    {"eGift":true,"dateTime":"2020-12-11T05:20:47.780Z","custID":7,"expensesCat":"Transport","amount":0.01,"message":"msg","payeeID":9},
    {"eGift":true,"dateTime":"2020-12-11T05:48:35.390Z","custID":7,"expensesCat":"Transport","amount":0.01,"message":"msg","payeeID":9},
    {"eGift":true,"dateTime":"2020-08-16T01:09:11.190Z","custID":25,"expensesCat":"Entertainment","amount":581.43,"message":"Thanks. :)","payeeID":9},
    {"eGift":true,"dateTime":"2020-06-06T03:11:59.690Z","custID":10,"expensesCat":"Food","amount":519.26,"message":"Thanks. :)","payeeID":9},
    {"eGift":true,"dateTime":"2020-08-27T20:16:56.728Z","custID":22,"expensesCat":"Insurance","amount":130.07,"message":"Thanks. :)","payeeID":9},
    {"eGift":true,"dateTime":"2020-12-11T05:43:18.680Z","custID":7,"expensesCat":"Transport","amount":0.01,"message":"msg","payeeID":9},
    {"eGift":false,"dateTime":"2020-05-05T17:03:08.932Z","custID":23,"expensesCat":"Transport","amount":511.49,"message":"","payeeID":9},
    {"eGift":true,"dateTime":"2020-11-21T05:56:19.444Z","custID":9,"expensesCat":"Transport","amount":221.4,"message":"Thanks. :)","payeeID":13},
    {"eGift":false,"dateTime":"2020-04-09T15:35:26.855Z","custID":22,"expensesCat":"Transport","amount":181.49,"message":"","payeeID":9},
    {"eGift":true,"dateTime":"2020-12-11T05:22:53.113Z","custID":7,"expensesCat":"Transport","amount":0.01,"message":"msg","payeeID":9},
    {"eGift":true,"dateTime":"2019-12-14T12:27:01.750Z","custID":9,"expensesCat":"Food","amount":472.33,"message":"Thanks. :)","payeeID":1},
    {"eGift":true,"dateTime":"2020-06-27T01:02:58.171Z","custID":9,"expensesCat":"Food","amount":514.98,"message":"Thanks. :)","payeeID":11},
    {"eGift":true,"dateTime":"2020-04-17T15:54:28.853Z","custID":20,"expensesCat":"Transport","amount":468.69,"message":"Thanks. :)","payeeID":9},
    {"eGift":false,"dateTime":"2020-06-29T14:25:40.862Z","custID":25,"expensesCat":"Shopping","amount":120.53,"message":"","payeeID":9},
    {"eGift":true,"dateTime":"2020-05-06T00:12:44.701Z","custID":9,"expensesCat":"Shopping","amount":214.69,"message":"Thanks. :)","payeeID":16}]

    chart.data = [{
        "expensesCat": "Food",
        "amount": 501.9
      }, {
        "expensesCat": "Transport",
        "amount": 301.9
      }, {
        "expensesCat": "Entertainment",
        "amount": 201.1
      }, {
        "expensesCat": "Insurance",
        "amount": 165.8
      }, {
        "expensesCat": "Shopping",
        "amount": 139.9
      }
      ];
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "amount";
      pieSeries.dataFields.category = "expensesCat";
      chart.innerRadius = am4core.percent(40);
      chart.legend = new am4charts.Legend();

    }

    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
      render() {
        return (
          <div className="App">
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
          </div>
        );
      }
    }
    export default Charts;
