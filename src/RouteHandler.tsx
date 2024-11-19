import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/home";
import LoginPage from "@/app/login/LoginPage";

const isAuthenticated = true; // Change this based on real authentication state

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "./login",
    element: <LoginPage />,
  },
]);

export const RouteHandler = () => {
  return <RouterProvider router={router} />;
};
