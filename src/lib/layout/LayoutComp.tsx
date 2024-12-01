import HeaderAdminWeb from "@/app/manage/components/header-admin/HeaderAdminWeb";
import SidebarAdminWeb from "@/app/manage/components/sidebar-admin/SidebarAdminWeb";
import { onAuthStateChanged } from "firebase/auth";
import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { firebaseAuth } from "../google/firebase";

const LayoutComp: FC = (): React.ReactElement => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("User Logged in: ", user);
      } else {
        console.log("User Logged out");
      }
    });
    return () => unsubscribe();
  }, []);

  // Verify user authentication
  // If not authenticated, redirect to login page

  return (
    <div className="layout">
      <HeaderAdminWeb />
      <main className="flex">
        <SidebarAdminWeb />
        <div className="page-content h-[calc(100vh_-_70px)]  w-full p-2 md:p-5 bg-[#FAFCFE]">
          <div className="page-content-inner h-full md:h-[calc(100vh_-_110px)] print:h-full bg-white overflow-x-auto p-2 md:p-5 shadow-base rounded-lg md:rounded-3xl">
            {<Outlet />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutComp;
