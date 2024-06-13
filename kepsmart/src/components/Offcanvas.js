import React from "react";
import "./Offcanvas.css";

const Offcanvas = ({ show, handleClose, children }) => {
  return (
    <div className={`offcanvas ${show ? "show" : ""}`}>
      <div className="overlay" onClick={handleClose}></div>
      <div className="offcanvas-content">
        <div className="notitop">
          <h2>&nbsp;&nbsp;Notifications</h2>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="notimiddile"></div>
        {children}
      </div>
    </div>
  );
};

export default Offcanvas;
