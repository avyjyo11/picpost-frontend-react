import React from "react";

function PostBlock(props) {
  const mainStyle = {
    margin: "10px"
  };

  const status = props.status || "Hello world";
  const imgURL =
    props.imgURL ||
    "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <div className="card" style={mainStyle}>
      <img className="card-img-top" src={imgURL} alt="im" />
      <div className="card-body">
        <p className="card-text" style={{ fontSize: "1.2em" }}>
          {status}
        </p>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
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
      </div>
    </div>
  );
}

export default PostBlock;
