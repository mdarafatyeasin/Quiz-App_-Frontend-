import axios from "axios";
import "./ForgotPass.css";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader"

const ForgotPass = () => {

  const [loading, setLoading] = useState(false)

  const handleForgotPassword = async (event) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    // Prepare the request body
    const requestBody = {
      email: email,
    };

    // Send a POST request
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/password/forgot-password/",
        requestBody
      );
      console.log(response);
      if (response.status === 200) {
        // Clear the form
        form.reset();
        setLoading(false)
        toast.success("Please check your email");
        <Navigate to={"/login/forgot_password/reset_password"} />
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  if(loading){
    return <Loader/>
  }

  return (
    <div className="forgotPass-page">
      <div>
        <form onSubmit={handleForgotPassword}>
          <h1>Reset your password </h1>
          <p>
            Enter your email and we will send you instructions on how to reser
            your password.
          </p>

          <input
            name="email"
            className="ft-email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="btn btn-primary mb-5"
            type="submit"
            value="Send instructions"
          />
          <p>Go back to Login page</p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
