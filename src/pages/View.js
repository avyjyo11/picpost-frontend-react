import React, { Component } from "react";
import axios from "axios";
import api from "../constants/api.config";
import "../styles/View.css";

class View extends Component {
  constructor() {
    super();
    this.state = {
      likeStatus: false,
      userdata: {},
      image: "",
      status: "",
      comments: [],
      username: "",
      myComment: "",
      likeCount: 0,
      ownPost: false,
      edit: {
        status: "",
        image: ""
      }
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const { params } = this.props.match;
    const res = await axios.get(`${api.API_URL}/posts/${params.postid}`);
    const postuser = await axios.get(`${api.API_URL}/users/${res.data.user}`, {
      headers: {
        Authorization: `${window.localStorage.getItem("token")}`
      }
    });
    const user = await axios.get(
      `${api.API_URL}/users/${localStorage.getItem("userid")}`,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );
    user.data.user.likedPosts.forEach(val => {
      if (val === params.postid) {
        this.setState({ ...this.state, likeStatus: true });
      }
    });
    const comments = await axios.get(
      `${api.API_URL}/comments/${params.postid}`,
      {
        headers: {
          Authorization: `${window.localStorage.getItem("token")}`
        }
      }
    );
    this.setState({
      userdata: { ...user.data.user },
      image: res.data.image,
      status: res.data.status,
      username: postuser.data.user.username,
      comments: [...comments.data],
      likeCount: res.data.likeCount,
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
      .delete(`${api.API_URL}/posts/${params.postid}`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        this.props.history.push("/home/profile");
      })
      .catch(err => console.log(err));
  };

  handleEdit = e => {
    e.preventDefault();
    const { params } = this.props.match;
    const data = { ...this.state.edit };
    axios
      .put(`${api.API_URL}/posts/${params.postid}`, data, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        this.props.history.push("/home/profile");
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
  };

  handleComment = event => {
    event.preventDefault();
    const { params } = this.props.match;
    let data = {
      userid: localStorage.getItem("userid"),
      comment: this.state.myComment
    };

    axios
      .post(`${api.API_URL}/comments/${params.postid}`, data, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        this.setState({
          comments: [...this.state.comments, res.data]
        });
      })
      .catch(err => console.log(err.response));
  };

  handleLike = event => {
    event.preventDefault();
    const { params } = this.props.match;
    if (!this.state.likeStatus) {
      let data = {
        ...this.state.userdata, //try removing this line in future for a try
        likedPosts: [...this.state.userdata.likedPosts, params.postid]
      };
      axios
        .put(`${api.API_URL}/users/${localStorage.getItem("userid")}`, data, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
          this.setState({ ...this.state, likeStatus: true });
        })
        .catch(err => console.error(err));

      axios
        .put(
          `${api.API_URL}/posts/${params.postid}`,
          { likeCount: this.state.likeCount + 1 },
          {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          this.setState({ likeCount: this.state.likeCount + 1 });
        })
        .catch(err => console.log(err));
    } else {
      let arr = this.state.userdata.likedPosts.filter(val => {
        return val !== params.postid;
      });
      console.log(arr);
      let data = {
        ...this.state.userdata, //try removing this line in future for a try
        likedPosts: [...arr]
      };
      axios
        .put(`${api.API_URL}/users/${localStorage.getItem("userid")}`, data, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res.data.result);
          this.setState({ ...this.state, likeStatus: false });
        })
        .catch(err => console.error(err));

      axios
        .put(
          `${api.API_URL}/posts/${params.postid}`,
          { likeCount: this.state.likeCount - 1 },
          {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        )
        .then(res => {
          this.setState({ likeCount: this.state.likeCount - 1 });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row pb-3 view-section">
          <div className="col-7">
            <div className="frame">
              <img src={this.state.image} alt="Club Card" />
            </div>
          </div>
          <div className="col-5 pl-5">
            <div className="row pb-3">
              <h4>
                {this.state.status}{" "}
                <span className="ml-2 pt-1 badge badge-secondary">
                  by {this.state.username}
                </span>
              </h4>
            </div>

            <button
              onClick={this.handleLike}
              type="button"
              className="btn px-3 btn-primary"
            >
              {this.state.likeStatus ? "Liked 🖤" : "Like"}
            </button>
            <p className="like-number-div ml-3 mt-3">
              {this.state.likeCount} people liked this post.
            </p>

            <hr />
            <div className="row pb-3">
              <h5>
                <strong>Comments</strong>
              </h5>
            </div>
            {this.state.comments.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="row" key={index}>
                    <div style={{ margin: "0 14px" }}>
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
          <div className="row pt-2 pb-2">
            <div className="col-10">
              <form onSubmit={this.handleEdit}>
                <div className="row">
                  <div className="col-4">
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
                  <div className="col-4">
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
                  <div className="col-2">
                    <button className="btn btn-info" type="submit">
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
        ) : null}
      </React.Fragment>
    );
  }
}

export default View;
