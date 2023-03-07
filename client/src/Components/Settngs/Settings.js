import React, { useState, useContext, useEffect } from "react";
// import Popup from './Popup';
import "./Settings.css";
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";
import { AiFillSetting } from "react-icons/ai";
import Logo from "../../Header/LogoBlack.png";
const API_BASE = "http://localhost:5000";

const Settngs = () => {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll(".setList a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add(".listLink");
    }
  });

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

  return (
    <div className="setContainer">
      <div className="NavBarContainer">
        <ul className="UIConatiner">
          <a href="/">
            {" "}
            <img className="Logo" src={Logo} />
          </a>
          <li>
            <a href="/setting" id="setting1">
              <AiFillSetting />
            </a>
          </li>
          <li>
            <a href="/setting/support" id="support">
              Support
            </a>
          </li>
          <li>
            <a href="#">Refer and Earn</a>
          </li>
          <li>
            <a href="#">Payment History</a>
          </li>
          <li>
            <a href="#">Payments</a>
          </li>
          <li>
            <a href="/myearning">My Earnings</a>
          </li>
        </ul>
      </div>

      <div className="rightContainer">
        <div className="rightContainerTitle">
          <a href="/setting" className="rightContTitLink">
            Personal Details
          </a>
          <a href="/change-pass" className="rightContTitLink">
            Change Password
          </a>
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
                <a href="/setting/edit-name">
                  <i class="fas fa-edit"></i>
                </a>
                <br />
              </div>

              <div className="setInput">
                <label>Email Id:</label>

                <input
                  type="email"
                  value={data.email.substring(0, 2) + "xxxxxxxxx.com"}
                  readOnly="readonly"
                />
                <a href="/setting/support">
                  <i class="fas fa-edit"></i>
                </a>
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
  );
};
export default Settngs;

// click && <Popup
//         content={<>
//           <b>Design your Popup</b>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//           <button>Test button</button>
//         </>}
//         handleClose={onClickHandler}
//       />}
