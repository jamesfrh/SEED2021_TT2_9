import React, { Component } from "react";

class transferForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    custID: this.props.cusID,
    payeeID: "",
    dateTime: new Date().toLocaleString(),
    amount: "",
    expensesCat: "",
    eGift: "",
    message: "",
  };

  handlePayeeIDChange = (event) => {
    this.setState({
      payeeID: event.target.value,
    });
  };
  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleExpCatChange = (event) => {
    this.setState({
      expensesCat: event.target.value,
    });
  };
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleEgiftChange = (event) => {
    this.setState({
      eGift: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
    console.log(event);
  };

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
          <textarea
            value={this.state.expensesCat}
            onChange={this.handleExpCatChange}
          />
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
        </div>
        <div>
          <label>eGift</label>
          <textarea
            value={this.state.eGift}
            onChange={this.handleEgiftChange}
          />
          <option value="false">False</option>
          <option value="true">True</option>
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
