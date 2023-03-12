import React from 'react'
import './OfferCard.css'

const Offer = (props) => {
  return (
<<<<<<< HEAD
    <div className='MainContainer' style={{ backgroundColor: props.Color }}>
      <div className='ImageConatiner'>
        <img src={props.ProductImage}></img>
      </div>
      <div className='LeftInnerConatiner'>
        <div className='BrandNameContainer'> <img src={props.BrandImage}></img> </div>
        <div className='OfferContainer'> {props.Discount} Off</div>
        <div className='CashBackContainer'> Cashback <div>&#8377;{props.Cashback}</div></div>
      </div>
=======
    <div className='MainContainer' style={{backgroundColor : props.Color}}>
        <div className='ImageConatiner'>
            <img src={props.ProductImage}></img>
        </div>
        <div className='LeftInnerConatiner'>
            <div className='BrandNameContainer'> <img src={props.BrandImage}></img> </div>
            <div className='OfferContainer'> {props.Discount} Off</div>
            <div className='CashBackContainer'> Cashback <div className='RupeeAdjustment'>&#8377; {props.Cashback}</div></div>
        </div>
>>>>>>> 777f6e54c5075f73d9d9292fae1dbe647846ca7b
    </div>
  )
}

export default Offer