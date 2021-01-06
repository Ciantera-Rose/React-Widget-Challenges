import React, { Component } from "react";

export default class CompMath extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
}
