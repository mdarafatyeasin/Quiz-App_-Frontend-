import axios from "axios";
import "./ResetPass.css";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

const ResetPass = () => {
  const { uidb64, token } = useParams();
  const [loading, setLoading] = useState(false);
  const user_token = `${uidb64}/${token}`;

  const [error, setError] = useState();

  const handleResetPassword = async (event) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password === confirm_password) {
      const requestBody = {
        token: user_token,
        new_password: confirm_password,
      };

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/password/reset-password/",
          requestBody
        );
        if (response.status === 200) {
          console.log(response);
          form.reset();
          setLoading(false)
          toast.success("Password change successfully!");
        } else {
          toast.error("Failed to submit the form");
          console.log("Failed to submit form");
          setLoading(false)
          setError("The token is not validate");
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
        setError("The token is expired, try again letter.")
        // toast.error(error);
      }
    } else {
      setLoading(false)
      setError("Password didnt match with confirm password");
    }
  };

  if(loading){
    return <Loader/>
  }

  console.log(user_token);

  return (
    <div className="forgotPass-page">
      <div>
        <Toaster />
      </div>
      <div>
        <form onSubmit={handleResetPassword}>
          <h1>Reset your password </h1>
          <div>{error ? <ul className="error-message">
            <li>{error}</li>
          </ul> : ""}</div>
          <p>Enter your password to save. Do not share your password.</p>
          <input
            name="password"
            className="ft-email"
            type="password"
            placeholder="New password"
            required
          />
          <input
            name="confirm_password"
            className="ft-email"
            type="password"
            placeholder="Confirm password"
            required
          />
          <input
            className="btn btn-primary mb-5"
            type="submit"
            value="Save password"
          />
          <p>Go back to Login page</p>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
