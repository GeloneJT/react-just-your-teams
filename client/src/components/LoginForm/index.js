
import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    user: null,
    loggedIn: false
  };
  //using localstorage to access user info - need to exclude password
  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
    this.handleLogin = (event) => {
      event.preventDefault();
      API.login(this.state)
        .then((req) => {
          // console.log("REQUESTED USER: ", req);
          API.getUser(req.data).then((user) => {
            // console.log('INCOMING USER: ', user.data)
            if (user) {
              this.setState({ user: user.data, loggedIn:true });
              localStorage.setItem("user", JSON.stringify(user.data));
              alert(`User ${user.data.username} Loggedin!`);
            }
          });
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            alert(`Incorrect Email and/or Password`);
          }
        });
    };
  };

  render() {
    if(this.state.loggedIn){
      return (<Redirect to={`/userpage`}/>)
    }
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
          {/* <NavLink to="/userpage/:id"> */}
            <input
              onClick={this.handleLogin}
              type="submit"
              className="button expanded"
              value="Log in"
            />
          {/* </NavLink> */}
        </p>
        <p className="text-center">
          <NavLink to={{
            pathname: `/createaccount`,
            loginProps:{
              handleLogin: this.handleLogin
            }}} exact>
            No account? Sign up today!
          </NavLink>
        </p>
        {/* <Route exact path={`/createaccount`}/> */}
      </form>
  );
  }
}

export default LoginForm;
