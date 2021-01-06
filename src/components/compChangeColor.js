import React, { Component } from "react";

export default class CompChangeColor extends Component {
  constructor() {
    super();
    this.state = {
      color: " "
    };
  }

  colorEvent = (e) => {
    this.setState({ color: e.target.value });
  };

  render() {
    const inputColor = {
      color: this.state.color
    };

    return (
      <div style={inputColor}>
        <form>
          <p>
            Choose my color: {this.state.color} {this.inputColor}{" "}
          </p>
      <input
            type="text"    
            placeholder="enter color here"
            onChange={this.colorEvent}
          />
          <button onClick={() => this.setState({ color: this.state.color })}>
            Change Color
          </button>
        </form>
      </div>
    );
  }
}
