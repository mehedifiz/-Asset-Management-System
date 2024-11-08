import { Avatar } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

function Navbar() {
  // Define navbar links only for non-logged-in users
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-5 py-2 font-bold font-roboto uppercase ${
            isActive ? "text-primary" : "hover:text-primary"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/join-as-employee"
        className={({ isActive }) =>
          `flex items-center gap-2 px-5 py-2 font-bold font-roboto uppercase ${
            isActive ? "text-primary" : "hover:text-primary"
          }`
        }
      >
        Join As Employee
      </NavLink>
      <NavLink
        to="/join-as-hr"
        className={({ isActive }) =>
          `flex items-center gap-2 px-5 py-2 font-bold font-roboto uppercase ${
            isActive ? "text-primary" : "hover:text-primary"
          }`
        }
      >
        Join As HR
      </NavLink>
    </>
  );

  return (
    <div className="shadow-lg h-20 flex items-center">
      <div className="navbar container mx-auto bg-base-100">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost z-50 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-50 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className="logo">
            <h1 className="uppercase font-roboto font-extrabold lg:text-3xl md:text-2xl text-xl">
              Asset<span className="text-primary font-lato">H</span>ub
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link className="px-5 py-2 font-roboto font-bold bg-primary text-white" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
