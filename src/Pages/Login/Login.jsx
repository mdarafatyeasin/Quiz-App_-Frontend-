import { Helmet } from "react-helmet-async";
import "./Login.css";

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
      <div>
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
