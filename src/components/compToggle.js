import React, { Component } from "react";

const Heading = "Toggle Me";

export default class CompToggle extends Component {
  constructor() {
    super();

    this.state = {
      heading: Heading,
      isToggleOn: true
    };
  }

  toggleStatus = () => {
    if (this.state.isToggleOn) {
      this.setState({ heading: [], isToggleOn: false });
    } else {
      this.setState({ heading: Heading, isToggleOn: true });
    }
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <button onClick={this.toggleStatus}> Abracadabra </button>
      </div>
    );
  }
}
