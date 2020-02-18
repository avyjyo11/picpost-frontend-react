import React, { Component } from "react";
import axios from "axios";
import "./View.css";

class View extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      status: "",
      comments: [],
      username: "",
      myComment: "",
      ownPost: false,
      edit: {
        status: "",
        image: ""
      }
    };
  }

  async componentDidMount() {
    const { params } = this.props.match;
    const res = await axios.get(
      `http://localhost:9011/api/posts/${params.postid}`
    );
    const user = await axios.get(
      `http://localhost:9011/api/users/${res.data.user}`,
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      }
    );
    const comments = await axios.get(
      `http://localhost:9011/api/comments/${params.postid}`,
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      }
    );
    this.setState({
      image: res.data.image,
      status: res.data.status,
      username: user.data.user.username,
      comments: [...comments.data],
      ownPost: res.data.user === localStorage.getItem("userid") ? true : false,
      edit: {
        image: res.data.image,
        status: res.data.status
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = e => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:9011/api/posts/${params.postid}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        window.location.pathname = "/home/profile";
      })
      .catch(err => console.log(err));
  };

  handleEdit = e => {
    e.preventDefault();
    const { params } = this.props.match;
    const data = { ...this.state.edit };
    console.log("data", data);
    axios
      .put(`http://localhost:9011/api/posts/${params.postid}`, data, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        window.location.pathname = "/home/profile";
      })
      .catch(err => console.log(err));
  };

  handleEditChange = e => {
    this.setState({
      edit: {
        ...this.state.edit,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.edit);
  };

  handleComment = event => {
    event.preventDefault();
    const { params } = this.props.match;
    let data = {
      userid: localStorage.getItem("userid"),
      comment: this.state.myComment
    };

    axios
      .post(`http://localhost:9011/api/comments/${params.postid}`, data, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        window.location.pathname = `/home/${params.postid}`;
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-6">
            <div className="frame">
              <img src={this.state.image} alt="Club Card" />
            </div>
          </div>
          <div className="col-6">
            <div className="row pl-2 pb-3">
              <strong>{this.state.status}</strong>
              <span className="ml-2 pt-1 badge badge-secondary">
                by {this.state.username}
              </span>
            </div>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  Like
                </button>
                <button type="button" className="btn btn-primary">
                  Dislike
                </button>
              </div>
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn btn-secondary">
                  Comment
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <strong>Comments</strong>
            </div>
            <br />
            {this.state.comments.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="row" key={index}>
                    <div style={{ margin: "0 20px" }}>
                      <strong>{value.username}</strong>
                    </div>
                    <div>{value.comment}</div>
                  </div>
                  <hr />
                </React.Fragment>
              );
            })}
            <div>
              <form onSubmit={this.handleComment}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Write Your Comment
                  </label>
                  <textarea
                    name="myComment"
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary">
                  Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        {this.state.ownPost === true ? (
          <div className="row edit-delete-post mb-5">
            <div className="row">
              <div className="col-10">
                <form onSubmit={this.handleEdit}>
                  <div className="row">
                    <div className="col">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">Status</div>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Status"
                          name="status"
                          onChange={this.handleEditChange}
                          type="text"
                          value={this.state.edit.status || ""}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">Image URL</div>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Image URL"
                          name="image"
                          onChange={this.handleEditChange}
                          type="text"
                          value={this.state.edit.image || ""}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <button className="btn btn-info mr-3" type="submit">
                        Edit Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-2">
                <button className="btn btn-danger" onClick={this.handleDelete}>
                  Delete Post
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default View;
