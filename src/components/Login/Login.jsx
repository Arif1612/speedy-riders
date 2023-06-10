import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="email"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <p className="block text-red-700  font-semibold">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-green-700 ">
                    Register
                  </Link>
                </p>
              </label>
            </div>

            {/* photo url */}
            <div className="form-control mt-2">
              <button className="btn btn-success">Login</button>
            </div>

            <p className="text-center">Or</p>

            <div className="form-control mt-2">
              <button className="btn btn-warning">Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
