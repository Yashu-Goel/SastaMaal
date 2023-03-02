import React, { useState, useContext, useEffect } from 'react'
// import Popup from './Popup';
import './Settings.css';
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";

const API_BASE = "http://localhost:5000";

const Settngs = () => {
  const [credentials, setCredentials] = useContext(CredentialContext);

  const [data, setData] = useState({
    name: "",
    email: ""
  })

  useEffect(() => {
    const secret = "hdahg g badhj yuida gdjhag dag jjh";
    const string = localStorage.getItem("user");
    if (string === null) return;
    let encryp = CryptoJS.AES.decrypt(string, secret).toString(CryptoJS.enc.Utf8);
    let data = JSON.parse(encryp);
    const email = data.email;
    const password = data.password;

    if (email !== null || password !== null) {
      setCredentials({ email, password });
    }
    else
      return

    fetch(API_BASE + "/reload", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`
      }
    })
      .then((res) => res.json())
      .then((data) => setData(data))

  }, [])

  return (
    <div id='setContainer'>

      <div className='leftContainer'>
        <ul id='setUl'>
          <li className='setList'><a href="/setting" className='listLink'>Account Settings</a></li>
          <li className='setList'><a href="/myearning" className='listLink'>My Earnings</a></li>
          <li className='setList'><a href="#" className='listLink'>Payments</a></li>
          <li className='setList'><a href="#" className='listLink'>Payment History</a></li>
          <li className='setList'><a href="#" className='listLink'>Refer and Earn</a></li>
          <li className='setList'><a href="/setting/support" className='listLink' id='support'>Support</a></li>
        </ul>
      </div>

      <div className='rightContainer'>

        <div className='rightContainerTitle'>
          <a href='/setting' className='rightContTitLink'>Personal Details</a>
          <a href='/change-pass' className='rightContTitLink'>Change Password</a>
        </div>

        <div className='rightContainerDetails'>
          <form className='rightContainerDetailsForm'>
            <div className='innerform'>
              <div className='setInput'>
                <label>Full Name:</label>

                <a href='/setting/edit-name'><i class='fas fa-edit'></i></a>
                <br />
                <input type='text' value={data.name}  readOnly='readonly' />
              </div>

              <div className='setInput'>
                <label>Email Id:</label>
                <a href='/setting/support'><i class='fas fa-edit'></i></a>
                <br />
                <input type='email' value={data.email.substring(0,2)+"xxxxxxxxx.com"}readOnly='readonly' />
              </div>
            </div>
            <br />
            <div className='formCB'>
              <input type='checkbox' defaultChecked></input>
              <label>Receive Emails for promotions And Offers</label>
            </div>
            <input type='submit' value='Reload Changes' ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Settngs

// click && <Popup
//         content={<>
//           <b>Design your Popup</b>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//           <button>Test button</button>
//         </>}
//         handleClose={onClickHandler}
//       />}