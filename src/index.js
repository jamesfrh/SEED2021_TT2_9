import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Login from './Login';

axios.defaults.baseURL = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020';
axios.defaults.headers.common['x-api-key'] = 'AvznKwHoRPaClLwHbinGV8RezzoVYl5f7aogWGl3';
axios.defaults.headers.common['Access-Control-Allow-Origin'] =  "*";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,HEAD,OPTIONS,POST,PUT";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers";
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
