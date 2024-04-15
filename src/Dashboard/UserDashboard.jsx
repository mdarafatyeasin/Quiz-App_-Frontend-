import { useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import Loader from "../Shared/Loader/Loader";
import useAdmin from "../Hooks/useAdmin";

const UserDashboard = () => {
  const { user, loading: userLoading } = useUser();
  const { admin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();

  // Check if either user or admin is still loading
  if (userLoading || adminLoading) {
    return <Loader />;
  }

  // Check if either user or admin request resulted in an error
  if (user?.status === "error" || admin?.status === "error") {
    navigate("/login");
    return null; // Prevent further rendering
  }

  // Check if user is not logged in or not an admin
  if (!user || !admin || admin.role !== "admin") {
    navigate("/login");
    return null; // Prevent further rendering
  }

  // User is logged in and is an admin
  return (
    <div>
      <h1>This is user dashboard</h1>
    </div>
  );
};

export default UserDashboard;
