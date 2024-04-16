import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";
import PlayQuiz from "../Pages/Quiz/PlayQuiz/PlayQuiz";
import Dashboard from "../Layout/Dashboard";
import UserDashboard from "../Dashboard/UserDashboard";
import UploadQuestion from "../Dashboard/dashboard_components/UploadQuestion/UploadQuestion";
import CreateQuiz from "../Dashboard/dashboard_components/CreateQuiz/CreateQuiz";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import Profile from "../Pages/Profile/Profile";
import UploadForm from "../Dashboard/dashboard_components/UploadQuestion/upload/UploadForm";
import ViewQuestion from "../Dashboard/dashboard_components/UploadQuestion/view/ViewQuestion";
import UpdateQuestion from "../Dashboard/dashboard_components/UploadQuestion/Update/UpdateQuestion";
import DashboardChart from "../Dashboard/dashboard_components/DashboardChart/DashboardChart";
import LoginRequaired from "./ProtectedRoute/LoginRequaired";
import AdminRequaired from "./ProtectedRoute/AdminRequaired";
import NotFound from "../Shared/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/play_quiz",
        element: <Quiz />,
      },
      {
        path: "/play_quiz/:id",
        element: <PlayQuiz />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardChart />,
      },
      {
        path: "/dashboard/user_dashboard",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <UserDashboard />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
      {
        path: "/dashboard/create_quiz",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <CreateQuiz />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
      {
        path: "/dashboard/upload_question",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <UploadQuestion />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
      {
        path: "/dashboard/upload_question/:id",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <UploadForm />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
      {
        path: "/dashboard/upload_question/view/:id",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <ViewQuestion />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
      {
        path: "/dashboard/upload_question/question/edit/:id",
        element: (
          <LoginRequaired>
            <AdminRequaired>
              <UpdateQuestion />
            </AdminRequaired>
          </LoginRequaired>
        ),
      },
    ],
  },
]);
