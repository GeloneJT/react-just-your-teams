import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav(props) {

    return (
      <nav className="top-bar topbar-responsive">
        <div id="topbar-responsive" className="topbar-responsive-links">
          <div className="top-bar-right">
            <ul className="menu simple vertical medium-horizontal">
              <li>
                <button
                  id="userpage"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <NavLink
                    to="/userpage"
                    exact
                  >
                    Home
                  </NavLink>
                </button>
              </li>
              <li>
                <button
                  id="team-search"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <NavLink
                    to="teamsearch"
                    exact
                    
                  >
                    Update Profile
                  </NavLink>
                </button>
              </li>
              <li>
                <button
                  id="chatpage"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <NavLink
                    to="chatpage"
                    exact
                    
                  >
                    Chat
                  </NavLink>
                </button>
              </li>
              <li>
                <button
                  id="logout-link"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <NavLink
                    to="/"
                    exact
                    onClick={props.logout}
                  >
                    {" "}
                    Logout{" "}
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;