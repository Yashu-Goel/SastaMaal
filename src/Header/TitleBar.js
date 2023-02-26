import "./TitleBar.css";
import React, { useContext } from "react";
import Logo from "./Logo.png";

const TitleBar = () => {


  return (
    <div className="TitleContainer">
      <div>&#x0;</div>
      <img src={Logo} alt="logo" />
      <input className="SearchBar" placeholder="What do you want to buy today...?" />
      <div className="Registration">
        <a href="www.google.com" target="_blank" id="earning">Total Earnings: &#8377;1550</a>
        <button>How Does it work?</button>
        <><a href="/login"><button>LogIn</button></a>
          <a href="/signup"><button>Signup</button></a></>
      </div>
    </div>
  );
};

export default TitleBar;
