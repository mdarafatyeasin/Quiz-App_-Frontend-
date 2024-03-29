import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";
import Footer from '../Shared/Footer/Footer'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <div className="top">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
        <Footer/>
    </div>
  );
};

export default Dashboard;
