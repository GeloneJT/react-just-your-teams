import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function LoginForm() {
  const location = useLocation();

  return (
    <form className="log-in-form" method="POST">
      <h4 className="text-center">Log in with your username</h4>
      <label>
        Username
        <input type="text" name="username" placeholder="Enter Username" />
      </label>
      <label>
        Password
        <input
          id="password-input-login"
          type="password"
          name="password"
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
