import React from "react";

class PostBlock extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const imgElement = this.imageRef.current;

    imgElement.addEventListener("load", () => {
      console.log(imgElement.clientHeight);
    });
  }

  render() {
    const mainStyle = {
      margin: "10px",
    };

    const status = this.props.status || "Hello world";
    const imgURL =
      this.props.imgURL ||
      "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    return (
      <div className="card" style={mainStyle}>
        <img
          alt="im"
          src={imgURL}
          className="card-img-top"
          ref={this.imageRef}
        />
        <div className="card-body">
          <p className="card-text" style={{ fontSize: "1.2em" }}>
            {status}
          </p>
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
}

export default PostBlock;
