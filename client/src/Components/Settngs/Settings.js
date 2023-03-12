import "./Settings.css";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";


import Support from "./SuppModal";
import ResetModal from "./ResetModal";
import Navbar from "../Navbar/Navbar";

const API_BASE = "http://localhost:5000";

const Settngs = () => {

  const [credentials, setCredentials] = useContext(CredentialContext);

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const secret = "hdahg g badhj yuida gdjhag dag jjh";
    const string = localStorage.getItem("user");
    if (string === null) return;
    let encryp = CryptoJS.AES.decrypt(string, secret).toString(
      CryptoJS.enc.Utf8
    );
    let data = JSON.parse(encryp);
    const email = data.email;
    const password = data.password;

    if (email !== null || password !== null) {
      setCredentials({ email, password });
    } else return;

    fetch(API_BASE + "/reload", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Configure Modal
  const [showModal, setShowModal] = useState(false);
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  // Configure Reset Password Modal
  const [resetModal, setResetModal]= useState(false);
  const closeResetModal = (e) => {
    e.preventDefault();
    setResetModal(false);
  };
  return (
    <>
      <div className="setContainer">
        <Navbar/>

        <div className="rightContainer">
          <div className="rightContainerTitle">
            <Link to="/setting" className="rightContTitLink">
              Personal Details
            </Link>
            <Link to="/change-pass" className="rightContTitLink">
              Change Password
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
