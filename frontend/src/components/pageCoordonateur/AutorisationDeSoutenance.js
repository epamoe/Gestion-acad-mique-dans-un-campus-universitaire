import React, { useState } from "react";
import NavbarCoordonateur from "./NavbarCoordonateur";
import SidebarCoordonateur from "./SidebarCoordonateur";

function AutorisationDeSoutenance() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="containere">
      <NavbarCoordonateur sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <SidebarCoordonateur
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />
      <div className="main">AutorisationDeSoutenance</div>;
    </div>
  );
}

export default AutorisationDeSoutenance;
