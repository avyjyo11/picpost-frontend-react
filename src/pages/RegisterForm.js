import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import "../styles/Login.css";

export class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        username: "",
        bio: "",
        address: "",
        email: "",
        password: ""
      },
      disabled: false,
      registerClass: [],
      registerState: false,
      msg: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const arr = ["alert"];
    axios
      .post("http://localhost:9011/api/auth/register", this.state.data)
      .then(res => {
        arr.push("alert-success");
        this.setState({
          registerClass: arr,
          registerState: true,
          msg: "Registration Successful!"
        });
      })
      .catch(err => {
        arr.push("alert-danger");
        this.setState({
          registerClass: arr,
          registerState: true,
          msg: "Registration Failed!"
        });
      });
  };

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <h3 className="mb-4">Register</h3>
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
              name="email"
              placeholder="Email"
              type="text"
              onChange={this.onChange}
              required
            />
            <Input
              name="bio"
              placeholder="Your Bio"
              type="text"
              onChange={this.onChange}
              required
            />
            <Input
              name="address"
              placeholder="Address"
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={this.state.disabled}
                >
                  Register
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                {this.state.registerState === true ? (
                  <div className={this.state.registerClass.join(" ")}>
                    <strong>{this.state.msg}</strong>
                  </div>
                ) : null}
              </div>
              <div>
                <Link to="/login">Already have an Account? Login Now.</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
