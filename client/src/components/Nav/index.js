import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {

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
                  id="logout-link"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <NavLink
                    to="/"
                    exact
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