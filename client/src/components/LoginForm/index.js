
import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });

     console.log(this.state);
  };

 

  loginUser = {
    email: this.state.email,
    password: this.state.password,
  };
  
  login = (loginUser) => {
    API.getUsers(loginUser)
      .then((res) => {
        alert(`User ${res.data.username} Loggedin!`);
      })
      .catch((err) => console.log(err), alert("Inccorrect Email or Password"));
  };

  render() {
    return (
      <form className="log-in-form" method="POST">
        <h4 className="text-center">Log in with your Email</h4>
        <label>
          Email
          <input
            value={this.state.email}
            onChange={this.handleInputChange}
            type="text"
            name="email"
            placeholder="Enter Email"
          />
        </label>
        <label>
          Password
          <input
            value={this.state.password}
            onChange={this.handleInputChange}
            id="password-input-login"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </label>
        <p>
          <NavLink to="/userpage/:id">
            <input
              onClick={this.login}
              type="submit"
              className="button expanded"
              value="Log in"
              />
          </NavLink>
        </p>
        <p className="text-center">
          <NavLink to={`/createaccount`} exact>
            No account? Sign up today!
          </NavLink>
        </p>
        {/* <Route exact path={`/createaccount`}/> */}
      </form>
    );
  }
}

export default LoginForm;
