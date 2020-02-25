import React, { Component } from "react";
import Input from "../components/Input";
import axios from "axios";
import api from "../constants/api.config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  handleChange = e => {
    e.preventDefault();
    if (e.target.type === "file") {
      this.setState({
        data: {
          ...this.state.data,
          file: URL.createObjectURL(e.target.files[0])
        }
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      });
      console.log(this.state.data);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      status: this.state.data.status,
      image: this.state.data.image || this.state.data.file,
      user: localStorage.getItem("userid")
    };
    console.log(data);
    axios
      .post(`${api.API_URL}/posts`, data, {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      })
      .then(res => {
        window.location.pathname = "/";
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    const formStyle = {
      width: "70%",
      padding: "30px 0",
      margin: "0 auto"
    };

    return (
      <div>
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <Input
            name="status"
            placeholder="What's On Your Mind?"
            label="Post Status"
            type="text"
            onChange={this.handleChange}
            required
          />
          <Input
            name="image"
            placeholder="URL of picture post"
            label="Post Pic URL"
            type="text"
            onChange={this.handleChange}
            required
          />
          <div className="form-group">
            <label htmlFor="uploadPic">Or, Upload Pic</label>
            <input
              name="image"
              type="file"
              className="form-control-file"
              id="uploadPic"
              onChange={this.handleChange}
            />
            <img
              src={this.state.data.file}
              alt="Choose Img"
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            POST
          </button>
        </form>
      </div>
    );
  }
}

export default Post;
