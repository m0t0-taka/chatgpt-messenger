import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <div>
            <NewChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
