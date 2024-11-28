import React from "react";

const ManageEventPageHeader: React.FC = () => {
    return (
        <div className="flex justify-between p-3 bg-secondary-200">
            <div className="title">
                Manage Event
            </div>
            <div className="flex gap-3 Action Buttons ">
                <button className="px-3 py-2 text-white rounded-md bg-primary">Add Event</button>
                <button className="px-3 py-2 text-white bg-red-600 rounded-md">Delete Event</button>
            </div>
        </div >
    );
};

export default ManageEventPageHeader;
