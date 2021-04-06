import React from 'react';
import './App.css';
import bg from "./img/SoccerHeader.mp4";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="showcase">
          <div className="grid-container">
            <div className="grid-x grid-margin-x align-center">
              <form id="login-form" className="log-in-form" method="POST">
                <h4 className="text-center">Log in with your username</h4>
                <label >
                  Username
                  <input
                    id="username-input-login"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                  />
                </label>
                <label >
                  Password
                  <input
                    id="password-input-login"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                  />
                </label>
                <p>
                  <input
                    type="submit"
                    className="button expanded"
                    value="Log in"
                  ></input>
                </p>
                <p className="text-center">
                  <a href="/create-acc">No account? Sign up today!</a>
                </p>
              </form>
              <video
                className="showcase"
                muted
                loop
                autoplay
              ><source src={bg} type="video/mp4" />
              </video>
            </div>
            <div className="toggle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
