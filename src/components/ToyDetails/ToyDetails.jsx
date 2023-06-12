import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { seller, toyName, subCategory, price,availableQuantity } = toys;
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" md:w-1/2  rounded-lg">
            <img className="rounded-lg" src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
          </div>
  
          <div className="md:w-1/2">
            <h1 className="py-2 text-5xl font-bold">ToyName: {toyName}</h1>
                    <p className="py-2 text-xl font-semibold">Seller Name: {seller}</p>
                    <p className="py-2 text-xl font-semibold">Price: {price}</p>
            {/* <p className="py-2 text-xl font-semibold">Rating: {rating}</p> */}
            <p className="py-2 text-xl font-semibold">Available Quantity: {availableQuantity}</p>
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
  )
};

export default ToyDetails;
