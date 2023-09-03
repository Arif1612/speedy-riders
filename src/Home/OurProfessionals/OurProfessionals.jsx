import React from "react";
import Marquee from "react-fast-marquee";

const OurProfessionals = () => {
  return (
    <div className="mx-5">
      <Marquee speed={70}>
        {/* 1 */}
        <div className=" bg-base-100 shadow-xl  ">
          <figure className="px-5 pt-10">
            <img
              className="rounded-xl w-80 "
              src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="Shoes"
            />
          </figure>
       
        </div>
        {/* 2 */}
        <div className="bg-base-100 shadow-xl ">
          <figure className="px-5 pt-10">
            <img  className="rounded-xl w-80"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
             
            />
          </figure>
        
          
              </div>
        {/* 3 */}
         <div className=" bg-base-100 shadow-xl ">
          <figure className="px-5 pt-10">
            <img
              src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Shoes"
              className="rounded-xl w-80"
            />
          </figure>
       
        
          </div>
           
        {/* 4 */}
        <div className="cabg-base-100 shadow-xl ">
          <figure className="px-5 pt-10">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
              className="rounded-xl w-80"
            />
          </figure>
        
           
              </div>

        {/* 5 */}
        <div className= "bg-base-100 shadow-xl ">
          <figure className="px-5 pt-10">
            <img
              src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Shoes"
              className="rounded-xl w-80"
            />
          </figure>
          
          

        </div>
      </Marquee>
    </div>
  );
};

export default OurProfessionals;
