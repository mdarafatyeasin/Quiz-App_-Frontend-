import { Helmet } from "react-helmet-async";
import "./Registration.css";
// icon
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import ConfirmEmail from "../ConfirmEmail/ConfirmEmail";
import { useState } from "react";

const Registration = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(true);

  const handelRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const email = form.email.value;
    const phone_number = form.number.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    // Prepare the request body
    const requestBody = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      password: password,
      confirm_password: confirm_password,
    };

    // Request options for the fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };

    // Make the fetch request
    fetch("http://127.0.0.1:8000/auth/registration/", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setRegistrationSuccess(true);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="registration-page">
      <Helmet>
        <title>QuizApp | Registration</title>
      </Helmet>
      {registrationSuccess ? (
        <div className="registration-content">
          <h1 className="registration-title">Registration</h1>

          <form className="registration-form" onSubmit={handelRegistration}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <FaUser className="input-icon" />
            </div>
            <div className="name-section">
              <div className="input-box">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  required
                />
              </div>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                required
              />
              <MdMarkEmailRead className="input-icon" />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="number"
                placeholder="Number"
                required
              />
              <IoCall className="input-icon" />
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
            <div className="input-box">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                required
              />
              <FaLock className="input-icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Accept trams and condition.
              </label>
            </div>
            <input
              className="registration-button"
              type="submit"
              value="Register"
            />
            <div className="login-link">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <ConfirmEmail />
      )}
    </div>
  );
};

export default Registration;
