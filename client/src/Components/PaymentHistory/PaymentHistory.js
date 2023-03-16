import './PaymentHistory.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Support from "../Settngs/SuppModal.js";

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const PaymentHistory = () => {

  const navigate = useNavigate();


  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState([]);

  const string = localStorage.getItem("profile");


  useEffect(() => {
    if (string === null) {
      alert("Session expired Please login in again...");
      navigate('/login');
      return;
    }

    fetch(API_BASE + "/fetch-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${string}`
      }
    })
      .then((res) => res.json())
      .then((data) => setDetails(data))

  })


  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div>
      <div className="setContainer">
        <Navbar />
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
                <h1>&#8377; {val.amount}</h1>
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