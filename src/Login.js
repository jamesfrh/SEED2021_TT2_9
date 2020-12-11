import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import Header from "./Header";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedin: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitHandler(event) {
    event.preventDefault();
    let data = {
      username: this.state.username,
      password: this.state.password,
    };
    fetch(
      "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "x-api-key": "AvznKwHoRPaClLwHbinGV8RezzoVYl5f7aogWGl3",
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "http://localhost:3000",
        },
      }
    ).then((res) => {
      console.log(res);
    });
    /*axios.post("/login", data)
    .then((res) => {
      console.log(res);
    })
    .catch(err => {
        console.log(err)
    });*/
  }

  render() {
    return (
      <div className="login">
        <div className="form-wrapper">
          <form>
              <h1> DBS E-WALLET</h1>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.changeHandler}
                name="username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.changeHandler}
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <button
              onClick={this.submitHandler}
              className="btn btn-primary btn-block"
            >
              <b>Login</b>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
