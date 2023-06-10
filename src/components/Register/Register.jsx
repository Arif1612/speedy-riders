import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
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

              {/* photoUrl */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="photoUrl"
                  name="photoUrl"
                  required
                  className="input input-bordered"
                />
              </div>

              <label className="label">
                <p className=" block text-red-700 font-semibold">
                  Already have an account?
                  <Link to="/login" className="text-green-700 text ml-2">
                    Login
                  </Link>
                </p>
              </label>
            </div>

            {/* photo url */}
            <div className="form-control mt-2">
              <button className="btn btn-success">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
