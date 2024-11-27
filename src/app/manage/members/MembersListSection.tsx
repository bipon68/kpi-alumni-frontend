import React from "react";
import MembersListComp from "./MembersListComp";

const MembersListSection: React.FC = () => {
  return (
    <div className="divide-y divide-slate-100">
      {/* <Nav>
        <NavItem href="/new" isActive>New Releases</NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav> */}
      <List className="divide-y divide-slate-100">
        {movies.map((movie) => (
          <MembersListComp key={movie.id} />
        ))}
      </List>
    </div>
  );
};

export default MembersListSection;
