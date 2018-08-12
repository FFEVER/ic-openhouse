import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Activities from "./components/Activities";
import Schedule from "./components/Schedule";
import Courses from "./components/Courses";
import Map from "./components/Map";
import Footer from "./components/Footer";

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
          <Courses />
          <Map />
          <Footer />
        </div>
      </ParallaxProvider>
    );
  }
}

export default Home;
