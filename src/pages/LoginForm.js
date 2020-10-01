import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

import { login } from "../services/auth";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        username: "",
        password: "",
      },
      loggedIn: false,
      loginClass: ["alert"],
      loginMsg: "",
    };
  }

  onChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const arr = ["alert"];
    try {
      await login(this.state.data);
      arr.push("alert-success");
      this.setState({
        loggedIn: true,
        loginClass: arr,
        loginMsg: "Login Successful!",
      });
      this.props.settingState();
      setTimeout(() => {
        this.props.history.push("/");
      }, 500);
    } catch (err) {
      arr.push("alert-danger");
      this.setState({
        loggedIn: true,
        loginClass: arr,
        loginMsg: "Login Falied!",
      });
    }
  };

  render() {
    return (
      <div className="form-wrapper">
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
              <div className="col-sm-offset-2 col-sm-10 pb-2">
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
              ) : null}
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
