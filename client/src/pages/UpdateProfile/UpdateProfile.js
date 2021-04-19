import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./UpdateProfile.css";

class UpdateProfile extends Component {
  state = {
    email: "",
    username: "",
    about_me: "",
    sport: "soccer",
    league: "epl",
    team: "",
    updated: false,
  };

  userData = JSON.parse(localStorage.getItem("user"));

  //pass UpdateProfile as a component of UserPage so it can access the same state
  inputUpdateChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  submitUpdates = (event) => {
    event.preventDefault();
    API.updateProfile(this.state).catch((err) => {
      console.log(err);
      alert(`Failed to update ${this.userData.username}'s Data.`);
    });
  };

  render() {
    if (this.state.updated) {
      return <Redirect to={`/userpage`} />;
    }
    return (
      <form id="sign-up-form">
        <div className="form-icons">
          <h4>{this.userData.username}, update your account:</h4>
          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-envelope-o"></i>
            </span>
            <input
              value={this.state.email}
              name="email"
              className="input-group-field"
              onChange={this.inputUpdateChange}
              type="text"
              placeholder="Confirm Your Email"
            />
          </div>
          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-user"></i>
            </span>

            <input
              value={this.state.username}
              name="username"
              className="input-group-field"
              onChange={this.inputUpdateChange}
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="translucent-form-overlay">
          <h3>Search for Teams</h3>
          <div className="row columns"></div>
          <div className="row columns">
            <label>
              Sport
              <select
                name="sport"
                value={this.state.sport}
                onChange={this.inputUpdateChange}
                id="sports-input"
                type="text"
              >
                <option value="soccer">Soccer</option>
              </select>
            </label>
          </div>
          <div className="row columns">
            <label>
              League
              <select
                name="league"
                value={this.state.league}
                onChange={this.inputUpdateChange}
                id="leagues-input"
                type="text"
              >
                <option value="epl">English Premier League</option>
              </select>
            </label>
          </div>
          <div className="row columns">
            <label>
              Teams
              <select
                name="team"
                value={this.state.team}
                onChange={this.inputUpdateChange}
                id="teams-input"
                type="text"
              >
                <option value="Arsenal FC">Arsenal FC</option>
                <option value="Aston Villa FC">Aston Villa FC</option>
                <option value="Brighton & Hove Albion FC">
                  Brighton & Hove Albion FC
                </option>
                <option value="Burnley FC">Burnley FC</option>
                <option value="Chelsea FC">Chelsea FC</option>
                <option value="Crystal Palace FC">Crystal Palace FC</option>
                <option value="Everton FC">Everton FC</option>
                <option value="Fulham FC">Fulham FC</option>
                <option value="Leeds United">Leeds United</option>
                <option value="Leicester City FC">Leicester City</option>
                <option value="Liverpool FC">Liverpool FC</option>
                <option value="Manchester City FC">Manchester City FC</option>
                <option value="Manchester United FC">
                  Manchester United FC
                </option>
                <option value="Newcastle United FC">Newcastle United FC</option>
                <option value="Sheffield United FC">Sheffield United FC</option>
                <option value="Southampton FC">Southampton FC</option>
                <option value="Tottenham Hotspur FC">Tottenham Hotspur</option>
                <option value="West Bromwich Albion">
                  West Bromwich Albion
                </option>
                <option value="West Ham United FC">West Ham United FC</option>
                <option value="Wolverhampton Wanderers FC">
                  Wolverhampton Wanderers
                </option>
              </select>
            </label>
          </div>
        </div>
        <div class="cell medium-6">
          <div class="status-update-input-box">
            <form id="about-me-button">
              <div class="row input-box-container">
                <div class="columns">
                  <label>
                    <textarea
                      id="aboutme"
                      rows="5"
                      placeholder="Lets hear about you sports fan!"
                      value={this.state.about_me}
                      onChange={this.inputUpdateChange}
                      name="about_me"
                    ></textarea>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <p>
          <NavLink to="/userpage">
            {" "}
            <input
              onClick={this.submitUpdates}
              type="submit"
              className="button expanded"
              value="Submit"
            />
          </NavLink>
        </p>
      </form>
    );
  }
}

export default UpdateProfile;
