import React from "react";
import { useRoutes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { About } from "../components/About/About";

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return routes;
};
