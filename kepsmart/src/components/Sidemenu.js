import React from "react";
import "./sidemenu.css";
import { MdDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelpSquareFilled } from "react-icons/tb";
import Rightmenu from "./Rightmenu";
const Sidemenu = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidemenu">
        <div className="menu-icon">
          <div className="leftsideicon">
            <MdDashboard
              id="icon"
              style={{ color: "green", background: "#C7F6C7" }}
            />
            <p style={{ color: "green" }}>DASHBOARD</p>
          </div>
          <div className="leftsideicon">
            <FaBuilding id="icon" />
            <p>FLOORS</p>
          </div>
          <div className="leftsideicon">
            <IoIosDocument id="icon" />
            <p>REPORTS</p>
          </div>
          <div className="leftsideicon">
            <IoSettingsSharp id="icon" />
            <p>SETTINGS</p>
          </div>
          <div className="leftsideicon">
            <TbHelpSquareFilled id="icon" />
            <p>HELP</p>
          </div>
        </div>
      </div>
      <Rightmenu />
    </div>
  );
};

export default Sidemenu;
