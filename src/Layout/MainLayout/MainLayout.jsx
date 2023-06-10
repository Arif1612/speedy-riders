import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <p>Main</p>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
