import React, { useState } from "react";
import ModalAddJob from "./modals/ModalAddJob";

const AdmJobsPageHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <div className="flex items-center justify-between p-3">
        <div className="text-2xl font-medium text-primary">Manage Jobs</div>
        <div className="flex gap-3">
          <button
            className="px-3 py-2 text-white rounded-md bg-secondary w-[125px] hover:bg-secondary-700"
            onClick={() => setIsModalOpen(true)}
          >
            Add Job
          </button>
        </div>
      </div>
      {isModalOpen && <ModalAddJob closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default AdmJobsPageHeader;
