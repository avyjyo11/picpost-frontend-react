import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>
          {this.props.label || this.props.placeholder}
        </label>
        <input
          type={this.props.type}
          className="form-control"
          id={this.props.name}
          placeholder={this.props.placeholder}
          name={this.props.name}
          required={this.props.required}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
