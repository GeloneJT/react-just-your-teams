import React from "react";
import "./UserPage.css";


class UserPage extends React.Component {
    render() {
        return (
          <div>
            <section>
              <div className="grid-container">
                <div className="grid-x grid-margin-x">
                  <div className="cell medium-auto">
                    <div className="card profile-card-action-icons">
                      <div className="card-section">
                        <div className="profile-card-header">
                          <div className="profile-card-avatar">
                            <img className="avatar-image" src="" alt="" />
                          </div>
                          <div className="profile-card-author">
                            <h5 className="author-title" id="username">
                              Username
                            </h5>
                          </div>
                        </div>
                        <div className="profile-card-about">
                          <h5 className="about-title separator-left">About Me</h5>
                          <p id="about_me" className="about-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Amet autem eveniet nulla quae ullam sit iure
                            voluptatum, nesciunt voluptas perferendis, minus
                            natus in quaerat?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cell medium-auto" id="futureSchedule">
                    Team Schedule
                  </div>
                  <div className="cell medium-auto" id="pastResults">
                    Most Recent games
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div>
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
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/?hl=en">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/?lang=en">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </footer>
              </div>
            </section>
          </div>
        );
    }
}

export default UserPage;