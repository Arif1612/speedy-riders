import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { AuthContext } from "../../providers/AuthProvide";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  // Logout
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar  bg-neutral text-white  ">
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
            className="menu menu-sm flex flex-col dropdown-content  p-2  shadow bg-base-300 rounded-box w-60 text-center text-black absolute top-0 z-10 font-semibold"
          >
            <Link className=" mr-5  " to="/">
              Home
            </Link>
            <Link className=" mr-5 " to="/allToys">
              All Toys
            </Link>
            <Link className=" mr-5 " to="/myToys">
              My Toys
            </Link>
            <Link className=" mr-5 " to="/addAToy">
              Add A Toy
            </Link>
            <Link className=" mr-2 " to="/blogs">
              Blogs
            </Link>
          </ul>

        
        </div>

        <Link to="/">
              <div className="flex justify-center items-center ml-6">
              <img
          className=" ms-3 rounded-full"
          width="50px"
          height="34px"
          src={logo}
          alt=""
        />
        <h3 className="text-2xl font-bold ms-3">Speedy Riders</h3>
              </div>
          </Link>
       
      </div>

      {/* start end  */}

      {/* nav lg screen  (middle part) */}
      <div className="navbar-center hidden lg:flex ">
        <Link className=" mr-3 hover:bg-white hover:text-black p-3 hover:text-xl rounded " to="/">
          Home
        </Link>
        <Link className=" mr-3 hover:bg-white hover:text-black p-3 hover:text-xl rounded " to="/allToys">
          All Toys
        </Link>
        {user && (
          <Link className=" mr-3 hover:bg-white hover:text-black p-3 hover:text-xl rounded " to="/myToys">
            My Toys
          </Link>
        )}

        {user && (
          <Link className=" mr-3 hover:bg-white hover:text-black p-3 hover:text-xl rounded " to="/addAToy">
            Add A Toy
          </Link>
        )}

        <Link className=" mr-3 hover:bg-white hover:text-black p-3 hover:text-xl rounded " to="/blogs">
          Blogs
        </Link>
      </div>
      {/* end */}

      <div className="navbar-end mr-6">
        {user && (
          <>
            <span className="mr-4 ">
              <img
                style={{ height: 54 }}
                className="rounded-full "
                src={user.photoURL}
                alt=""
              />
            </span>
            <span className="mr-5">{user.displayName}</span>
          </>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-active btn-secondary"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-active btn-secondary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
