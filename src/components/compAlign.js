import React, { Component } from "react";

const Heading = "Flexbox Lasers";

const Position = {
  left: "flex-start",
  center: "center",
  right: "flex-end"
};

export default class CompAlign extends Component {
  constructor() {
    super();

    this.state = {
      heading: Heading,
      position: Position
    };
  }

  render() {
    const flexBox = {
      display: "flex",
      justifyContent: this.state.position,
      alignItems: "center"
    };

    return (
      <div>
        <h2 style={flexBox}>{this.state.heading}</h2>
        <button
          onClick={() => this.setState({ position: this.state.position.left })}
        >
          {" "}
          Left{" "}
        </button>
        <button
          onClick={() =>
            this.setState({ position: this.state.position.center })
          }
        >
          {" "}
          Center{" "}
        </button>
        <button
          onClick={() => this.setState({ position: this.state.position.right })}
        >
          {" "}
          Right{" "}
        </button>
      </div>
    );
  }
}
