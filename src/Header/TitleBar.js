import "./TitleBar.css";
import React from "react";
import Logo from "./Logo.png";
const TitleBar = () => {
  return (
    <div className="TitleContainer">
      <div>&#x0;</div>
      <img src={Logo}/>
      <input className="SearchBar" placeholder="What do you want to buy today...?" />
      <div className="Registration">
        <a href="www.google.com" target="_blank" id="earning">Total Earnings: &#8377;1550</a>
        <button>How Does it work?</button>
        <button>LogIn</button>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default TitleBar;
