import React from "react";
import "./style.css";

function AboutMe(props) {
  return (
    <div>
      <div className="cell medium-auto">
        <div className="card profile-card-action-icons">
          <div className="card-section">
            <div className="profile-card-header">
              <div className="profile-card-author">
                <h5 className="author-title" id="username">
                  {props.username}
                </h5>
              </div>
            </div>
            <div className="profile-card-about">
              <h5 className="about-title separator-left">Your Team:</h5>
              <p id="about_me" className="about-content">
                {props.aboutme}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
