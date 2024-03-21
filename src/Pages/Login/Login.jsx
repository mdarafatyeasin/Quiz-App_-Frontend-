import { Helmet } from "react-helmet-async";
import "./Login.css"

const Login = () => {
  return (
    <div className="login-page">
      <Helmet>
        <title>QuizApp | Login</title>
      </Helmet>
      <h1 className="login-title">This is login Page</h1>
    </div>
  );
};

export default Login;
