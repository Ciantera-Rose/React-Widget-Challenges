import React, { Component } from "react";

export default class CompTime extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    //object deconstruction
    const { time } = this.state;

    return (
      <div>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
