import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../modules/registration";
import HomePage from "../modules/Home";
import HomeView from "../modules/homeView";
import Contact from "../modules/contact";

export default function GetLinkedRouter() {
  useEffect(() => {
    document.title = "Getlinked";
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <HomeView />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "reg",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
