import React, { Component } from "react";
import { TimelineMax, TweenMax, Linear } from "gsap";
import ScrollMagic from "scrollmagic";
import "animation.gsap";
import "debug.addIndicators";

class SlideElement extends Component {
  // props: targetElement, top, bottom, left, right, indicatorName, duration
  componentDidMount() {
    var {
      top,
      bottom,
      left,
      right,
      duration,
      targetElement,
      indicatorName
    } = this.props;
    // make a controller and add indicators to all scenes attached
    var controller = new ScrollMagic.Controller({ addIndicators: true });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "",
      // controlled by scroll pixels of vertical scroll
      duration: duration
    })
      .setTween(targetElement, 1, {
        top: top,
        right: right,
        left: left,
        bottom: bottom
      })
      .addIndicators({ name: indicatorName }) // add indicators (requires plugin)
      .addTo(controller);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default SlideElement;
