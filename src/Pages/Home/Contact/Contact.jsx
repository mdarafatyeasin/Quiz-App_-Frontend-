import { useLottie } from "lottie-react";
import "./Contact.css";
import contactAnim from "./asset/contact.json";

const Contact = () => {
  const options = {
    animationData: contactAnim,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="contact-section">
      <div className="contact-content">
      <div className="contact-anim">
          <div>{View}</div>
        </div>
        <div className="contact-text">
          <h1>CONTACT</h1>
          <p>
            Do you have questions about our services? Need assistance with a
            problem or issue? Interested in collaborating with us on a project?
            We're here to help every step of the way!
          </p>
          <p>
            Feel free to reach out to us through the contact form below, and
            we'll respond to your inquiry as soon as possible. Your satisfaction
            is our priority, and we look forward to assisting you!
          </p>
          <button className="contact-button">SEND EMAIL</button>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
