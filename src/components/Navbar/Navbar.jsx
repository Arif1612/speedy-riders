import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="navbar  bg-neutral text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden bg-neutral text-white"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 text-black"
          >
            <Link className=" mr-5 " to="/home">
              Home
            </Link>
            <Link className=" mr-5 " to="/allToys">
              All Toys
            </Link>
            <Link className=" mr-5 " to="/myToys">
              My Toys
            </Link>
            <Link className=" mr-5 " to="/addAToy">
              Add A Top
            </Link>
            <Link className=" mr-5 " to="/blogs">
              Blogs
            </Link>
          </ul>
        </div>
        <img
          className=" ms-3 rounded-full"
          width="50px"
          height="34px"
          src={logo}
          alt=""
        />

        <a className="btn btn-ghost normal-case text-xl">Speedy Rides</a>
      </div>

      {/* start end  */}

      {/* nav lg screen  (middle part) */}
      <div className="navbar-center hidden lg:flex">
        <Link className=" mr-3 " to="/home">
          Home
        </Link>
        <Link className=" mr-3 " to="/allToys">
          All Toys
        </Link>
        <Link className=" mr-3 " to="/myToys">
          My Toys
        </Link>
        <Link className=" mr-3 " to="/addAToy">
          Add A Top
        </Link>
        <Link className=" mr-3 " to="/blogs">
          Blogs
        </Link>
      </div>

      {/* end part */}
      <div className="navbar-end">
        <button className="btn btn-active btn-secondary font-bold">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
