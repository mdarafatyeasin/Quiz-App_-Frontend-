import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Quiz from "../Pages/Quiz/Quiz";
import PlayQuiz from "../Pages/Quiz/PlayQuiz/PlayQuiz";


export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path:"",
                    element: <Home/>
                },
                {
                    path:"/registration",
                    element: <Registration/>
                },
                {
                    path:"/login",
                    element: <Login/>
                },
                {
                    path:"/play_quiz",
                    element: <Quiz/>
                },
                {
                    path:"/play_quiz/:id",
                    element: <PlayQuiz/>
                },
            ]
        }
    ]
)