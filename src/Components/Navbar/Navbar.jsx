import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";

import "./Navbar.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigat = useNavigate();

  //Logout With Navigate  start

  const logout = () => {
    logOut();
    Swal.fire({
      title: "Logout Successful !",
      text: "You clicked the button!",
      icon: "success",
    });
    navigat("/");
  };

  //Logout With Navigate  End

  //them Changer start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  //them Changer End

  const navLinks = (
    <>
      <NavLink className=" " to="/">
        <li className="button   hover:bg-transparent text-color-1 hover:text-color-2 ">
          Home
        </li>
      </NavLink>
      <NavLink className=" " to="/allJobs">
        <li className="button  hover:bg-transparent text-color-1 hover:text-color-2 ">
          All Jobs
        </li>
      </NavLink>
      <NavLink className=" " to="/blogs">
        <li className="button  hover:bg-transparent text-color-1 hover:text-color-2 ">
          Blogs
        </li>
      </NavLink>

      {/* {user && (
        <NavLink className="btn btn-ghost hover:bg-color" to="/mylist">
          <li> My List</li>
        </NavLink>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="flex items-center menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center justify-center">
            <img className="w-20" src={logo} alt="" />
            <a className="font-semibold text-color-1  text-3xl">JobQuest</a>
          </div>
        </Link>
      </div>

      <div className="navbar-end flex ">
        <div className=" hidden lg:flex">
          <ul className="flex items-center menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onClick={handleToggle}
                type="checkbox"
                className="theme-controller "
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10 text-color-1 hover:text-color-2 m-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10 text-color-1 hover:text-color-2 m-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {!user && (
            <div className="flex gap-3">
              <Link to="/login">
                <button className="relative py-2 px-8 text-white bg-color-1   text-base font-bold   overflow-hidden   rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-color-2 before:to-color-3 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="relative py-2 px-8 text-white bg-color-1   text-base font-bold   overflow-hidden   rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-color-2 before:to-color-3 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Register
                </button>
              </Link>
            </div>
          )}

          {user && (
            <div
              className="dropdown dropdown-end z-50 tooltip tooltip-left"
              data-tip={user?.displayName}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/addJob">
                  <li>
                    <div className="justify-between">Add Job</div>
                  </li>
                </Link>
                <li>
                  <Link to="/MyJobs">
                    {" "}
                    <div>My Jobs</div>
                  </Link>
                </li>
                <li>
                  <Link to="/AppliedJobs">
                    <div>Applied Jobs</div>
                  </Link>
                </li>
                <li>
                  <Link to="/UserProfile">
                    <div>User Profile</div>
                  </Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logout}
                    className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1 hover:bg-red-600"
                  >
                    <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 512 512"
                        fill="white"
                      >
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>
                    <div className="absolute right-5 transform translate-x-full opacity-0  text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-white">
                      Logout
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
