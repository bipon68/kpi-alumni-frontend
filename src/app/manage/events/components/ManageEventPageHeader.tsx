import React from "react";

const ManageEventPageHeader: React.FC = () => {
    return (
        <div className="flex items-center justify-between p-3">
            <div className="text-2xl font-medium text-primary">
                Manage Event
            </div>
            <div className="flex gap-3 Action Buttons ">
                <button className="px-3 py-2 text-white rounded-md bg-secondary w-[125px] hover:bg-secondary-700">Add Event</button>
                <button className="px-3 py-2 text-white bg-red-600 rounded-md w-[125px] hover:bg-red-500">Delete Event</button>
            </div>
        </div >
    );
};

export default ManageEventPageHeader;
