import React, { Component } from "react";
import Navbar from "./components/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Hero Hero--yellow"></div>
        <div className="Hero Hero--green"></div>
      </div>
    );
  }
}

export default Home;
