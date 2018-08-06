import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Info from "./components/Info";
import Schedule from "./components/Schedule";

class Home extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div>
          <Navbar />
          <Hero />
          <Info />
          <Activities />
          <Schedule />
          <div className="Hero Hero--yellow" />
          <div className="Hero Hero--green" />
        </div>
      </ParallaxProvider>
    );
  }
}

export default Home;
