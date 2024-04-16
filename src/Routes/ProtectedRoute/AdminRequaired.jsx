// import React from 'react';

import { Navigate } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import useAdmin from "../../Hooks/useAdmin";

const AdminRequaired = ({children}) => {
    const { admin, adminLoading } = useAdmin();
    console.log(admin)
    if(adminLoading){
        return <Loader/>
    }
    if(admin){
        return children
    }
    return <Navigate to="*"></Navigate>
};

export default AdminRequaired;