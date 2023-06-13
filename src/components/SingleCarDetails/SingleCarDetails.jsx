import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCarDetails = () => {
  const car = useLoaderData();

  if (!car) {
    return <p>Loading...</p>; // Render a loading state while data is being fetched
  }

  console.log(car);

  const { name, picture, price, rating, description } = car;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" md:w-1/2  rounded-lg">
          <img className="rounded-lg" src={picture} alt="" />
        </div>

        <div className="md:w-1/2">
          <h1 className="py-2 text-5xl font-bold">{name}</h1>
          <p className="py-2 text-xl font-semibold">Price: {price}</p>
          <p className="py-2 text-xl font-semibold">Rating: {rating}</p>
          <p className="text-xl font-semibold">
            Description:{description}
            <span className=" font-normal"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCarDetails;
