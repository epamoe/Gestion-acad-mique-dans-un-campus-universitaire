import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarCoordonateur from "./NavbarCoordonateur";
import SidebarCoordonateur from "./SidebarCoordonateur";

function ProfilCoordonateur() {
  const coodonateurInfos = JSON.parse(
    localStorage.getItem("coordonateurtInfo")
  );
  const dataRequired = () => {
    if (coodonateurInfos == null) {
      alert("Vous devez etre connecte pour acceder cette page");

      navigate("/connexion/coordonateur");
    }
  };
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
    dataRequired();
  }, [navigate, coodonateurInfos]);
  return (
    <div className="containere">
      <NavbarCoordonateur sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <SidebarCoordonateur
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
      />
      <div className="main">ProfilCoordonateur</div>;
    </div>
  );
}

export default ProfilCoordonateur;
