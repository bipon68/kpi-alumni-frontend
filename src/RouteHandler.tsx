import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/home";
import LoginPage from "@/app/login/LoginPage";
import AdminLayout from "./lib/auth/adminLayout";
import ProtectedRoute from "./lib/auth/protectRoute";
import ManageUserPage from "./app/manage/users/ManageUserPage";
import ManageDashboardPage from "./app/manage/dashboard/ManageDashboardPage";
import LoadingPage from "./lib/loading/loadingPage";
import SignupPage from "./app/login/SignupPage";
import { ToastContainer } from "react-toastify";
import useInitStore from "./lib/stores/initStore";
import { useEffect } from "react";

const isAuthenticated = true; // Change this based on real authentication state

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/manage",
      element: <AdminLayout />,
      children: [
        {
          path: "/manage",
          element: <ProtectedRoute element={<ManageDashboardPage />} isAuthenticated={isAuthenticated} />,
        },
        {
          path: "/manage/user",
          element: <ProtectedRoute element={<ManageUserPage />} isAuthenticated={isAuthenticated} />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  }
);

export const RouteHandler = () => {
  const { loadInitInfo } = useInitStore();

  useEffect(() => {
    (async () => {
      await loadInitInfo();
    })();
  }, [loadInitInfo]);
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} fallbackElement={<LoadingPage />} />
      <ToastContainer
        theme="light"
        pauseOnHover
        position="bottom-left"
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
      />
    </>
  );
};
