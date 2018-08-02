import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="Hero Hero--yellow"></div>
        <div className="Hero Hero--green"></div>
      </div>
    );
  }
}

export default Home;
