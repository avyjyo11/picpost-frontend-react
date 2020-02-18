import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Input from "../components/Input";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        username: "",
        password: ""
      },
      loggedIn: false,
      loginClass: ["alert"],
      loginMsg: ""
    };
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let arr = [...this.state.loginClass];
    axios
      .post("http://localhost:9011/api/auth/login", this.state.data)
      .then(res => {
        arr.push("alert-success");
        this.setState({
          loggedIn: true,
          loginClass: arr,
          loginMsg: "Login Successful!"
        });
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("userid", res.data.userid);
        window.location.pathname = "/";
      })
      .catch(err => {
        arr.push("alert-danger");
        this.setState({
          loggedIn: true,
          loginClass: arr,
          loginMsg: "Login Falied!"
        });
      });
  };

  onReset = e => {
    this.setState({
      loginMsg: "",
      loginClass: ["alert"],
      loggedIn: false
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h3 className="mb-4">Login</h3>
          <form
            onSubmit={this.onSubmit}
            method="POST"
            className="form-horizontal"
          >
            <Input
              name="username"
              placeholder="Username"
              type="text"
              onChange={this.onChange}
              required
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              onChange={this.onChange}
              required
            />
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              {this.state.loggedIn === true ? (
                <div
                  className={this.state.loginClass.join(" ")}
                  style={{ marginTop: "20px" }}
                >
                  <strong>{this.state.loginMsg}</strong>
                </div>
              ) : (
                <div></div>
              )}
              <div style={{ paddingTop: "10px" }}>
                <Link to="/register">Don't have an Account? Create Now.</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
