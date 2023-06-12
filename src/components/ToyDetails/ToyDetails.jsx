import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { seller, toyName, price, availableQuantity, description } = toys;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" md:w-1/2  rounded-lg">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="py-2 text-5xl font-bold">ToyName: {toyName}</h1>
          <p className="py-2 text-xl font-semibold">Seller Name: {seller}</p>
          <p className="py-2 text-xl font-semibold">Price: {price}</p>
          {/* <p className="py-2 text-xl font-semibold">Rating: {rating}</p> */}
          <p className="py-2 text-xl font-semibold">
            Available Quantity: {availableQuantity}
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
