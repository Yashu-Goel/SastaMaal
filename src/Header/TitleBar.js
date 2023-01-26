import "./TitleBar.css";
import React from "react";

const TitleBar = () => {
  return (
    <div className="TitleContainer">
      <div>&#x0;</div> {/*Null Character */}
      <div className="SearchBar">Search Bar</div>
      <div className="Registration">
        <button>LogIn</button>
        <button>SignIn</button>
      </div>
    </div>
  );
};

export default TitleBar;
