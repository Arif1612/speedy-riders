import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCarDetails = () => {
    const car = useLoaderData();
    

  if (!car) {
    return <p>Loading...</p>; // Render a loading state while data is being fetched
  }

  console.log(car);

  const { name, picture, price, rating } = car;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 rounded-lg">
          <img className="rounded-lg" src={picture} alt="" />
        </div>

        <div className="w-1/2">
          <h1 className="py-2 text-5xl font-bold">{name}</h1>
          <p className="py-2 text-xl font-semibold">Price: {price}</p>
          <p className="py-2 text-xl font-semibold">Rating: {rating}</p>
          <p className="text-xl font-semibold">
            Description:{" "}
            <span className=" font-normal">
              A racing car is a purpose-built vehicle designed for competitive
              racing on tracks. These high-performance machines are built with
              cutting-edge technology and precision engineering. With
              lightweight construction and aerodynamic bodywork, racing cars are
              designed to achieve maximum speed and optimal handling. Powered by
              powerful engines and equipped with advanced suspension systems,
              racing cars offer incredible acceleration and cornering
              capabilities. Safety features such as roll cages and specialized
              racing seats ensure driver protection during intense racing
              conditions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCarDetails;
