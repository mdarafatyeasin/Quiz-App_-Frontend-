import { useLottie } from "lottie-react";
import "./ConfirmEmail.css";
import confirmEmail from "../../../assets/confirmEmail.json";

const ConfirmEmail = () => {
  const options = {
    animationData: confirmEmail,
    loop: false,
  };
  const { View } = useLottie(options);

  return (
    <div className="confirm-email-page">
      <div className="animation-container">{View}</div>
      <div className="confirmation-text">
        <h1>Please Confirm Your Email</h1>
        <p>
          We have sent a confirmation email to your inbox. Please click on the
          link provided in the email to verify your email address and complete
          the registration process.
        </p>
      </div>
    </div>
  );
};

export default ConfirmEmail;
