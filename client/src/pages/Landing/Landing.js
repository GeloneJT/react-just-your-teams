import React from "react";
import "./Landing.css";
import bg from "../../img/SoccerHeader.mp4";
import LoginForm from "../../components/LoginForm";


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  //need to API.saveUser => to login or may need to write a new function
  //import API from "../../utils/API"
  

  render() {
    return (
      <div className="Landing">
        <div className="showcase">
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center">
              <LoginForm match={this.props.match}>{/* Handle form */}</LoginForm>
              <video className="showcase" muted loop autoPlay>
                <source src={bg} type="video/mp4" />
              </video>
            </div>
            <div className="toggle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
