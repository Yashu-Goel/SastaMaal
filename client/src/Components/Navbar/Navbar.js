import Logo from "../../Header/LogoBlack.png";
import { AiFillSetting } from "react-icons/ai";
import React, { useState} from "react";
import { Link } from "react-router-dom";

import Support from "../Settngs/SuppModal";
import ResetModal from "../Settngs/ResetModal";

const Navbar = () => {

  const [showModal, setShowModal] = useState(false);
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
    <div className="NavBarContainer">
      <ul className="UIConatiner">
        <Link to="/">
          <img className="Logo" src={Logo} />
        </Link>
        <Link to="/setting" id="setting1">
          <AiFillSetting />
        </Link>
        <Link id="support" onClick={() => setShowModal(true)}>
          Support
        </Link>
        <Link to="/setting/payment-history">Payment History</Link>
        <Link to="/myearning">My Earnings</Link>
        <Link onClick={() => setResetModal(true)}>Reset Password</Link>
      </ul>
      {showModal && <Support closeModal={closeModal} />}
      {resetModal && <ResetModal closeResetModal={closeResetModal} />}
    </div>
  )
}

export default Navbar