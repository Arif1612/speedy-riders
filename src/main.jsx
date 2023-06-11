import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./Layout/MainLayout/MainLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvide from "./providers/AuthProvide";
import AddAToy from "./components/AddAToy/AddAToy";
import Home from "./Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import SingleCarDetails from "./components/SingleCarDetails/SingleCarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "sports/:carId",
        element: <SingleCarDetails></SingleCarDetails>,
        loader: ({ params }) => {
          console.log(params.carId); // Log the carId
          return fetch(`http://localhost:5000/sports/${params.carId}`);
        },
      },
      {
        path: "regular/:carId",
        element: <SingleCarDetails></SingleCarDetails>,
        loader: ({ params }) => {
          console.log(params.carId); // Log the carId
          return fetch(`http://localhost:5000/regular/${params.carId}`);
        },
      },
      {
        path: "cars/:carId",
        element: <SingleCarDetails></SingleCarDetails>,
        loader: ({ params }) => {
          console.log(params.carId); // Log the carId
          return fetch(`http://localhost:5000/cars/${params.carId}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
      <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>
);
