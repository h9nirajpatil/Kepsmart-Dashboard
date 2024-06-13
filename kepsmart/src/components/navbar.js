import React, { useState } from "react";
import "./navbar.css";
import logo from "../img/logo.png";
import { HiPuzzle } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import "./Offcanvas.css";
import Offcanvas from "./Offcanvas";

const Navbar = ({ progress }) => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };
  return (
    <>
      <nav>
        <div className="navbarconatiner">
          <div className="navbarlogo">
            <img
              src={logo}
              width={50}
              height={50}
              className="kepsmarlogo"
              alt="logo"
            ></img>
            <h2>
              <span className="kep">Kep</span>
              <span className="smart">Smart</span>
            </h2>
          </div>
          <div className="mainboiler">
            {/* <div className="boiler">
              <h4>&nbsp;Main Boiler</h4>
            </div>
            <div className="progress-container">
              <p>Inside Average Temperature Of BMU: 71.31 F</p>
              <div className="progress-bar">
                <div
                  className="progress-bar-inner"
                  style={{ width: `${progress}%` }}
                ></div>
                <div className="radiobutton">
                  <input
                    id="radio1"
                    type="radio"
                    name="radiogroup"
                    defaultChecked
                  />
                  <label htmlFor="radio1"></label>
                  <input id="radio2" type="radio" name="radiogroup" />
                  <label htmlFor="radio2"></label>
                  <input id="radio3" type="radio" name="radiogroup" />
                  <label htmlFor="radio3"></label>
                  <input id="radio4" type="radio" name="radiogroup" />
                  <label htmlFor="radio4"></label>
                </div>
              </div>
            </div>
            <div className="onbutton">
              <div class="checkbox-wrapper-6">
                <input class="tgl tgl-light" id="cb1-6" type="checkbox" />
                <label class="tgl-btn" for="cb1-6" /> &nbsp;&nbsp; <p>ON</p>
              </div>
            </div> */}
          </div>
          <div className="profilecontainer">
            <div id="Icon">
              <div className="puzzle">
                <HiPuzzle id="puzzle" />
                <div className="circle">+</div>
              </div>
            </div>
            <div id="Icon">
              <div className="notification" onClick={toggleNotification}>
                <IoNotifications id="notification" />
              </div>
              <Offcanvas
                placement="right"
                show={notificationOpen}
                handleClose={toggleNotification}
              />
            </div>
            <div id="Icon">
              <div className="Profilicon">
                <h3>SA</h3>
              </div>
              <div className="profiename">
                <h3>Nitin</h3>
                <br />
                <p>Admin</p>
              </div>
            </div>
            <div id="Icon">
              <div className="downarrow">
                <IoIosArrowDown id="downarrow" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
