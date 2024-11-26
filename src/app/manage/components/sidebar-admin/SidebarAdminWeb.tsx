import { cn } from "@/utils/cn";
import { LayoutDashboard } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SidebarAdminWeb: React.FC = () => {
  return (
    <div className="min-w-68 w-68 sidebar-admin border-r border-primary-100 h-[calc(100vh_-_70px)]">
      <ul className={cn("overflow-hidden p-4 pl-2.5 overflow-y-auto")}>
        <li className="mb-1 min-w-60">
          <Link
            to="#"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<LayoutDashboard size={20} />}</span>
              <span className="menu-title text-base font-normal capitalize">Dashboard</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdminWeb;
