import React, { Component } from "react";
import Input from "../components/Input";
import axios from "axios";

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        username: "###",
        bio: "###",
        address: "###",
        email: "###",
        password: "###"
      },
      disabled: false,
      defaultClass: ["alert"],
      updateClass: ["alert"],
      updateSuccess: -1
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:9011/api/users/${localStorage.getItem("userid")}`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      )
      .then(res => {
        const user = res.data.user;
        this.setState({
          ...this.state,
          data: {
            username: user.username,
            bio: user.bio,
            address: user.address,
            email: user.email
          }
        });
        console.log(this.state.data);
      })
      .catch(err => console.log(err.response));
  }

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const data = {
      ...this.state.data
    };
    let arr = [...this.state.updateClass];
    axios
      .put(
        `http://localhost:9011/api/users/${localStorage.getItem("userid")}`,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      )
      .then(res => {
        arr.push("alert-success");
        const result = res.data.result;
        this.setState({
          data: {
            username: result.username,
            bio: result.bio,
            address: result.address,
            email: result.email
          },
          updateClass: arr,
          updateSuccess: 1
        });
        setTimeout(() => {
          window.location.pathname = "/home/setting";
        }, 1000);
      })
      .catch(err => {
        arr.push("alert-danger");
        this.setState({
          updateClass: arr,
          updateSuccess: 0
        });
      });
  };

  render() {
    const formStyle = {
      width: "60%",
      padding: "30px 0",
      margin: "0 auto"
    };

    const data = this.state.data;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit} style={formStyle}>
          <Input
            name="username"
            placeholder="Username"
            type="text"
            onChange={this.onChange}
            value={data.username || ""}
            required
          />
          <Input
            name="email"
            placeholder="Email"
            type="text"
            onChange={this.onChange}
            value={data.email || ""}
            required
          />
          <Input
            name="bio"
            placeholder="Your Bio"
            type="text"
            onChange={this.onChange}
            value={data.bio || ""}
            required
          />
          <Input
            name="address"
            placeholder="Address"
            type="text"
            onChange={this.onChange}
            value={data.address || ""}
            required
          />
          <Input
            name="password"
            placeholder="New Password"
            type="text"
            onChange={this.onChange}
            value={data.password || ""}
            required
          />

          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>

          <div style={{ paddingTop: "20px" }}>
            {this.state.updateSuccess === 1 ? (
              <div className={this.state.updateClass.join(" ")}>
                <strong>Success!</strong> Update Successful.
              </div>
            ) : (
              <div></div>
            )}
            {this.state.updateSuccess === 0 ? (
              <div className={this.state.updateClass.join(" ")}>
                <strong>Failed!</strong> Update failed.
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Setting;
