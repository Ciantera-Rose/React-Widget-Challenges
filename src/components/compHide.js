import React, { Component } from "react";

export default class CompHide extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hide Me",
      isShow: false
    };
  }
  showStatus = () => {
    this.setState({ title: "Hide Me", isShow: true });
  };

  hideStatus = () => {
    this.setState({ title: [], isShow: false });
  };
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <button onClick={this.showStatus}> Show </button>
        <button onClick={this.hideStatus}> Hide </button>
      </div>
    );
  }
}
