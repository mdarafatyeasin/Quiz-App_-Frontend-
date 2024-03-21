import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";


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
            ]
        }
    ]
)