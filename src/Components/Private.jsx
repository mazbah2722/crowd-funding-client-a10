import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";


const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>;
    }
    return (
        <Navigate to={"/auth/login"}>
            
        </Navigate>
    );
};

export default Private;