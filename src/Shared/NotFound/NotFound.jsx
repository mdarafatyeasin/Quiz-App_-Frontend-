import "./NotFound.css";
import notFoundImg from "../../assets/404.png"

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-media">
        <img src={notFoundImg} alt="404" />
      </div>
      <div className="not-found-text">
        <h1>404 - Page Not Found</h1>
        <p>
          Oops! The page you are looking for might have been removed or
          temporarily unavailable.
        </p>
        <p>
          Please check the URL for any mistakes, or go back to our{" "}
          <a href="/">homepage</a>.
        </p>
        <a className="return-btn" href="/">Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
