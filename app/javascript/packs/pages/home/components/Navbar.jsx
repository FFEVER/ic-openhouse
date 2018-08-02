import React, { Component } from "react";
import $ from "jquery";

class Navbar extends Component {
  componentWillMount() {
    this.navChangeColor();
  }

  navChangeColor() {
    $(function() {
      $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        var $hero = $(".Hero.Hero--yellow");
        $nav.toggleClass(
          "scrolled",
          $(this).scrollTop() > $hero.height() - $nav.height()
        );
      });
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-transparent fixed-top">
        <a class="navbar-brand" href="#">
          <img
            src={require("./images/ic-logo-rabbit.png")}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                DESCRIPTION
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ACTIVITIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SCHEDULE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                COURSES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
