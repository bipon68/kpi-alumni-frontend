import React from "react";
import { users } from "./Constants";

const MembersGroupsSections = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">127 Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border border-gray-300">Username</th>
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Member Since</th>
              <th className="p-3 border border-gray-300">Memberships</th>
              <th className="p-3 border border-gray-300">
                Membership Statuses
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-gray-50`}
              >
                <td className="p-3 flex items-center border border-gray-300">
                  <img
                    src={user.image}
                    alt={user.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {user.username}
                </td>
                <td className="p-3 border border-gray-300">{user.name}</td>
                <td className="p-3 border border-gray-300">
                  {user.memberSince}
                </td>
                <td className="p-3 border border-gray-300">
                  {user.memberships}
                </td>
                <td className="p-3 border border-gray-300">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MembersGroupsSections;
