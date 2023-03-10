import React, { useEffect, useState } from "react";
import './TopCashbackStores.css'
import TopCashbackStoresCard from '../TopCashbackStoresCard/TopCashbackStoresCard'


const TopCashbackStores = () => {

  const [Data, setData]= useState([])
  //run data before rendering
  useEffect(() => {
    fetch("http://localhost:5000/TopCashbackStoresData",{
      method: "GET"}).then(response => response.json())
      .then((OfferData) => {
        console.log(OfferData);
        setData(OfferData);
        console.log(Data);
      })

  },[])

  return (
    <div className='TopCashbackStoresMainConatiner'>
      <span>TOP CASHBACK STORES</span>
      <div className="TopCashbackStoresCarousel">
        <button
          className="PrevBtn"
          onClick={() => {
            let Box = document.querySelector(".TopCashbackStoresContainer");
            let Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft - Width;
            Box = document.querySelector(".TopCashbackStoresContainer1");
            Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft - Width;
          }}
        >
          <p>&lt;</p>
        </button>
        <button
          className="NextBtn"
          onClick={() => {
            let Box = document.querySelector(".TopCashbackStoresContainer ");
            let Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft + Width;
            Box = document.querySelector(".TopCashbackStoresContainer1");
            Width = Box.clientWidth;
            Box.scrollLeft = Box.scrollLeft + Width;
          }}
        >
          <p>&gt;</p>
        </button>
        <div className="TopCashbackStoresContainer">
        {Data.map((TopCashbackStoresArray) => {
          return(
          <TopCashbackStoresCard id={TopCashbackStoresArray.id} 
          ImageSrc={TopCashbackStoresArray.ImageSrc}
          Cashback={TopCashbackStoresArray.Cashback} 
          Offer={TopCashbackStoresArray.Offer}
          BrandName={TopCashbackStoresArray.BrandName}
          Link={TopCashbackStoresArray.Link}
        />
          );          
        })}
        </div>
        <div className="TopCashbackStoresContainer1">
        {Data.reverse().map((TopCashbackStoresArray) => {
          return(
          <TopCashbackStoresCard id={TopCashbackStoresArray.id} 
          ImageSrc={TopCashbackStoresArray.ImageSrc}
          Cashback={TopCashbackStoresArray.Cashback} 
          Offer={TopCashbackStoresArray.Offer}
          BrandName={TopCashbackStoresArray.BrandName}
          Link={TopCashbackStoresArray.Link}
        />
          );          
        })}
        </div>
      </div>
    </div>
  )
}

export default TopCashbackStores