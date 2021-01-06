import React, { Component } from "react";
import "./styles.css";
import CompMath from "./components/compMath";
import CompToggle from "./components/compToggle";
import CompHide from "./components/compHide";
import CompTime from "./components/compTime";
import CompAlign from "./components/compAlign";
import CompChangeColor from "./components/compChangeColor";
import CompSize from "./components/compSize";
import CompRGB from "./components/compRGB";
import CompTogglePassword from "./components/compTogglePassword";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CompMath />
        <hr />
        <CompToggle />
        <hr />
        <CompHide />
        <hr />
        <CompTime />
        <hr />
        <CompAlign />
        <hr />
        <CompChangeColor />
        <hr />
        <CompSize />
        <hr />
        <CompRGB />
        <hr />
        <CompTogglePassword />
      </div>
    );
  }
}
