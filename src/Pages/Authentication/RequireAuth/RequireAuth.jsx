import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";

const RequireAuth = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return null; // or you can return a loading spinner or any other component while checking for user authentication
};

export default RequireAuth;
