import React from "react";
import "./Landing.css";
import bg from "../../img/SoccerHeader.mp4";
import LoginForm from "../../components/LoginForm";


class Landing extends React.Component {

  render() {
    return (
      <div className="Landing">
        <div className="showcase">
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center">
              <LoginForm>{/* Handle form */}</LoginForm>
              <video className="showcase" muted loop autoPlay>
                <source src={bg} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
