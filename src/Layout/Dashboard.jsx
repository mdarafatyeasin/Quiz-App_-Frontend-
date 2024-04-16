import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";
import "./Dashboard.css";
import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div><Toaster/></div>
      <div className="top">
        <SideBar></SideBar>
        <div className="outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
