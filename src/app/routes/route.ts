import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { DashboardSettings } from "../pages/Dashboard/Settings/Dashboard_Settings";
import Login from "../pages/Login/Login";

export const routes = createBrowserRouter([
  {
    index: true,
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    children: [
      {index: true, Component: Dashboard},
      {path: "settings", Component: DashboardSettings}
    ]
  }
]);
