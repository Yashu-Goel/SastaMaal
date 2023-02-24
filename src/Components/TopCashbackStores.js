import React from 'react'
import './TopCashbackStores.css'
import TopCashbackStoresCard from './TopCashbackStoresCard'
import Data from '../TopCashbackStores.json'
const TopCashbackStores = () => {
  return (
    <div>
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
          <TopCashbackStoresCard ImageSrc={Data[0].ImageSrc}
          Cashback={Data[0].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[1].ImageSrc}
          Cashback={Data[1].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[2].ImageSrc}
          Cashback={Data[2].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[3].ImageSrc}
          Cashback={Data[3].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[4].ImageSrc}
          Cashback={Data[4].Cashback}
          />

        </div>
        <div className="TopCashbackStoresContainer1">
          <TopCashbackStoresCard ImageSrc={Data[5].ImageSrc}
          Cashback={Data[5].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[6].ImageSrc}
          Cashback={Data[6].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[7].ImageSrc}
          Cashback={Data[7].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[8].ImageSrc}
          Cashback={Data[8].Cashback}
          />
          <TopCashbackStoresCard ImageSrc={Data[9].ImageSrc}
          Cashback={Data[9].Cashback}
          />

        </div>
      </div>
    </div>
  )
}

export default TopCashbackStores