import React from 'react'
import './TopCashbackStores.css'
import TopCashbackStoresCard from './TopCashbackStoresCard'
import Data from '../TopCashbackStores.json'
const TopCashbackStores = () => {
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
          <TopCashbackStoresCard ImageSrc={Data[0].ImageSrc}
          Cashback={Data[0].Cashback} Offer={Data[0].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[1].ImageSrc}
          Cashback={Data[1].Cashback} Offer={Data[1].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[2].ImageSrc}
          Cashback={Data[2].Cashback} Offer={Data[2].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[3].ImageSrc}
          Cashback={Data[3].Cashback} Offer={Data[3].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[4].ImageSrc}
          Cashback={Data[4].Cashback} Offer={Data[4].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[5].ImageSrc}
          Cashback={Data[5].Cashback} Offer={Data[5].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[6].ImageSrc}
          Cashback={Data[6].Cashback} Offer={Data[6].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[7].ImageSrc}
          Cashback={Data[7].Cashback} Offer={Data[7].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[8].ImageSrc}
          Cashback={Data[8].Cashback} Offer={Data[8].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[9].ImageSrc}
          Cashback={Data[9].Cashback} Offer={Data[9].Offer}
          />
        </div>
        <div className="TopCashbackStoresContainer1">
        <TopCashbackStoresCard ImageSrc={Data[5].ImageSrc}
          Cashback={Data[5].Cashback} Offer={Data[5].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[6].ImageSrc}
          Cashback={Data[6].Cashback} Offer={Data[6].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[7].ImageSrc}
          Cashback={Data[7].Cashback} Offer={Data[7].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[8].ImageSrc}
          Cashback={Data[8].Cashback} Offer={Data[8].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[9].ImageSrc}
          Cashback={Data[9].Cashback} Offer={Data[9].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[0].ImageSrc}
          Cashback={Data[0].Cashback} Offer={Data[0].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[1].ImageSrc}
          Cashback={Data[1].Cashback} Offer={Data[1].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[2].ImageSrc}
          Cashback={Data[2].Cashback} Offer={Data[2].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[3].ImageSrc}
          Cashback={Data[3].Cashback} Offer={Data[3].Offer}
          />
          <TopCashbackStoresCard ImageSrc={Data[4].ImageSrc}
          Cashback={Data[4].Cashback} Offer={Data[4].Offer}
          />
        </div>
      </div>
    </div>
  )
}

export default TopCashbackStores