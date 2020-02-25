import React, { Component } from "react";
import PostBlock from "../components/PostBlock";
import Columned from "react-columned";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../constants/api.config";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      userdata: {
        imgURL: "https://i.ya-webdesign.com/images/profile-avatar-png-4.png",
        username: "",
        bio: "",
        address: "",
        email: "",
        likedPosts: []
      },
      myPosts: [],
      contentPosts: []
    };
  }

  componentDidMount() {
    axios
      .get(`${api.API_URL}/users/pop/${localStorage.getItem("userid")}`, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        const user = res.data.user;
        this.setState({
          userdata: {
            ...this.state.userdata,
            username: user.username,
            bio: user.bio,
            address: user.address,
            email: user.email,
            likedPosts: user.likedPosts
          }
        });
      })
      .catch(err => console.log(err.response.data));

    axios
      .get(`${api.API_URL}/posts/user/${localStorage.getItem("userid")}`)
      .then(res => {
        this.setState({
          myPosts: [...res.data],
          contentPosts: [...res.data]
        });
      })
      .catch(err => console.log(err.response.data));
  }

  handleLogout = event => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  showLiked = event => {
    let buttons = event.target.parentNode.children;
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    event.target.classList.add("active");
    this.setState({ contentPosts: [...this.state.userdata.likedPosts] });
  };

  showMyPosts = event => {
    let buttons = event.target.parentNode.children;
    buttons[0].classList.remove("active");
    buttons[1].classList.remove("active");
    event.target.classList.add("active");
    this.setState({ contentPosts: [...this.state.myPosts] });
  };

  render() {
    const user = this.state.userdata;

    const imgStyle = {
      width: "240px",
      borderRadius: "50%"
    };

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-6" style={{ textAlign: "center" }}>
              <img src={user.imgURL} alt="USER_IMG" style={imgStyle} />
            </div>
            <div className="col-6">
              <span>
                <strong>username:</strong> &ensp; {user.username}
              </span>
              <hr />
              <span>
                <strong>email:</strong> &ensp; {user.email}
              </span>
              <hr />
              <span>
                <strong>bio:</strong> &ensp; {user.bio}
              </span>
              <hr />
              <span>
                <strong>address:</strong> &ensp; {user.address}
              </span>
              <hr />
              <Link to="setting" className="btn btn-outline-info">
                Edit Profile Settings
              </Link>
              <button
                className="btn btn-outline-danger ml-3"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="pb-3">
          <ul className="nav nav-tabs" style={{ cursor: "pointer" }}>
            <li onClick={this.showMyPosts} className="nav-item nav-link active">
              My Posts
            </li>
            <li onClick={this.showLiked} className="nav-item nav-link">
              Liked Posts
            </li>
          </ul>
        </div>
        <Columned
          columns={{ "320": 1, "480": 2, "800": 2, "1366": 3, "1920": 4 }}
        >
          {this.state.contentPosts.map((value, index) => {
            return (
              <Link to={`${value._id}`} key={index}>
                <PostBlock imgURL={value.image} status={value.status} />
              </Link>
            );
          })}
          {this.state.myPosts.length === 0 ? (
            <div className="pl-3"> No Posts Yet... </div>
          ) : null}
        </Columned>
      </div>
    );
  }
}

export default Profile;
