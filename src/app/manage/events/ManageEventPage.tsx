import React from "react";
import ManageEventPageHeader from "./components/ManageEventPageHeader";
import ManageEventPageTableSection from "./components/ManageEventPageTableSection";

const ManageEventPage: React.FC = () => {
  return (
    <div className="">
      <ManageEventPageHeader />
      <ManageEventPageTableSection />
    </div>
  );
};

export default ManageEventPage;
