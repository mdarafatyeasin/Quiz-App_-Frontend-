import { Helmet } from "react-helmet-async";
import "./Login.css";
// icon
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
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
    fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        localStorage.setItem("token", data.token, "id", data.user.id);
        localStorage.setItem("id", data.user.id);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="login-page">
      <Helmet>
        <title>QuizApp | Login</title>
      </Helmet>
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" />
            <FaUser className="input-icon"/>
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" />
            <FaLock className="input-icon"/>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <input className="login-button" type="submit" value="Login" />
          <div className="register-link">
            <p>Don't have an account? <Link to="/registration">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
