import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toys = useLoaderData();
  // console.log(toys);
  const {
    pictureUrl,
    name,
    sellerName,
    email,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toys;
  console.log(toys);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" md:w-1/2  rounded-lg">
          <img className="rounded-lg" src={pictureUrl} alt="" />
        </div>

        <div className="md:w-1/2">
          <h1 className="py-1 text-3xl font-bold">ToyName: {name}</h1>
          <p className="py-1 text-xl font-semibold">
            Seller Name: {sellerName}
          </p>
          <p className="py-1 text-xl font-semibold">Email: {email}</p>
          <p className="py-1 text-xl font-semibold">Price: {price}</p>
          <p className="py-1 text-xl font-semibold">Rating: {rating}</p>
          <p className="py-1 text-xl font-semibold">
            Available Quantity: {quantity}
          </p>
          <p className="text-xl font-semibold">
            Description: <span className=" font-normal">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
