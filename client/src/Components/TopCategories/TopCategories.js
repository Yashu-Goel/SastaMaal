import React, { useEffect, useState } from "react";
import "./TopCategories.css";
import CategoryCard from "../CategoryCard/CategoryCard";
const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const TopCategories = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    fetch(API_BASE+"/TopCategoriesData", {
      method: "GET"
    }).then(response => response.json())
      .then((OfferData) => {
        setData(OfferData);
      })

  }, [])

  return (
    <div className="TopCategoriesMainContainer">
      <span>TOP CATEGORIES</span>
      <div className="CategoryCarousel">
        <button
          className="PrevBtn"
          onClick={() => {
            let Box = document.querySelector(".CategoryContainer");
            let Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft - Width + 45;
          }}
        >
          <p>&lt;</p>
        </button>
        <button
          className="NextBtn"
          onClick={() => {
            let Box = document.querySelector(".CategoryContainer");
            let Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft + Width - 45;
          }}
        >
          <p>&gt;</p>
        </button>
        <div className="CategoryContainer">
          {Data.map((TopCategoriesArray, index) => {
            return (
              <CategoryCard key={index} CategoryImage={TopCategoriesArray.ImageSrc} />
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default TopCategories;
