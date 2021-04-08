import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {

    const location = useLocation();

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
                  <Link
                    to="/userpage"
                    className={
                      location.pathname === "/userpage" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </Link>
                </button>
              </li>
              <li>
                <button
                  id="team-search"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <Link
                    to="teamsearch"
                    className={
                      location.pathname === "/teamsearch"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Update Profile
                  </Link>
                </button>
              </li>
              <li>
                <button
                  id="logout-link"
                  type="button"
                  className="button hollow topbar-responsive-button"
                >
                  <Link
                    to="/"
                    className={
                      location.pathname === "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    {" "}
                    Logout{" "}
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;