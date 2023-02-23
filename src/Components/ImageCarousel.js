import React from 'react'
import './ImageCarousel.css'
import OfferCard from './OfferCard'
import Data from '../mock_data.json'


const ImageCarousel = () => {
    
  return (
    <div className='ProductCarousel'>

        <button className='PrevBtn' onClick={()=>{
            let Box= document.querySelector('.ProductContainer')
            let Width=Box.clientWidth;
            Box.scrollLeft=(Box.scrollLeft - Width);
        }}><p>&lt;</p></button>
        <button className='NextBtn' onClick={()=>{
            let Box= document.querySelector('.ProductContainer')
            let Width=Box.clientWidth;
            Box.scrollLeft=(Box.scrollLeft + Width);
        }}><p>&gt;</p></button>

        <div className='ProductContainer'>
        <OfferCard ProductImage={Data[0].ProductImage} 
        BrandImage={Data[0].BrandImage} 
        Discount = {Data[0].Discount}
        Cashback={Data[0].Cashback}/>
        
        <OfferCard ProductImage={Data[1].ProductImage} 
        BrandImage={Data[1].BrandImage} 
        Discount = {Data[1].Discount}
        Cashback={Data[1].Cashback}/>

        <OfferCard ProductImage={Data[2].ProductImage} 
        BrandImage={Data[2].BrandImage} 
        Discount = {Data[2].Discount}
        Cashback={Data[2].Cashback}/>

        <OfferCard ProductImage={Data[3].ProductImage} 
        BrandImage={Data[3].BrandImage} 
        Discount = {Data[3].Discount}
        Cashback={Data[3].Cashback}/>

        <OfferCard ProductImage={Data[0].ProductImage} 
        BrandImage={Data[0].BrandImage} 
        Discount = {Data[0].Discount}
        Cashback={Data[0].Cashback}/>

        <OfferCard ProductImage={Data[0].ProductImage} 
        BrandImage={Data[0].BrandImage} 
        Discount = {Data[0].Discount}
        Cashback={Data[0].Cashback}/>

        
        </div>
    </div>
  )
}

export default ImageCarousel