import React from "react";
import rangeRover from "../../assets/rangerover.jpg";
import lamborgini from "../../assets/lamborghini.jpg";
import speed from "../../assets/speed.jpg";

const SpecialOffers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={lamborgini} alt="lamborgini" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Lamborghini</h2>
          <div className="flex">
            <p className="line-through mr-5"> Price: $485 </p>
            <p>Price: $450 </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={rangeRover} alt="range rover" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Range Rover</h2>
          <div className="flex">
            <p className="line-through mr-5"> Price: $385 </p>
            <p>Price: $350 </p>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={speed} alt="lamborgini" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Speed</h2>
          <div className="flex">
            <p className="line-through mr-5"> Price: $265 </p>
            <p>Price: $250 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
