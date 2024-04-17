import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// icons
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../Loader/Loader";
import useUser from "../../Hooks/useUser";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(true);
  const { admin, adminLoading } = useAdmin();
  const { user, loading } = useUser();
  // console.log(admin);

  if (adminLoading || loading) {
    return <Loader />;
  }

  return (
    <nav className="navbar">
      <h3 className="logo">QuizApp</h3>
      <ul
        onClick={() => setisMobile(true)}
        className={isMobile ? "nav-links" : "nav-links-mobile"}
      >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <Link to="/play_quiz">Quiz</Link>
        </li>
        <li>{admin ? <Link to="/dashboard">Dashboard</Link> : ""}</li>
        <li>{user ? "" : <NavLink to="/login">Login</NavLink>}</li>
        <li>{user ? "" : <NavLink to="/registration">Register</NavLink>}</li>
        <li>{user ? <NavLink to="/profile">Profile</NavLink> : " "}</li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setisMobile(!isMobile)}
      >
        {isMobile ? <IoMenu size={40} /> : <RxCross2 size={40} />}
      </button>
    </nav>
  );
};

export default Navbar;
