import './PaymentHistory.css'
import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../Navbar/Navbar';
import Support from "../Settngs/SuppModal.js";
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";


const PaymentHistory = () => {
  const [credentials, setCredentials] = useContext(CredentialContext);
  const [showModal, setShowModal] = useState(false);

  const [details, setDetails] = useState([]);

  const API_BASE = "http://localhost:5000";

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

    fetch(API_BASE + "/fetch-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDetails(data))

  }, [details])


  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <div className="setContainer">
        <Navbar/>
        {showModal && <Support closeModal={closeModal} />}


        <div className='payment-container'>

          <div className='pay-heading'>
            <h1>Payment Details</h1>
          </div>

          <div className='sub-pay-main'>

            <div className='sub-sub-pay-main'>
              <h1>Request Id</h1>
            </div>

            <div className='sub-sub-pay-main'>
              <h1>Date Paid</h1>
            </div>

            <div className='sub-sub-pay-main'>
              <h1>Payment Mode</h1>
            </div>

            <div className='sub-sub-pay-main'>
              <h1>Amount Paid</h1>
            </div>

            <div className='sub-sub-pay-main'>
              <h1>Reference Number</h1>
            </div>

            <div className='sub-sub-pay-main'>
              <h1>Paid By</h1>
            </div>

            <div className='sub-sub-pay-main last-pay'>
              <h1>UPI Id</h1>
            </div>

          </div>
          {details == null && <p id='no-pay-msg'>No recent withdrawals</p>}

          {details.map((val, index) => {

            return (<div className='sub-pay' key={index}>

              <div className='sub-sub-pay'>
                <h1>{val.id}</h1>
              </div>

              <div className='sub-sub-pay'>
                <h1>{val.date}</h1>
              </div>

              <div className='sub-sub-pay'>
                <h1>{val.mode}</h1>
              </div>

              <div className='sub-sub-pay'>
                <h1>{val.amount}</h1>
              </div>

              <div className='sub-sub-pay'>
                <h1>{val.ref_no}</h1>
              </div>

              <div className='sub-sub-pay'>
                <h1>{val.by}</h1>
              </div>

              <div className='sub-sub-pay last-pay'>
                <h1>{val.upi_id}</h1>
              </div>

            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory