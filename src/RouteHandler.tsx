import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/home";
import SubscriptionPage from "./app/subscription";
import CheckoutPage from "./app/payments/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const RouteHandler = () => {
  return <RouterProvider router={router} />;
};
