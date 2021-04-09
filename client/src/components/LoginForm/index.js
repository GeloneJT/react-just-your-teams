import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function LoginForm() {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { username, value } = event.target;

    this.setState({
      [username]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.setState({
      username: "",
      password: "",
    });
  };
  const location = useLocation();

  return (
    <form className="log-in-form">
      <h4 className="text-center">Log in with your username</h4>
      <label>
        Username
        <input
        value={this.state.username}
          type="text"
          name="username"
          onChange={this.handleInputChange}
          placeholder="Enter Username"
        />
      </label>
      <label>
        Password
        <input
          value={this.state.password}
          type="password"
          name="password"
          onChange={this.state.password}
          placeholder="Enter Password"
        />
      </label>
      <p>
        <input type="submit" className="button expanded" value="Log in"></input>
      </p>
      <p className="text-center">
        <Link
          to="/createaccount"
          className={
            location.pathname === "/createaccount"
              ? "nav-link active"
              : "nav-link"
          }
        >
          No account? Sign up today!
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
