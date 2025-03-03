import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";


const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;