import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="Hero Hero--yellow"></div>
        <div className="Hero Hero--green"></div>
      </div>
      <ParallaxProvider>
        <div>
          <Navbar />
          <Hero />
          <Countdown />
          <div className="Hero Hero--yellow" />
          <div className="Hero Hero--green" />
        </div>
      </ParallaxProvider>
    );
  }
}

export default Home;
