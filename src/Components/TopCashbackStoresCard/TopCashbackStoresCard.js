import React from 'react'
import './TopCashbackStoresCard.css'
const TopCashbackStoresCard = (props) => {
  return (
    <div className='MainContainer1'>
        <a href="https://www.amazon.in/" className='AnchorContainer'>
        <div className='ImageContainer'>
            <p>{props.Offer}</p>
        <img src={props.ImageSrc}/>
        </div>
        <div className='CashbackContainer'>
            <p>
                EARN {props.Cashback}% CASHBACK NOW &#9654;
            </p>
        </div>
        <div className='TermsContainer'>
            <p>Cashback Rates & Terms</p>
        </div>
        </a>
        
    </div>
  )
}

export default TopCashbackStoresCard