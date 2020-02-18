import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: "Username"
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:9011/api/users/${localStorage.getItem("userid")}`,
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        this.setState({
          username: res.data.user.username
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const url = this.props.url;
    return (
      <header className="bg-dark mb-4">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            <a href="/" className="navbar-brand">
              Photorapture
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item pr-2">
                <Link to={`${url}`} className="btn btn-dark">
                  Home
                </Link>
              </li>
              <li className="navbar-item pr-2">
                <Link to={`${url}/post`} className="btn btn-dark">
                  Post
                </Link>
              </li>
              <li className="navbar-item pr-2">
                <Link to={`${url}/setting`} className="btn btn-dark">
                  Setting
                </Link>
              </li>
              <li className="navbar-item pr-2">
                <Link to={`${url}/profile`} className="btn btn-dark">
                  {this.state.username}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
