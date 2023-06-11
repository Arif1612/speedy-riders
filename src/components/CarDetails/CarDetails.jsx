import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CarDetails = ({ sport }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { name, picture, price, rating, _id } = sport;

  const handleLogin = () => {
    if (user) {
      // Show car details
      alert("car details");
      //   console.log("Car details:", sport);
    } else {
      toast("You have to log in first to view details");
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <div className="card w-full mx-auto bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={picture} alt="cars" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <div className="flex">
              <p className="mr-3">
                <span className="font-semibold">Price:</span> ${price}
              </p>
              <p>
                <span className=" font-semibold">Rating:</span> {rating}
              </p>
            </div>

            <div className="card-actions">
              <button onClick={handleLogin} className="btn btn-primary">
                {user ? "Details" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
