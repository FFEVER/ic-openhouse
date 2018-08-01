import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        Hello
      </div>
    );
  }
}

export default Home;
