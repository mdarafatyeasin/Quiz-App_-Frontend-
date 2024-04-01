import { useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import "./Profile.css";
import Loader from "../../Shared/Loader/Loader";

const Profile = () => {
    const {user, loading} = useUser()
    const navigate = useNavigate()

  const handleLogout = () => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const url = `http://127.0.0.1:8000/auth/logout/${id}/${token}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          localStorage.removeItem("id");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          navigate('/')
        }
      });
  };
  if(!user){
    navigate('/login')
  }

  if(loading){
    return <Loader/>
  }
  return (
    <div className="profile-page">
      <h1>this is profile page</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Profile;
