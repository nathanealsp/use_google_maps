import React, { Component } from "react";
import ReactDOM from "react-dom";

// CREATE NEW COMPONENT
class App extends Component {
  render() {
    return <div>HEY</div>;
  }
}
// PUT COMPONENT INTO THE DOM
ReactDOM.render(<App />, document.querySelector(".container"));
