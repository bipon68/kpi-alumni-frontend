import React from "react";
import AdmEventPageHeader from "./components/AdmEventPageHeader";
import AdmEventPageTableSection from "./components/AdmEventPageTableSection";

const AdmEventPage: React.FC = () => {
  return (
    <div className="">
      <AdmEventPageHeader />
      <AdmEventPageTableSection />
    </div>
  );
};

export default AdmEventPage;
