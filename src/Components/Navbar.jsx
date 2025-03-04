import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user,singOut} = useContext(AuthContext);
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink>All Campaign</NavLink></li>
        <li><NavLink to={'/addNewCampaign'}>Add New Campaign</NavLink></li>
        <li><NavLink to={'/myCampaign'}>My Campaign</NavLink></li>
        <li><NavLink to={'/myDonation'}>My Donations</NavLink></li>
      
        
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Mz Group</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <Link to={'/auth/login'} className="btn">Login</Link> */}
    <div className="mr-4">
                    {
                        user ? <div className="flex flex-col gap-2"><img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" /> <h1 className="text-xl font-semibold">{user?.displayName}</h1></div> : <FaUserCircle className="text-4xl mr-2" />
                    }
                    </div>
                    <div>
                    {
                        user ? <><button className="btn btn-neutral" onClick={singOut} >LogOut</button></> : <Link to={"/auth/login"} className="btn">Login</Link>
                    }
                    
                    </div>
  </div>
</div>
    );
};

export default Navbar;