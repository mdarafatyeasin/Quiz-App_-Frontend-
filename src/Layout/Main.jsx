import { Outlet } from "react-router-dom";
import './Main.css'
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="main-section">
      <Navbar />
      <Outlet>
        {/* er pore shared bishoy gulo implement kora jay jmon navbar footer etc */}
        {/* apatotot kichui kora hoy nai */}
      </Outlet>
      <Footer/>
    </div>
  );
};

export default Main;
