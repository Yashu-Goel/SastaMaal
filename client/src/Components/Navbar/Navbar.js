import './Navbar.css'
import { AiFillSetting } from "react-icons/ai";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Support from "../Settngs/SuppModal";
import ResetModal from "../Settngs/ResetModal";

const Navbar = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  function LogoutHandler() {
    localStorage.removeItem("profile");
    navigate('/');
  }

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const [resetModal, setResetModal] = useState(false);

  const closeResetModal = (e) => {
    e.preventDefault();
    setResetModal(false);
  };

  return (
    <div className="topnav">
      <Link to='/'>Home</Link>
      <Link id="support" onClick={() => setShowModal(true)}>Support</Link>
      <Link to="/setting/payment-history">Payment History</Link>
      <Link to="/myearning">My Earnings</Link>
      <Link onClick={() => setResetModal(true)}>Reset Password</Link>
      <Link to="/setting" id="setting1" className='active'><AiFillSetting /></Link>
      <Link to='/' onClick={LogoutHandler} >Logout</Link>
      {showModal && <Support closeModal={closeModal} />}
      {resetModal && <ResetModal closeResetModal={closeResetModal} />}
    </div>
  )
}

export default Navbar