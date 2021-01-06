import React, { Component } from "react";

export default class CompSize extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 25
    };
  }
  render() {
    const pStyle = {
      fontSize: this.state.fontSize + "px"
    };
    return (
      <div>
        <p style={pStyle}> {this.state.fontSize + "px"} </p>
        <button
          onClick={() => this.setState({ fontSize: this.state.fontSize + 1 })}
        >
          {" "}
          Grow{" "}
        </button>
        <button
          onClick={() => this.setState({ fontSize: this.state.fontSize - 1 })}
        >
          {" "}
          Shrink{" "}
        </button>
      </div>
    );
  }
}
