import React, { Component } from "react";
import ParticlesSpace from "../../../plugins/particlesInSpace";

class Hero extends Component {
  render() {
    return (
      <section className="Hero">
        <ParticlesSpace className="ParticlesSpace" />
        <div className="logo-row">
          <div className="logo-col">
            <img
              className="rabbit"
              src={require("./images/ic-logo-rabbit.png")}
            />
          </div>
          <div className="logo-col">
            <img
              className="text"
              src={require("./images/ic-logo-text-1.png")}
            />
            <img
              className="text"
              src={require("./images/ic-logo-text-2.png")}
            />
            <img
              className="text"
              src={require("./images/ic-logo-text-3.png")}
            />
            <img
              className="text"
              src={require("./images/ic-logo-text-4.png")}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
