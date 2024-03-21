import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer-section">
      <footer>
        <div className="footer-content">
          <div className="footer-contact">
            <p>Contact us: mdyeasinarafat723@gmail.com</p>
            <p>Phone Number: +880 17704-91801</p>
          </div>
          <div className="social-media">
            <p>Follow us on social media:</p>
            <ul>
              <li className="social-box"><FaFacebookSquare/> Facebook</li>
              <li className="social-box"><FaSquareXTwitter/>Twitter</li>
              <li className="social-box"><FaSquareInstagram/>Instagram</li>
            </ul>
          </div>
          <div className="address">
            <p>Md.Yeasin Arafat</p>
            <p>39 No Word, Cementcorching</p>
            <p>EPZ, Chittagong</p>
            <p>Bangladesh.</p>
          </div>
        </div>
        <p className="copyright">
          © Copyrights <span>{date}</span> by <strong>QuizApp</strong>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
