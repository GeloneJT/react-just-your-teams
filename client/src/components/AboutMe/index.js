import React from "react";
import "./style.css";

function AboutMe() {
  return (
      <div className="grid-x grid-margin-x">
        <div className="cell medium-auto">
          <div className="card profile-card-action-icons">
            <div className="card-section">
              <div className="profile-card-header">
                <div className="profile-card-author">
                  <h5 className="author-title" id="username">
                    Username
                  </h5>
                </div>
              </div>
              <div className="profile-card-about">
                <h5 className="about-title separator-left">About Me</h5>
                <p id="about_me" className="about-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  autem eveniet nulla quae ullam sit iure voluptatum, nesciunt
                  voluptas perferendis, minus natus in quaerat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutMe;
