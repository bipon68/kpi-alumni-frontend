import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/home";
import LoginPage from "@/app/login/LoginPage";
import ProtectedRoute from "./lib/auth/protectRoute";
import ManageUserPage from "./app/manage/users/ManageUserPage";
import ManageDashboardPage from "./app/manage/dashboard/ManageDashboardPage";
import LoadingPage from "./lib/loading/loadingPage";
import SignupPage from "./app/login/SignupPage";
import { ToastContainer } from "react-toastify";
import useInitStore from "./lib/stores/initStore";
import { useEffect } from "react";
import LayoutComp from "./lib/layout/LayoutComp";
import ManageEventPage from "./app/manage/events/ManageEventPage";
import useAuthStore from "./lib/stores/authStore";

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
      element: <LayoutComp />,
      children: [
        {
          path: "/manage",
          element: <ProtectedRoute element={<ManageDashboardPage />} isAuthenticated={isAuthenticated} />,
        },
        {
          path: "/manage/dashboard",
          element: <ProtectedRoute element={<ManageDashboardPage />} isAuthenticated={isAuthenticated} />,
        },
        {
          path: "/manage/event",
          element: <ProtectedRoute element={<ManageEventPage />} isAuthenticated={isAuthenticated} />,
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
  const { verifyLogin, setUserInfo } = useAuthStore();

  useEffect(() => {
    (async () => {
      await loadInitInfo();
    })();
  }, [loadInitInfo]);

  useEffect(() => {
    (async () => {
      const data = await verifyLogin();
      setUserInfo(data);
    })();
  }, [setUserInfo, verifyLogin]);
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} fallbackElement={<LoadingPage />} />
      <ToastContainer
        theme="light"
        pauseOnHover
        position="bottom-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
};
