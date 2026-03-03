import { createBrowserRouter } from "react-router";
import { PublicSite } from "./pages/PublicSite";
import { AdminLogin } from "./components/admin/AdminLogin";
import { AdminShell } from "./components/admin/AdminShell";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { AdminProjects } from "./components/admin/AdminProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicSite,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin",
    Component: AdminShell,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "projects", Component: AdminProjects },
    ],
  },
]);
