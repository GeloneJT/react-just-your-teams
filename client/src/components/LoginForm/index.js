
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class LoginForm extends Component {



  state = {
    email: "",
    password: "",
    user: null
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
      this.handleLogin = (event) => {
        event.preventDefault();

        console.dir("DATA FOR LOGIN: " + this.state);
        API.login(this.state)
          .then((req) => {
            console.log("REQUESTED USER: ", req);
            // this.setState({ user: req });
            // console.log("STATE OF USER: " + this.state.user);
            API.getUser(req.data)
            .then((user) => {
              console.log('INCOMING USER: ', user.data)
              this.setState({ user: user.data });
              console.log("SET STATE OF USER: " +this.state.user);
              alert(`User ${user.data.username} Loggedin!`);
            });
          })
          // .catch(
          //   (err) => console.log(err),
          //   alert("Inccorrect Email or Password")
          // );
      };
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
              onClick={this.handleLogin}
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
