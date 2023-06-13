import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CarDetails = ({ sport, category }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(category);

  const { name, picture, price, rating, _id } = sport;

  const handleLogin = () => {
    if (user) {
      navigate(`/${category}/${_id}`);
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
              <Link to={`/${category}/${_id}`}>
                <button onClick={handleLogin} className="btn btn-primary">
                 View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
