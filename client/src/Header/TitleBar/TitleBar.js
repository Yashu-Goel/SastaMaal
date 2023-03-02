import "./TitleBar.css";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo.png";
import { CredentialContext } from "../../App";
import CryptoJS from "crypto-js";

const API_BASE = "http://localhost:5000"

const TitleBar = () => {
  const [credentials, setCredentials] = useContext(CredentialContext);
  const [amount, setAmount] = useState(0);


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

    fetch(API_BASE + "/amount", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${email}:${password}`
      }
    })
      .then((res) => res.json())
      .then((data) => setAmount(data));

  }, [amount])

  function Logout() {
    localStorage.removeItem("user");
    setCredentials(null);
  }
  return (
    <div className="TitleContainer">
      <div>&#x0;</div>
      <img src={Logo} alt="logo" />
      <input className="SearchBar" placeholder="What do you want to buy today...?" />
      <div className="Registration">
        {credentials && <a href="/myearning" id="earning">Total Earnings: &#8377;{amount}</a>}
        {credentials===undefined && <a href="/myearning" id="earning">Loading ...</a>}
        <button>How Does it work?</button>
        {!credentials && <a href="/login"><button>LogIn</button></a>}
        {!credentials && <a href="/signup"><button>Signup</button></a>}
        {credentials && <button className='butt bot' onClick={Logout}>Logout</button>}
        {credentials && <a href="/setting"><button className='butt bot' >Settings</button></a>}
      </div>
    </div>
  );
};

export default TitleBar;
