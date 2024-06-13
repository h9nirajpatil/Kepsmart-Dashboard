import React, { useState } from "react";

import "./rightmenu.css";
import "./Modal.css";
import "./Popup.css";
import "./navbar.css";

import { MdAutoGraph } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoExpandSharp } from "react-icons/io5";

import bul from "../img/Buildin.png";
import averagetemp from "../img/averagetemp.png";
import currentemp from "../img/currenttemp.png";
import vopen from "../img/vopen.png";
import vclose from "../img/vclose.png";
import Divider from "../img/divider.png";

import Chart from "react-apexcharts";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="adddatatop">
          <h2>Add Data Points</h2>
          <div class="checkbox-wrapper-1">
            <input
              id="example-1"
              class="substituted"
              type="checkbox"
              aria-hidden="true"
            />
            <label for="example-1">Deselect All</label>
          </div>
          <div class="checkbox-wrapper-2">
            <input
              id="example-1"
              class="substituted"
              type="checkbox"
              aria-hidden="true"
            />
            <label for="example-1">Select All</label>
          </div>
        </div>
        <div className="adddatamiddle">
          <div class="grid-container3">
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>DHW</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Coil</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Stack</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Pressure</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Leak</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>PM Sensor</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>NOx</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>VOX</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Indoor Temps</p>
            </div>
            <div className="datapointcon">
              <div class="grid-item3"></div>
              <p>Outdoor</p>
            </div>
          </div>
        </div>
        <div className="adddatalast">
          <button id="canclebtn" className="closebutton" onClick={onClose}>
            CANCEL
          </button>
          <button id="savebtn" className="closebutton" onClick={onClose}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const Rightmenu = (progress) => {
  const [state, setState] = useState({
    options: {
      chart: {
        // id: "basic-bar",
        height: 280,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    fill: {
      type: "gradient",
      colors: ["#EACB8F"],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      width: 0.5,
    },
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [open, close] = useState(false);

  const toggleopenclose = () => {
    close(!open);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function smuoneupdateValue() {
    var element = document.getElementById("smuone");
    var value = parseInt(element.innerText);
    element.innerText = value + 2;
  }
  setInterval(smuoneupdateValue, 1000);
  function smuotwoupdateValue() {
    var element = document.getElementById("smutwo");
    var value = parseInt(element.innerText);
    element.innerText = value + 1;
  }
  setInterval(smuotwoupdateValue, 1000);
  function bmuoneupdateValue() {
    var element = document.getElementById("bmuone");
    var value = parseInt(element.innerText);
    element.innerText = value + 1;
  }
  setInterval(bmuoneupdateValue, 1000);
  function bmuotwoupdateValue() {
    var element = document.getElementById("bmutwo");
    var value = parseInt(element.innerText);
    element.innerText = value + 4;
  }
  setInterval(bmuotwoupdateValue, 1000);

  return (
    <div style={{ display: "flex" }}>
      <div className="graph">
        <div className="part1">
          <div class="grid-container">
            <div class="grid-item">
              <img src={bul} alt="" />
              <h3>RED CATHOLIC HIGH..</h3>
              <h5>13th,March,Wenesday</h5>
              <div class="wrapper">
                <div class="Back">
                  <div class="green"></div>
                  <p>
                    ONLINE SMU's:
                    <span class="smu" id="smuone">
                      1
                    </span>
                  </p>
                </div>
                <div class="Back">
                  <div class="Blue"></div>
                  <p>
                    ONLINE BMU's:
                    <span class="smu" id="bmuone">
                      2
                    </span>
                  </p>
                </div>
              </div>
              <div class="wrapper1">
                <div class="Back">
                  <div class="salmon"></div>
                  <p>
                    OFFLINE SMU's:
                    <span class="smu" id="smutwo">
                      1
                    </span>
                  </p>
                </div>
                <div class="Back">
                  <div class="Orange"></div>
                  <p>
                    OFFLINE BMU's:
                    <span class="smu" id="bmutwo">
                      0
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="progress">
              <div className="tempcards">
                <div
                  className="tempcardsitem"
                  style={{ border: "1px solid #EF6C6C" }}
                >
                  <img src={averagetemp} alt="" />
                  <h4>Average Inside</h4>
                  <h2>
                    71<sup>o</sup>
                  </h2>
                </div>
                <div
                  className="tempcardsitem"
                  style={{ border: "1px solid #76F0CB" }}
                >
                  <img src={currentemp} alt="" />
                  <h4>Current Outside</h4>
                  <h2>
                    43<sup>o</sup>
                  </h2>
                </div>
                <div
                  className="tempcardsitem"
                  style={{ border: "1px solid #7B92F1" }}
                >
                  <img src={vopen} alt="" />
                  <h4>Valves Opened</h4>
                  <h2>
                    143<sub>/211</sub>
                  </h2>
                </div>
                <div
                  className="tempcardsitem"
                  style={{ border: "1px solid #62CFFD" }}
                >
                  <img src={vclose} alt="" />
                  <h4>Valves Closed</h4>
                  <h2>
                    68<sub>/211</sub>
                  </h2>
                </div>
              </div>
            </div>
            <div className="Boiler-Progress-Bars">
              <div className="progress-bar-con">
                <div className="progress-bar-top">
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Main Boiler</b>
                  </p>
                  <p id="ctn-space">
                    <b>
                      Inside Average Temperature of BMU : 71.31<sup>o</sup>F
                    </b>
                  </p>
                  <div id="ctn-space" class="checkbox-wrapper-6">
                    <input class="tgl tgl-light" id="cb1-6" type="checkbox" />
                    <label class="tgl-btn" for="cb1-6" />
                  </div>
                  <p>
                    &nbsp;&nbsp;&nbsp;<b>ON</b>
                  </p>
                </div>
                <div className="pbar">
                  <div
                    className="progress-bar-inner"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
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
          </div>
        </div>
        {/* graph part1 */}
        <div className="part3">
          <div id="grid-container3">
            <div
              id="grid-item3"
              style={{
                background: "rgb(247,234,210,0.7)",
                border: "2px solid #E5BD70",
              }}
            >
              <div className="graph-head">
                <h2>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft
                    className="ghi"
                    style={{
                      marginLeft: "6.7vw",
                      cursor: "pointer",
                    }}
                  />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "6vw", cursor: "pointer" }}
                    onClick={togglePopup}
                  />
                </div>
              </div>
              <div className="graphcontainerout">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="700"
                />
              </div>
              {isOpen && (
                <div className="popup">
                  <div className="popup-content">
                    <div className="graph-expand-head">
                      <span className="close" onClick={togglePopup}>
                        &times;
                      </span>
                      <h2>&nbsp;&nbsp; Outdoor Temperature</h2>
                    </div>
                    <div className="graph-expand-searchbar">
                      <div className="select-container">
                        <select className="custom-select">
                          <option value="">Select Floor</option>
                          <option value="option1">First Floor</option>
                          <option value="option2">Second Floor</option>
                          <option value="option3">Third Floor</option>
                        </select>
                        <select className="custom-select">
                          <option value="">Select User Space</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                        <select className="custom-select">
                          <option value="">Select Room</option>
                          <option value="option1">Room 1</option>
                          <option value="option2">Room 2</option>
                          <option value="option3">Room 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="graphcontainerin">
                      <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="700"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              id="grid-item3"
              style={{
                background: "rgb(252,216,210,0.7)",
                border: "2px solid #F1472C",
              }}
            >
              <div className="graph-head">
                <h2>&nbsp;Indoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft
                    className="ghi"
                    style={{ marginLeft: "6.7vw", cursor: "pointer" }}
                  />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "6vw", cursor: "pointer" }}
                    onClick={toggleopenclose}
                  />
                </div>
              </div>
              <div className="graphcontainerout">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="700"
                />
              </div>
              {open && (
                <div className="popup">
                  <div className="popup-content">
                    <div className="graph-expand-head">
                      <span className="close" onClick={toggleopenclose}>
                        &times;
                      </span>
                      <h2>&nbsp;&nbsp; Indoor Temperature</h2>
                    </div>
                    <div className="graph-expand-searchbar">
                      <div className="select-container">
                        <select className="custom-select">
                          <option value="">Select Floor</option>
                          <option value="option1">First Floor</option>
                          <option value="option2">Second Floor</option>
                          <option value="option3">Third Floor</option>
                        </select>
                        <select className="custom-select">
                          <option value="">Select User Space</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                        <select className="custom-select">
                          <option value="">Select Room</option>
                          <option value="option1">Room 1</option>
                          <option value="option2">Room 2</option>
                          <option value="option3">Room 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="graphcontainer">
                      <Chart
                        options={state.options}
                        series={state.series}
                        type="area"
                        width="700"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* image divider */}
        <div className="Divider">
          <img src={Divider} alt="" />
          <p>Boiler Data</p>
          <img src={Divider} alt="" />
        </div>
        {/* divider end */}
        {/*graph part 2 */}
        <div className="part2">
          <div class="grid-container2">
            <div class="grid-item2" style={{ border: "2px solid #3F56A1" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #16E8DF", marginLeft: "100px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #3FB3A1", marginLeft: "200px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div class="grid-item2" style={{ border: "2px solid #FFE401" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #A93FB3", marginLeft: "100px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #B33F3F", marginLeft: "200px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div class="grid-item2" style={{ border: "2px solid #79B33F" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #B37E3F", marginLeft: "100px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ background: "#f8f7fd", marginLeft: "200px" }}
            >
              <div class="adddatacn">
                <div class="dotborder">
                  <div class="iconbox" onClick={openModal}>
                    <MdAutoGraph
                      style={{
                        fontSize: "30px",
                        color: "white",
                        marginTop: "12px",
                      }}
                    />
                    <div class="iconcircle">
                      <FaPlus
                        style={{
                          fontSize: "16px",
                          color: "white",
                          marginTop: "7px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p>Add Data Points</p>
                <div>
                  <Modal isOpen={modalOpen} onClose={closeModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image divider */}
        <div className="Divider">
          <img src={Divider} alt="" />
          <p>Building Data</p>
          <img src={Divider} alt="" />
        </div>
        {/* divider end */}
        {/* graph part 3 */}
        <div className="part2">
          <div class="grid-container2">
            <div class="grid-item2" style={{ border: "2px solid #3F56A1" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Leak(Count)</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft
                    className="ghi"
                    style={{ marginLeft: "1vw", cursor: "pointer" }}
                  />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "8vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #16E8DF", marginLeft: "100px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>

            <div
              class="grid-item2"
              style={{ background: "#f8f7fd", marginLeft: "200px" }}
            >
              <div class="adddatacn">
                <div class="dotborder">
                  <div class="iconbox" onClick={openModal}>
                    <MdAutoGraph
                      style={{
                        fontSize: "30px",
                        color: "white",
                        marginTop: "12px",
                      }}
                    />
                    <div class="iconcircle">
                      <FaPlus
                        style={{
                          fontSize: "16px",
                          color: "white",
                          marginTop: "7px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p>Add Data Points</p>
                <div>
                  <Modal isOpen={modalOpen} onClose={closeModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image divider */}
        <div className="Divider">
          <img src={Divider} alt="" />
          <p>Air Quality Data</p>
          <img src={Divider} alt="" />
        </div>
        {/* divider end */}
        {/* graph part 4 */}
        <div className="part2">
          <div class="grid-container2">
            <div class="grid-item2" style={{ border: "2px solid #3F56A1" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #16E8DF", marginLeft: "100px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ border: "2px solid #3FB3A1", marginLeft: "200px" }}
            >
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div class="grid-item2" style={{ border: "2px solid #FFE401" }}>
              <div className="graph-head">
                <h2 style={{ fontSize: "20px" }}>&nbsp;Outdoor Temperature</h2>
                <div className="graph-head-icon">
                  <FaArrowRightArrowLeft className="ghi" />
                  <IoExpandSharp
                    className="ghi"
                    style={{ marginLeft: "2vw" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="grid-item2"
              style={{ background: "#f8f7fd", marginLeft: "100px" }}
            >
              <div class="adddatacn">
                <div class="dotborder">
                  <div class="iconbox" onClick={openModal}>
                    <MdAutoGraph
                      style={{
                        fontSize: "30px",
                        color: "white",
                        marginTop: "12px",
                      }}
                    />
                    <div class="iconcircle">
                      <FaPlus
                        style={{
                          fontSize: "16px",
                          color: "white",
                          marginTop: "7px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p>Add Data Points</p>
                <div>
                  <Modal isOpen={modalOpen} onClose={closeModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightmenu;
