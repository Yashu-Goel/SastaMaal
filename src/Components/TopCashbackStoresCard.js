import React from 'react'
import './TopCashbackStoresCard.css'
const TopCashbackStoresCard = (props) => {
  return (
    <div className='MainContainer1'>
        
        <div className='ImageContainer'>
            {/* <div>
                
            </div> */}
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
        
        
    </div>
  )
}

export default TopCashbackStoresCard