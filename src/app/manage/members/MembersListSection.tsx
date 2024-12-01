import React from "react";
import MembersSearch from "./MembersSearch";
import { MembersAddBtnComp } from "./MembersAddBtnComp";
import { users } from "./Constants";

const MembersListSection: React.FC = () => {
  return (
    <div className="">
      <MembersSearch />
      <div className=" flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-secondary ">Members</h1>
        <div className=" m-5">
          <MembersAddBtnComp />
        </div>
      </div>

      <div className="w-full flex gap-3.5">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full border rounded-xl bg-secondary-50 p-4"
            >
              <div className="font-medium text-secondary text-lg">
                Computer Science and Engineering
              </div>
              <div className="font-medium text-primary text-sm">
                Khulna Polytechnic Institute
              </div>
              <div className="flex items-center space-x-[-10px] mt-5">
                {users.slice(0, 3).map((user, index) => (
                  <div
                    key={index}
                    className="relative size-7 border-2 border-white rounded-full overflow-hidden"
                  >
                    <img
                      src={user.image}
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MembersListSection;
