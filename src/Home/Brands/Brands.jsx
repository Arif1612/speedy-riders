import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="mx-5">
      <Marquee speed={70}>
        {/* 1 */}
        <div className="mr-6">
          <img
            className="w-96 h-64  rounded-xl"
            src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
        {/* 2 */}
        <div className="mr-6">
          <img
            className=" w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
        </div>
        {/* 3 */}
        <div className="mr-6">
          <img
            className="w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80"
            alt=""
          />
        </div>
        {/*  4*/}
        <div className="mr-6">
          <img
            className="w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
        </div>
        {/* 5 */}
        <div className="mr-6">
          <img
            className="w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1521058001910-55b77aba2203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
            alt=""
          />
        </div>
        {/* 6 */}
        <div className="mr-6">
          <img
            className="w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1562783912-21ad31ee2a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1248&q=80"
            alt=""
          />
        </div>
        <div className="mr-6">
          <img
            className="w-96 h-64 rounded-xl"
            src="https://images.unsplash.com/photo-1564842505178-48d298786d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
