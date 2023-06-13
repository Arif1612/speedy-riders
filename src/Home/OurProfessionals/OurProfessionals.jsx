import React from "react";
import Marquee from "react-fast-marquee";

const OurProfessionals = () => {
  return (
    <div>
          <Marquee speed={70}>
              {/* 1 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">Marco Watkivi</h2>
            <p className="text-xl">Email: marco@gmail.com</p>
            <p className="text-xl">+1234 5678 901</p>
          </div>
              </div>
              {/* 2 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">Jemmy Anderson</h2>
            <p className="text-xl">Email: jemmy@gmail.com</p>
            <p className="text-xl">+1234 5869 304</p>
          </div>
              </div>
              {/* 3 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">Md. Hasan Mahmud</h2>
            <p className="text-xl">Email: hasan@gmail.com</p>
            <p className="text-xl">+88 0171 5678 901</p>
          </div>
              </div>
              {/* 4 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">Shane Watson</h2>
            <p className="text-xl">Email: watson@gmail.com</p>
            <p className="text-xl">+1234 5898 902</p>
          </div>
              </div>
              
              {/* 5 */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-bold">Darren Sammy</h2>
            <p className="text-xl">Email: sammy@gmail.com</p>
            <p className="text-xl">+1234 5678 999</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default OurProfessionals;
