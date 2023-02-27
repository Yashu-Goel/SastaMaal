import React from "react";
import "./TopCategories.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import Data from '../../JsonSamples/CategoryMockData';
const TopCategories = () => {
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
          <CategoryCard CategoryImage={Data[0].ImageSrc}/>
          <CategoryCard CategoryImage={Data[1].ImageSrc}/>
          <CategoryCard CategoryImage={Data[2].ImageSrc}/>
          <CategoryCard CategoryImage={Data[3].ImageSrc}/>
          <CategoryCard CategoryImage={Data[4].ImageSrc}/>
          <CategoryCard CategoryImage={Data[5].ImageSrc}/>
          <CategoryCard CategoryImage={Data[6].ImageSrc}/>
          <CategoryCard CategoryImage={Data[7].ImageSrc}/>
          <CategoryCard CategoryImage={Data[8].ImageSrc}/>
          <CategoryCard CategoryImage={Data[9].ImageSrc}/>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
