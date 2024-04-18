import { useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import "./Profile.css";
import Loader from "../../Shared/Loader/Loader";
import { useEffect, useState } from "react";
import profilePicture from "./assets/user_img.png";
import { FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const { user, loading } = useUser();
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const userID = localStorage.getItem("id");
  const userTOKEN = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://quiz-app-backend-ybe6.onrender.com/profile/${userID}/${userTOKEN}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleLogout = () => {
    setLogoutLoading(true);
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const url = `https://quiz-app-backend-ybe6.onrender.com/auth/logout/${id}/${token}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setLogoutLoading(false);
          navigate("/home");
          window.location.reload();
        }
      });
  };

  if (!user || user.status === "error") {
    navigate("/login");
  }

  // console.log(userData);

  if (loading || logoutLoading) {
    return <Loader />;
  }
  return (
    <div className="profile-page">
      <div className="img-section">
        <img
          className="profile-picture"
          src={profilePicture}
          alt="profile picture"
        />
        <div className="edit-button">
          <FaUserEdit className="edit-icon" />
        </div>
      </div>
      <h1>{user.username}</h1>
      <h1 className="username">
        {user.first_name} {user.last_name}
      </h1>
      <p>{user.email}</p>
      <button className="show-profile">Show More</button>
      <button className="logout-button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
