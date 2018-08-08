import React, { Component } from "react";
import $ from "jquery";
import MoveTo from "moveto";

class Navbar extends Component {
  componentWillMount() {
    this.navChangeColor();
  }

  onLinkClicked(event) {
    const moveTo = new MoveTo();
    const target = document.getElementById(event.target.dataset.id);
    moveTo.move(target);

  }

  navChangeColor() {
    $(function() {
      $(document).scroll(function() {
        var $nav = $(".navbar.fixed-top");
        var $hero = $(".Hero");
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
        <a id="navbar-brand" className="navbar-brand hidden" data-id="root" onClick={this.onLinkClicked}>
          <img src={require("./images/ic-logo-rabbit.png")} data-id="root" onClick={this.onLinkClicked}/>
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
              <a className="nav-link" data-id="Info" onClick={this.onLinkClicked}>
                DESCRIPTION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="Activities" onClick={this.onLinkClicked}>
                ACTIVITIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="Schedule" onClick={this.onLinkClicked}>
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="Courses" onClick={this.onLinkClicked}>
                COURSES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-id="Map" onClick={this.onLinkClicked}>
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
