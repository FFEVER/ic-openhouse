import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";

class Home extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div>
          <Navbar />
          <Hero />
          <Info />
          <div className="Hero Hero--yellow" />
          <div className="Hero Hero--green" />
        </div>
      </ParallaxProvider>
    );
  }
}

export default Home;
