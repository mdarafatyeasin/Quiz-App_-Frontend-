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
        element: (
            <PlayQuiz />
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/user_dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/dashboard/create_quiz",
        element: <CreateQuiz />,
      },
      {
        path: "/dashboard/upload_question",
        element: <UploadQuestion />,
      },
    ],
  },
]);
