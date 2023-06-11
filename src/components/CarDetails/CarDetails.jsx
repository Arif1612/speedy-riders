import React from "react";

const CarDetails = ({ sport }) => {
  const { name, picture, price, rating, _id } = sport;
  //   console.log(sport);
  return (
    <div>
      <div>
        <div className="card w-full mx-auto bg-base-100 shadow-xl  ">
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
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
