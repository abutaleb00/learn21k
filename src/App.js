import React, { Component } from "react";
import "./App.css";

class App extends Component {
  sum = (...num) => {
    return num.reduce((a, b) => a + b);
  };
  newName = () => {
    console.log("Hello");
  };
  render() {
    let xam = this.sum(10, 30, 40, 50, 98);
    return (
      <div className="App">
        <h1>Hello React</h1>
        {xam}
      </div>
    );
  }
}

export default App;
