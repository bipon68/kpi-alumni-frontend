import HeaderAdminWeb from "@/app/manage/components/header-admin/HeaderAdminWeb";
import SidebarAdminWeb from "@/app/manage/components/sidebar-admin/SidebarAdminWeb";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const LayoutComp: FC = (): React.ReactElement => {
  return (
    <div className="layout">
      <HeaderAdminWeb />
      <main className="flex">
        <SidebarAdminWeb />
        <div className="page-content">{<Outlet />}</div>
      </main>
    </div>
  );
};

export default LayoutComp;
