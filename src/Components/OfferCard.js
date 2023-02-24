import React from 'react'
import './OfferCard.css'

const Offer = (props) => {
  return (
    <div className='MainContainer' style={{backgroundColor : props.Color}}>
        <div className='ImageConatiner'>
            <img src={props.ProductImage}></img>
        </div>
        <div className='LeftInnerConatiner'>
            <div className='BrandNameContainer'> <img src={props.BrandImage}></img> </div>
            <div className='OfferContainer'> {props.Discount} Off</div>
            <div className='CashBackContainer'> Cashback Rs. {props.Cashback}</div>
        </div>
    </div>
  )
}

export default Offer