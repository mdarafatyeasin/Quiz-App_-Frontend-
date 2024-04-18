import { Helmet } from "react-helmet-async";
import "./Login.css";
// icon
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

const Login = () => {
  const usenavigete = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    // Prepare the request body
    const requestBody = {
      username: username,
      password: password,
    };

    // Request options for the fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    // Make the fetch request
    fetch("https://quiz-app-backend-ybe6.onrender.com/auth/login/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log("Data received:", data);
        setError(data.error)
        localStorage.setItem("token", data.token, "id", data.user.id);
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("username", data.user.username);
        setLoading(false);
        usenavigete("/home");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="login-page">
      <Helmet>
        <title>QuizApp | Login</title>
      </Helmet>
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <div>
          {error ? (
            <ul className="error-message">
              <li>{error}</li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <FaUser className="input-icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FaLock className="input-icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/login/forgot_password">Forgot password?</Link>
          </div>
          <input className="login-button" type="submit" value="Login" />
          <div className="register-link">
            <p>
              Dont have an account? <Link to="/registration">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
