import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import TransactionHistoryPage from "./components/TransactionTablePage/TransactionHistoryPage";
import "ka-table/style.scss";
import TransferForm from "./transferForm";
import Dashboard from "./components/dashboard";
import { useState } from "react";
import Charts from "./Charts"

function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="container">
          {<Header />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/trans_history" component={TransactionHistoryPage} />
            <Route path="/trans_form" component={TransferForm} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/charts" component={Charts} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
