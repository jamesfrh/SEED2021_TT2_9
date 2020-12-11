import './App.css';
import TransactionTable from "./components/TransactionTablePage/TransactionTable";
import TransactionTableFilter from "./components/TransactionTablePage/TransactionTableFilter";
import TransactionHistoryHeader from "./components/TransactionTablePage/TransactionHistoryHeader";

function App() {
  return (<div>
    <TransactionHistoryHeader/>
    <TransactionTableFilter/>
    <TransactionTable/>
  </div>

  );
}

export default App;
