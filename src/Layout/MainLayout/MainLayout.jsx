import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <p>Main</p>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
