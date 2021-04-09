import React from "react";
import "./style.css"

function Footer () {
    return(
        <footer className="social-footer">
          <div className="social-footer-left">
            <a href="#">
              <img className="logo" src="" />
            </a>
          </div>
          <div className="social-footer-icons">
            <ul className="menu simple">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/?hl=en">
                  <i className="" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en">
                  <i className="" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
    )
}

export default Footer;