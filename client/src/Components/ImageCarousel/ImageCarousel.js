import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";
import OfferCard from "../OfferCard/OfferCard";
//import Data from "../../JsonSamples/OfferMockData";

const ImageCarousel = () => {

  const [Data, setData]= useState([])
  //run data before rendering
  useEffect(() => {
    fetch("http://localhost:5000/OfferData",{
      method: "GET"}).then(response => response.json())
      .then((OfferData) => {
        console.log(OfferData);
        setData(OfferData);
        console.log(Data);
      })

  },[])


  return (
    <div className="ProductCarousel">
      <button
        className="PrevBtn"
        onClick={() => {
          let Box = document.querySelector(".ProductContainer");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft - Width;
        }}
      >
        <p>&lt;</p>
      </button>
      <button
        className="NextBtn"
        onClick={() => {
          let Box = document.querySelector(".ProductContainer");
          let Width = Box.clientWidth;
          Box.scrollLeft = Box.scrollLeft + Width;
        }}
      >
        <p>&gt;</p>
      </button>

      <div className="ProductContainer">
        {Data.map((OfferData) => {
          console.log( OfferData.BrandImage);
          return(  
            <OfferCard
            ProductImage={OfferData.ProductImage}
            BrandImage={OfferData.BrandImage}
            Discount={OfferData.Discount}
            Cashback={OfferData.Cashback}
            Color={OfferData.Color}
          />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
