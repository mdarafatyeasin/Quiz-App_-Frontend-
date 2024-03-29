import { NavLink } from "react-router-dom";
import './SideBar.css'


const SideBar = () => {
    return (
        <div className="sidebar-section">
            <div className='dashboard-nav'>
                <ul>
                    <NavLink to="user_dashboard">User Dashboard</NavLink>
                </ul>
                <ul>
                    <NavLink to="create_quiz">Create Quiz</NavLink>
                </ul>
                <ul>
                    <NavLink to="upload_question">Upload Question</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;