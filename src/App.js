import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import Header from './Header'
function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        {<Header />}
        <Route path="/Login" component={Login} />

      </div>
    </div>
  </Router>
  );
}

export default App;
