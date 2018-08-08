import React, { Component } from "react";
import $ from "jquery";
import MoveTo from "moveto";

class Navbar extends Component {
  componentWillMount() {
    this.navChangeColor();
  }

  onLinkClicked(event) {
    const moveTo = new MoveTo();
    const target = document.getElementById(event.currentTarget.dataset.id);
    moveTo.move(target);
  }

  navChangeColor() {
    $(function() {
      $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        var $hero = $(".Hero.Hero--yellow");
        var $brand = $("#navbar-brand");

        if ($(this).scrollTop() > $hero.height() - $nav.height()) {
          $brand.removeClass("hidden");
          $nav.addClass("scrolled");
        } else {
          $brand.addClass("hidden");
          $nav.removeClass("scrolled");
        }
      });
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-transparent fixed-top">
        <a id="navbar-brand" className="navbar-brand hidden" href="#">
          <img src={require("./images/ic-logo-rabbit.png")} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" data-id="description" onClick={this.onLinkClicked}>
                DESCRIPTION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="activities" onClick={this.onLinkClicked}>
                ACTIVITIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="schedule" onClick={this.onLinkClicked}>
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="courses" onClick={this.onLinkClicked}>
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="map" onClick={this.onLinkClicked}>
                MAP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
