import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../modules/registration";
import HomePage from "../modules/Home";
import HomeView from "../modules/homeView";

export default function GetLinkedRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
      ],
    },
    {
      path: "reg",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}