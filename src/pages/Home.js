import React, { Component } from "react";
import { Link } from "react-router-dom";
import Columned from "react-columned";

import PostBlock from "../components/PostBlock";

import { getPosts } from "../services/posts";

const DEFAULT_POST = {
  image:
    "https://images.pexels.com/photos/556663/pexels-photo-556663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  status: "Hello World",
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [DEFAULT_POST],
    };
  }

  async componentDidMount() {
    const data = await getPosts();
    this.setState({ posts: data });
  }

  render() {
    const { url } = this.props.match;
    const tabsStyle = {
      paddingBottom: "20px",
    };
    return (
      <React.Fragment>
        <div style={tabsStyle}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link active">Global Posts</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Following</button>
            </li>
          </ul>
        </div>
        <Columned columns={{ 320: 1, 480: 2, 800: 2, 1366: 3, 1920: 4 }}>
          {this.state.posts.map((value, index) => {
            return (
              <Link key={index} to={`${url}/${value._id}`}>
                <PostBlock imgURL={value.image} status={value.status} />
              </Link>
            );
          })}
        </Columned>
      </React.Fragment>
    );
  }
}

export default Home;
