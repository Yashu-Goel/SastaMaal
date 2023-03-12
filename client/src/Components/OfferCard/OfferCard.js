import React from 'react'
import './OfferCard.css'

const Offer = (props) => {
  return (
    <div className='MainContainer' style={{ backgroundColor: props.Color }}>
      <div className='ImageConatiner'>
        <img src={props.ProductImage} alt="product_image"></img>
      </div>
      <div className='LeftInnerConatiner'>
        <div className='BrandNameContainer'> <img src={props.BrandImage} alt="brand_image"></img> </div>
        <div className='OfferContainer'> {props.Discount} Off</div>
        <div className='CashBackContainer'> Cashback <div>&#8377;{props.Cashback}</div></div>
      </div>
    </div>
  )
}

export default Offer