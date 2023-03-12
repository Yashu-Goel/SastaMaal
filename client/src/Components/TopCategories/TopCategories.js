import React, { useEffect, useState } from "react";
import "./TopCategories.css";
import CategoryCard from "../CategoryCard/CategoryCard";
const TopCategories = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/TopCategoriesData", {
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
            Box.scrollLeft = Box.scrollLeft - Width;
          }}
        >
          <p>&lt;</p>
        </button>
        <button
          className="NextBtn"
          onClick={() => {
            let Box = document.querySelector(".CategoryContainer");
            let Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft + Width;
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
