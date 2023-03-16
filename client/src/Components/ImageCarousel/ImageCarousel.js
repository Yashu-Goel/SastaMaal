import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";
import OfferCard from "../OfferCard/OfferCard";
const API_BASE = "https://calm-ruby-hare-cape.cyclic.app";

const ImageCarousel = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    fetch(API_BASE+"/OfferData", {
      method: "GET"
    }).then(response => response.json())
      .then((OfferData) => {
        setData(OfferData);
      })

  }, [])


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
          Box.scrollLeft = Box.scrollLeft + Width - 5 ;
        }}
      >
        <p>&gt;</p>
      </button>

      <div className="ProductContainer">
        {Data.map((OfferData, index) => {
          return (
            <OfferCard
              key={index}
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
