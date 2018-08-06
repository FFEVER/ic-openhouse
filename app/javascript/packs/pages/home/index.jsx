import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Hero Hero--green" />
        <Footer />
      </div>
    );
  }
}

export default Home;
