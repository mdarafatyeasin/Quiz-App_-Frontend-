import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// icons
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMobile, setisMobile] = useState(true);

  return (
    <nav className="navbar">
      <h3 className="logo">QuizApp</h3>
      <ul
        onClick={() => setisMobile(true)}
        className={isMobile ? "nav-links" : "nav-links-mobile"}
      >
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <Link to="/play_quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Register</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
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
