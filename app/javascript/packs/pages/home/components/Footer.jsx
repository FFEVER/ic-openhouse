import React, { Component } from "react";
import $ from "jquery";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container">
          <div className="Footer__ic">
            <h1>
              <img src={require("./images/ic-icon-full.png")} />
            </h1>
            <p>King Mongkut's Institute of Technology</p>
            <p>Ladkrabang International College</p>
            <p>Bangkok, Thailand 10520</p>
          </div>

          <div className="Footer__icon">
            <ul>
              <li className="var_nav">
                <div className="link_bg link_bg--fb" />
                <div className="link_title">
                  <a
                    href="https://www.facebook.com/interkmitl/"
                    target="_blank"
                  >
                    <span>@interkmitl</span>
                  </a>
                  <div className="icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                </div>
              </li>
              <li className="var_nav">
                <div className="link_bg link_bg--phone" />
                <div className="link_title">
                  <a href="#">
                    <span>064 963 3383 พี่ทศ</span>
                  </a>
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                </div>
              </li>
              <li className="var_nav">
                <div className="link_bg link_bg--email" />
                <div className="link_title">
                  <a href="#">
                    <span>thossakrai@outlook.com</span>
                  </a>
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <ul className="Footer__social">
            <a href="https://www.facebook.com/interkmitl/" target="_blank">
              <li className="fb">
                <i className="fab fa-facebook-f" />
                <p>@interkmitl</p>
              </li>
            </a>
            <li className="phone">
              <i className="fas fa-phone" />
              <p>064 963 3383 พี่ทศ</p>
            </li>
            <li className="email">
              <i className="fas fa-envelope" />
              <p>thossakrai@outlook.com</p>
            </li>
          </ul>
        </div>
        <div className="Footer__copyright">
          <div className="container">
            <p>&copy; IC KMITL Open House 2018. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
