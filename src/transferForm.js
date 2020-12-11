import React, { Component } from 'react';
import Axios from 'axios';

class transferForm extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    custID: this.props.cusID,
    payeeID: '',
    dateTime: new Date().toLocaleString(),
    amount: '',
    expensesCat: '',
    eGift: '',
    message: '',
  }

  handlePayeeIDChange = (event) => {
    this.setState({
      payeeID: event.target.value
    })
  }
  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value
    })
  }

  handleExpCatChange = (event) => {
    this.setState({
      expensesCat: event.target.value
    })
  }
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleEgiftChange = (event) => {
    this.setState({
      eGift: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert("Success");
    event.preventDefault();
    let data = {
      custID: this.props.cusID,
      payeeID: this.state.payeeID,
      dateTime: this.state.dateTime,
      amount: this.state.amount,
      expensesCat: this.state.expensesCat,
      eGift: this.state.eGift,
      message: this.state.message,
    };
    Axios.post("/transaction/add", data)
      .then((res) => {
        console.log("Successful transaction");
      })
      .catch(err => {
        console.log()
      });
  }



  submitHandler = (event) => {
    event.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    Axios.post("/transaction/add", data)
      .then((res) => {
        console.log("Successful transaction");
      })
      .catch(err => {
        console.log(err)
      });
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>CustID</label>
          <input type="text" value={this.state.cusID} />
        </div>
        <div>
          <label>PayeeID</label>
          <input
            type="text"
            value={this.state.payeeID}
            onChange={this.handlePayeeIDChange}
          />
        </div>
        <div>
          <label>DateTime</label>
          <textarea value={this.state.dateTime} />
        </div>
        <div>
          <label>Amount</label>
          <textarea
            type="text"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
        </div>
        <div>
          <label>Expenses Category</label>
          <select
            value={this.state.expensesCat}
            onChange={this.handleExpCatChange}
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
        <div>
          <label>eGift</label>
          <select
            value={this.state.eGift}
            onChange={this.handleEgiftChange}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default transferForm;