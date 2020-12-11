// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';

// this is the example response

// [{"accountName":"Current Account","availableBal":994.32,"accountNumber":52644815,"linked":false},{"accountName":"Saving Account","availableBal":530.35,"accountNumber":34637629,"linked":true},{"accountName":"Multiplier Account","availableBal":533.35,"accountNumber":93035304,"linked":false}]

class Dashboard extends Component {

    state = {
        accountName: [],
        accountNumber: [],
        availableBal: [],
        linked: [], 

    }



    render() {
        return (
          <div className="Dashboard">
          <header className="Dashboard-header">
          <p>
          Welcome Trey Swaniawski to your e-wallet 
          </p>
            <div class="Dashbody-body">
              <h5 class="account-balance">This is your available account balance: $994.32</h5>
            </div>
            </header>
          </div>
        );
      }
    
// }
// submitHandler(event) {
//     event.preventDefault();
//     let data = {
//       username: this.state.username,
//       password: this.state.password,
//     };
//     fetch(
//       "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login",
//       {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "x-api-key": "AvznKwHoRPaClLwHbinGV8RezzoVYl5f7aogWGl3",
//         },
//       }
//     ).then((res) =>{ 
//         console.log(res)
//     });
    /*axios.post("/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch(err => {
        console.log(err)
    });*/
  }

// function Dashboard() {
//   return (
//     <div className="Dashboard">
//       <header className="Dashboard-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Dashboard;