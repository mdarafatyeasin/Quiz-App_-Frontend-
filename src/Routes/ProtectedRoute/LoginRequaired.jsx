import { Navigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import Loader from "../../Shared/Loader/Loader";

const LoginRequaired = ({children}) => {
    const {user, loading} = useUser();
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default LoginRequaired;