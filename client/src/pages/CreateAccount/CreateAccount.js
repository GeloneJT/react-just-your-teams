import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import "./CreateAccount.css";
class CreateAccount extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    sport: "soccer",
    league: "epl",
    team: ""
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email || !this.state.username) {
      alert("Please fill out your email and username!");
    } else if (this.state.password.length < 8) {
      alert(`Please choose a more secure password ${this.state.username}`);
    } else {
      // alert(`Welcome ${this.state.username}`); 
      
       API.saveUser(this.state)
           .then((user) => {
             alert("user created");
           })
           .catch((err) => console.log(err));
       };
    }
  


  //     const submitUser = (newUser) => {
  //        console.log(newUser);
        
    
  //   console.log(this.state);
  // };



    //  componentDidMount(){ 
    //   this.submitUser(this.newUser);
    // }
   

  render() {
    console.log("CreateAccount")
    return (
      <div>
        <section>
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center" id="form-grid">
              <div className="cell medium-6">
                <form id="sign-up-form">
                  <div className="form-icons">
                    <h4>Register for an account</h4>
                    <div className="input-group">
                      <span className="input-group-label">
                        <i className="fa fa-envelope-o"></i>
                      </span>
                      <input
                        value={this.state.email}
                        name="email"
                        className="input-group-field"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
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
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-label">
                        <i className="fa fa-key"></i>
                      </span>

                      <input
                        value={this.state.password}
                        name="password"
                        className="input-group-field"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Password"
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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
                          <option value="Crystal Palace FC">
                            Crystal Palace FC
                          </option>
                          <option value="Everton FC">Everton FC</option>
                          <option value="Fulham FC">Fulham FC</option>
                          <option value="Leeds United">Leeds United</option>
                          <option value="Leicester City FC">
                            Leicester City
                          </option>
                          <option value="Liverpool FC">Liverpool FC</option>
                          <option value="Manchester City FC">
                            Manchester City FC
                          </option>
                          <option value="Manchester United FC">
                            Manchester United FC
                          </option>
                          <option value="Newcastle United FC">
                            Newcastle United FC
                          </option>
                          <option value="Sheffield United FC">
                            Sheffield United FC
                          </option>
                          <option value="Southampton FC">Southampton FC</option>
                          <option value="Tottenham Hotspur FC">
                            Tottenham Hotspur
                          </option>
                          <option value="West Bromwich Albion">
                            West Bromwich Albion
                          </option>
                          <option value="West Ham United FC">
                            West Ham United FC
                          </option>
                          <option value="Wolverhampton Wanderers FC">
                            Wolverhampton Wanderers
                          </option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <p>
                    <NavLink to={{
                      pathname: "/userpage/:id",
                      props:this.newUser
                      }}>
                      {" "}
                      <input
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="button expanded"
                        value="Submit"
                      />
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default CreateAccount;
