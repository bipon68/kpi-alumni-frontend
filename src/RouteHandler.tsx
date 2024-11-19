import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/home";
import SubscriptionPage from "./app/subscription";
import CheckoutPage from "./app/payments/CheckoutPage";

export const RouteHandler = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />

        {/* Add checkout routes here */}
        <Route path="/checkout/:planId" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
