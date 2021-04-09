import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";


function LoginForm() {
  const location = useLocation();

  const [user, setUser] = useState({ 
    username: "", 
    password: "" 
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setUser({
      ...user,
      username: "",
      password: "",
    });
  };

  return (
    <form className="log-in-form">
      <h4 className="text-center">Log in with your username</h4>
      <label>
        Username
        <input
          value={user.username}
          type="text"
          name="username"
          onChange={handleInputChange}
          placeholder="Enter Username"
        />
      </label>
      <label>
        Password
        <input
          value={user.password}
          type="password"
          name="password"
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
      </label>
      <p>
        <input onClick={handleFormSubmit} type="submit" className="button expanded" value="Log in"></input>
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
