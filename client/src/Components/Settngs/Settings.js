import "./Settings.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import Support from "./SuppModal";
import ResetModal from "./ResetModal";
import Navbar from "../Navbar/Navbar";
import { toast } from "@mobiscroll/react";

const API_BASE = "http://localhost:5000";

const Settngs = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const string = localStorage.getItem("profile");
    if (string === null) return;

    axios.get(API_BASE + "/reload", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${string}`,
      },
    })
      .then((res) => setData(res.data))
      .catch((error) => toast.error(error.responsse.data.messsage));

  }, []);

  // Configure Modal
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  // Configure Reset Password Modal
  const [resetModal, setResetModal] = useState(false);
  const closeResetModal = (e) => {
    e.preventDefault();
    setResetModal(false);
  };
  return (
    <>
      <div className="setContainer">
        <Navbar />

        <div className="rightContainer">
          <div className="rightContainerTitle">
            <Link to="/setting" className="rightContTitLink">
              Personal Details
            </Link>
          </div>

          <div className="rightContainerDetails">
            <form className="rightContainerDetailsForm">
              <div className="innerform">
                <div className="setInput">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={data.name}
                    readOnly="readonly"
                  ></input>
                  <Link to="/setting/edit-name">
                    <i class="fas fa-edit"></i>
                  </Link>
                  <br />
                </div>

                <div className="setInput">
                  <label>Email Id:</label>

                  <input
                    type="email"
                    value={data.email.substring(0, 2) + "xxxxxxxxx.com"}
                    readOnly="readonly"
                  />
                  <Link id="support">
                    <i class="fas fa-edit"></i>
                  </Link>
                  <br />
                </div>
              </div>
              <br />
              <div className="formCB">
                <input type="checkbox" defaultChecked></input>
                <label>Receive Emails for promotions And Offers</label>
              </div>
              <div className="ReloadChanges">
                <input type="submit" value="Reload Changes"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && <Support closeModal={closeModal} />}
      {resetModal && <ResetModal closeResetModal={closeResetModal} />}
    </>
  );
};
export default Settngs;
