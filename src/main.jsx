import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./Layout/MainLayout/MainLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvide from "./providers/AuthProvide";

import AddAToy from "./components/AddAToy/AddAToy";

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
