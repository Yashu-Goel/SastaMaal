import "./TitleBar.css";
import React, { useEffect, useState } from "react";
import Logo from "../Logo.png";
import { AiFillSetting } from "react-icons/ai";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const API_BASE = "https://calm-ruby-hare-cape.cyclic.app"

const TitleBar = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(false);
  const [amount, setAmount] = useState(0);


  useEffect(() => {

    const string = localStorage.getItem("profile");

    if (string === null && credentials === true) {
      toast.error("Session Expired Redirecting to login page....");

      setTimeout(() => {
        navigate("/login");
      }, 2500)
    }

    axios.get(API_BASE + "/amount", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${string}`
      }
    })
      .then((res) => {
        setCredentials(true);
        setAmount(res.data);
      })
      .catch((error) => console.log("Not loginned"));
  })

  function Logout() {
    localStorage.removeItem("profile");
    setCredentials(false);
  }

  return (
    <>
      <div className="TitleContainer">
        <div>&#x0;</div>
        <img src={Logo} alt="logo" />
        <input className="SearchBar" placeholder="What do you want to buy today...?" />
        <div className="Registration">
          {credentials && <Link to="/myearning" id="earning">Total Earnings: &#8377;{amount}</Link>}
          {credentials === undefined && <Link to="/myearning" id="earning">Loading ...</Link>}
          <Link to="/querycard"><button>How Does it work?</button></Link>
          {!credentials && <Link to='/login'><button>LogIn</button></Link>}
          {!credentials && <Link to='/signup'><button>Signup</button></Link>}
          {credentials && <button className='butt bot' onClick={Logout}>Logout</button>}
          {credentials && <Link to="/setting"> <button className='butt bot' id="setting" ><AiFillSetting /></button></Link>}
        </div>
        </div>
        <ToastContainer autoClose={2000} />
      </>)};

      export default TitleBar;
